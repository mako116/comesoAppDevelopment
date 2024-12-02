import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import * as LocalAuthentication from "expo-local-authentication";
const FingerPrintScreen = () => {
  const router = useRouter();
  const [supportBiometric, setSupportBiometric] = useState(false);
  const handleFingerPrint = async () => {
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

    if (!isBiometricAvailable) {
      Alert.alert(
        "Biometric Not available",
        "Biometric Authentication is not supported on this device. Please sign up normally"
      );

      return router.push('/signup');
    }
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if(!savedBiometrics){
      return Alert.alert('Biometric record not found', 'Please login with your password')
    }
    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage:'Sign up to Comeso',
      cancelLabel:'Cancel',
      disableDeviceFallback:true
    })
  };

  return (
    <View style={styles.container}>
      <View style={styles.stageContainer}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.title}>Fingerprint</Text>
          <Text style={styles.description}>
            Place your finger on the fingerprint sensor until the icon
            completes.
          </Text>
        </View>
        {/* Finger print */}
        <TouchableOpacity onPress={handleFingerPrint}>
          <Ionicons name="finger-print-outline" size={54} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FingerPrintScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  stageContainer: {
    height: "100%",
    paddingVertical: "20%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 43.95,
    fontFamily: "SofiaPro",
    color: "#2d2d2d",
    marginBottom: 10,
  },
  description: {
    fontFamily: "SofiaPro",
    fontSize: 18,
    lineHeight: 25.2,
    textAlign: "center",
    fontWeight: "500",
    color: "#2d2d2d",
  },
});
