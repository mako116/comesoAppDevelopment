import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import CountryPicker, {
  Country,
  CountryCode,
} from "react-native-country-picker-modal";
import CustomBlueButton from "./CustomBlueButton";

const BeneficiaryModal = ({ toggleModal, image }) => {
  const [countryCode, setCountryCode] = useState("US");
  const [callingCode, setCallingCode] = useState("1");
  const onSelectCountry = (country) => {
    setCountryCode(country.cca2); // Set the selected country code
    setCallingCode(country.callingCode[0]); // Set the corresponding calling code
  };
  return (
    <>
      <View
        style={{
          flex: 1,
          position: "absolute",
          backgroundColor: "rgba(164, 169, 174, 0.25)",
          top: "5%",
          width: "100%",
          height: "100%",
          opacity: 0.9,
          left: "1%",
        }}
      ></View>

      <View
        style={{
          width: "95%",
          height: "85%",
          backgroundColor: "white",
          opacity: 1,
          position: "absolute",
          top: "15%",
          left: "3%",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal: "5%",
          paddingVertical: "5%",
        }}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "Sofia", fontSize: 19 }}>
            Edit Beneficiary
          </Text>
          <TouchableOpacity onPress={toggleModal}>
            <AntDesign name="close" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: "auto", marginTop: "10%" }}>
          <Image
            source={image}
            style={{ width: 80, height: 80 }}
            resizeMode="contain"
          />
        </View>

        <View style={{ gap: 10 }}>
          <View
            style={{
              backgroundColor: "rgba(164, 169, 174, 0.2)",
              width: "100%",
              marginHorizontal: "auto",
              marginTop: 20,
              borderRadius: 10,
              paddingVertical: 5,
            }}
          >
            <TextInput placeholder="First Name" />
          </View>
          <View
            style={{
              backgroundColor: "rgba(164, 169, 174, 0.2)",
              width: "100%",
              marginHorizontal: "auto",

              borderRadius: 10,
              paddingVertical: 5,
            }}
          >
            <TextInput placeholder="Last Name" />
          </View>
          <View
            style={{
              //   backgroundColor: "white",
              width: "100%",
              marginHorizontal: "auto",

              borderRadius: 10,
              paddingVertical: 5,
            }}
          >
            <View style={styles.phoneContainer}>
              <CountryPicker
                countryCode={countryCode}
                withFilter
                withFlag
                withCallingCode
                withCountryNameButton={false}
                onSelect={onSelectCountry}
                containerButtonStyle={styles.flagButton}
              />
              <Text style={styles.callingCode}>+{callingCode}</Text>
              <TextInput
                style={styles.phoneInput}
                keyboardType="numeric"
                // value={phoneNumber}
                // onChangeText={handlePhoneChange}
                placeholder="Phone number"
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: "rgba(164, 169, 174, 0.2)",
              width: "100%",
              marginHorizontal: "auto",

              borderRadius: 10,
              paddingVertical: 5,
            }}
          >
            <TextInput placeholder="Email" />
          </View>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <View
              style={{
                backgroundColor: "rgba(164, 169, 174, 0.2)",
                width: "100%",
                marginHorizontal: "auto",

                borderRadius: 10,
                paddingVertical: 5,
                flex: 4,
              }}
            >
              <TextInput placeholder="Password" />
            </View>
            <View
              style={{
                backgroundColor: "rgba(164, 169, 174, 0.2)",
                flex: 1,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image source={require("../assets/images/fingerprint.png")} />
            </View>
          </View>
        </View>
        <CustomBlueButton text='Edit Beneficiary' toggleModal={toggleModal} onPress={()=>{}}/>
      </View>
    </>
  );
};

export default BeneficiaryModal;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#F1F2F3",
    width: "100%",
    left: "-5%",
  },
  callingCode: {
    marginRight: 10,
    fontSize: 16,
    color: "#333",
  },
  flagButton: {
    marginLeft: 8,
  },
  phoneInput: {
    height: 55,
    borderRadius: 3,
    borderLeftWidth: 1,
    borderColor: "#E9E9E9",
    paddingLeft: 15,
    fontSize: 14,
    color: "#a1a1a1",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    marginHorizontal: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#0A2EE2",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    marginRight: 10,
  },
  checkboxSelected: {
    backgroundColor: "#0A2EE2",
  },
  checkmark: {
    color: "#fff",
    fontSize: 10,
  },
  checkboxLabel: {
    color: "#8E949A",
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 23.44,
  },
});
