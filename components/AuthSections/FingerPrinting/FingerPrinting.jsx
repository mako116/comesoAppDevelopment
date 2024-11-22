import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const FingerPrintScreen =() =>{
  const [stage, setStage] = useState(1); // 1: Initial View, 2: Scanning View
  const router = useRouter();

  useEffect(() => {
    // Transition to the scanning view after 5 seconds
    const timer1 = setTimeout(() => {
      setStage(2);
    }, 5000);

    // Navigate to /home after another 5 seconds (10 seconds total)
    const timer2 = setTimeout(() => {
      router.push("/home");
    }, 10000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <View style={styles.container}>
      {stage === 1 && (
        <View style={styles.stageContainer}>
         <View style={{justifyContent:"center", alignItems:"center"}}>
         <Text style={styles.title}>Fingerprint</Text>
          <Text style={styles.description}>
            Place your finger on the fingerprint sensor until the icon
            completes.
          </Text>
         </View>
           {/* Finger print */}
         <TouchableOpacity  >
        <Ionicons name="finger-print-outline" size={54} color="black" />
        </TouchableOpacity>
        </View>
      )}
      {stage === 2 && (
        <View style={styles.stageContainer}>
          <View style={{justifyContent:"center", alignItems:"center"}}>
          <Text style={styles.title}>Scanning...</Text>
          <Text style={styles.description}>
            Once your scanning is complete, you will be able to sign in using
            your fingerprint.
          </Text>
          </View>

          <TouchableOpacity  >
        <Ionicons name="finger-print-outline" size={54} color="black" />
        </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default FingerPrintScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
   },
  stageContainer: {
    height:"100%",
    paddingVertical:"20%",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    lineHeight:43.95,
    // textAlign: "center",
    color: "#2d2d2d",
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    lineHeight:25.2,
    textAlign: "center",
    fontWeight:"500",
    color: "#2d2d2d",
  },
});
