import {
  Entypo,
  FontAwesome,
  Fontisto,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { useContext, useState } from "react";
import CountryPicker, {
  Country,
  CountryCode,
} from "react-native-country-picker-modal";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";
import SectionsLogin from "@/styles/Login/Login.styles";
import UncommonStyles from "@/styles/Uncommon.styles";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from "@/context/AuthContext";

export default function SignUpScreen() {
  const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("US"); // Default to 'US'
  const [callingCode, setCallingCode] = useState("1"); // Default calling code for 'US'
  

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUserDetails} = useContext(AuthContext);

  // Handle phone number change, only numeric values
  const handlePhoneChange = (number) => {
    const filteredNumber = number.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    setPhoneNumber(filteredNumber);
  };

  // Handle country selection from CountryPicker
  const onSelectCountry = (country) => {
    setCountryCode(country.cca2); // Set the selected country code
    setCallingCode(country.callingCode[0]); // Set the corresponding calling code
  };

  // const handlePrint = () => {
  //   router.push("/(routes)/finger-print");
  // };

  const handleSignUp = async () => {
    
    if (!agreePrivacy || !agreeTerms) {
      return Alert.alert(
        "Please Agree with our terms and Privacy",
        "Agree with our Terms and Privacy to continue"
      );
    }
    // const response = axios.post();
    if (!name || !email || !password || !phoneNumber) {
      return Alert.alert(
        "Please fill all fields",
        "One or more fields is empty. Please fill to continue"
      );
    }
    try {
      setButtonSpinner(true)
      const response = await axios.post(`${baseUrl}/api/sign-up`, {
        name,
        email,
        password,
        phone: "+" + callingCode + phoneNumber,
      });
      await AsyncStorage.clear();
      setButtonSpinner(false)
      
      await AsyncStorage.setItem('userDetails', JSON.stringify(response.data.user));
       await AsyncStorage.setItem('authToken', response.data.token);
      const tokens = await AsyncStorage.getItem('authToken');
      
      setUserDetails(response.data.user);
      router.push('/login');
      
    } catch (error) {
      setButtonSpinner(false);
      console.log(error.response.data.message, error);
    }
  };
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "center",
        paddingTop: "33%",
        height: "100%",
      }}
    >
      <View>
        <Text
          style={[
            SectionsLogin.welcomeText,
            {
              fontFamily: "SofiaPro",
              color: "#0A2EE2",
              lineHeight: 43.95,
              fontWeight: "400",
              fontSize: 30,
            },
          ]}
        >
          Create Your Account
        </Text>
        <View style={SectionsLogin.inputContainer}>
          {/* Name */}
          <View>
            <TextInput
              style={[
                SectionsLogin.input,
                { fontFamily: "SofiaPro", paddingHorizontal: 0 },
              ]}
              keyboardType="default"
              value={name}
              placeholder="Username"
              onChangeText={(value) => setName(value)}
            />
          </View>

          {/* Email Input */}
          <View style={{ marginTop: 20 }}>
            <TextInput
              style={[
                SectionsLogin.input,
                { fontFamily: "SofiaPro", paddingHorizontal: 0 },
              ]}
              keyboardType="email-address"
              value={email}
              placeholder="email"
              onChangeText={(value) => setEmail(value)}
            />
          </View>

          {/* Phone Number Input */}
          <View style={styles.container}>
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
                style={[styles.phoneInput, { fontFamily: "SofiaPro" }]}
                keyboardType="numeric"
                value={phoneNumber}
                onChangeText={handlePhoneChange}
                placeholder="Phone number"
              />
            </View>
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* Password Input */}
            <View style={{ width: "100%" }}>
              <TextInput
                style={[SectionsLogin.input, { fontFamily: "SofiaPro" }]}
                secureTextEntry={!isPasswordVisible}
                value={password}
                placeholder="password"
                onChangeText={(value) => setPassword(value)}
              />
              <TouchableOpacity
                style={SectionsLogin.visibleIcon}
                onPress={() => setPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? (
                  <Ionicons
                    name="eye-off-outline"
                    size={20}
                    color={"#747474"}
                  />
                ) : (
                  <Ionicons name="eye-outline" size={20} color={"#747474"} />
                )}
              </TouchableOpacity>
            </View>
            {/* Finger print */}
            {/* <TouchableOpacity onPress={handlePrint}>
              <Ionicons name="finger-print-outline" size={44} color="black" />
            </TouchableOpacity> */}
          </View>

          <View style={styles.checkboxContainer}>
            {/* Agree with Terms & Conditions */}
            <TouchableOpacity
              style={[styles.checkbox, agreeTerms && styles.checkboxSelected]}
              onPress={() => setAgreeTerms(!agreeTerms)}
            >
              {agreeTerms && <Text style={styles.checkmark}>✔</Text>}
            </TouchableOpacity>
            <Text style={[styles.checkboxLabel, { fontFamily: "SofiaPro" }]}>
              I agree with{" "}
            </Text>
            <Text
              style={[
                styles.checkboxLabel,
                { fontFamily: "SofiaPro", color: "#0A2EE2" },
              ]}
            >
              Terms & Conditions
            </Text>
          </View>

          <View style={styles.checkboxContainer}>
            {/* Agree with Privacy Policy */}
            <TouchableOpacity
              style={[styles.checkbox, agreePrivacy && styles.checkboxSelected]}
              onPress={() => setAgreePrivacy(!agreePrivacy)}
            >
              {agreePrivacy && (
                <Text style={[styles.checkmark, { fontFamily: "SofiaPro" }]}>
                  ✔
                </Text>
              )}
            </TouchableOpacity>
            <Text style={[styles.checkboxLabel, { fontFamily: "Alata" }]}>
              I agree with the{" "}
            </Text>
            <Text
              style={[
                styles.checkboxLabel,
                { fontFamily: "Alata", color: "#0A2EE2" },
              ]}
            >
              {" "}
              Privacy Policy
            </Text>
          </View>

          {/* Login Button */}
          <TouchableOpacity
            style={SectionsLogin.loginButton}
            disabled={buttonSpinner}
            onPress={handleSignUp}
          >
            {buttonSpinner ? (
              <ActivityIndicator size="small" color={"white"} />
            ) : (
              <Text
                style={[
                  SectionsLogin.loginButtonText,
                  { fontFamily: "SofiaPro" },
                ]}
              >
                SignUp
              </Text>
            )}
          </TouchableOpacity>

          {/* Sign Up Redirect */}
          <View style={SectionsLogin.signupRedirect}>
            <Text
              style={{
                fontFamily: "SofiaPro",
                fontSize: 18,
                lineHeight: 26.37,
                fontWeight: "400",
                color: "#8E949A",
              }}
            >
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => router.push("/login")}>
              <Text
                style={[SectionsLogin.signUpText, { fontFamily: "SofiaPro" }]}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

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
