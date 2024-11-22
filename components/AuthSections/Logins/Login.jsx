import { Entypo, FontAwesome, Fontisto, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import SectionsLogin from "@/styles/Login/Login.styles";

export default function LoginScreen() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [required, setRequired] = useState("");
  const [error, setError] = useState({
    password: "",
  });

  const handleSignIn = () => {
    setButtonSpinner(true);
    setTimeout(() => {
      if (!userInfo.email || !userInfo.password) {
        setRequired("Email and password are required.");
        setButtonSpinner(false);
      } else if (userInfo.password.length < 6) {
        setError({ password: "Password must be at least 6 characters long." });
        setButtonSpinner(false);
      } else {
        setRequired("");
        setError({ password: "" });
        setButtonSpinner(false);
        // Replace with API call or navigation logic
        router.push("(tabs)/home");
        alert("Logged in successfully!");
      }
    }, 2000);
  };

  return (
    <ScrollView 
    contentContainerStyle={{
        // flex:1,
        justifyContent:'center',
        paddingTop:"33%",
        height:"100%"
        }}
    >
        <View style={{
         
        }}>
      <Text style={[SectionsLogin.welcomeText, { color:"#0A2EE2", lineHeight:43.95, fontWeight:"400" }]}>
        Login to Your Account
      </Text>
      <View style={SectionsLogin.inputContainer}>
        {/* Email Input */}
        <View>
          <TextInput
            style={[SectionsLogin.input, { paddingHorizontal: 0 }]}
            keyboardType="email-address"
            value={userInfo.email}
            placeholder="user Id"
            onChangeText={(value) =>
              setUserInfo({ ...userInfo, email: value })
            }
          />
           
        </View>

        {/* Password Input */}
        <View style={{ marginTop: 15 }}>
          <TextInput
            style={SectionsLogin.input}
            secureTextEntry={!isPasswordVisible}
            value={userInfo.password}
            placeholder="password"
            onChangeText={(value) =>
              setUserInfo({ ...userInfo, password: value })
            }
          />
          <TouchableOpacity
            style={SectionsLogin.visibleIcon}
            onPress={() => setPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? (
              <Ionicons name="eye-off-outline" size={20} color={"#747474"} />
            ) : (
              <Ionicons name="eye-outline" size={20} color={"#747474"} />
            )}
          </TouchableOpacity>
          
        </View>
        

        {/* Login Button */}
        <TouchableOpacity
          style={SectionsLogin.loginButton}
          onPress={handleSignIn}
          disabled={buttonSpinner}
        >
          {buttonSpinner ? (
            <ActivityIndicator size="small" color={"white"} />
          ) : (
            <Text style={SectionsLogin.loginButtonText}>Login</Text>
          )}
        </TouchableOpacity>

        {/* Forgot Password */} 
        <TouchableOpacity
          onPress={() => router.push("/(routes)/forgot-password")}
        >
          <Text style={[SectionsLogin.forgotSection, { fontFamily: "Nunito_600SemiBold" }]}>
            Forget User / Forgot Password ?
          </Text>
        </TouchableOpacity>

        {/* Social Login */}
        <TouchableOpacity style={SectionsLogin.socialLogin}>
        <Ionicons name="finger-print-outline" size={44} color="black" />
        </TouchableOpacity>

        {/* Sign Up Redirect */}
        <View style={SectionsLogin.signupRedirect}>
          <Text style={{ fontSize: 18,  lineHeight:26.37, fontWeight:"400", color:"#8E949A"}}>
            Don’t have an account?
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/(routes)/signup")}
          >
            <Text style={SectionsLogin.signUpText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </ScrollView>
  );
}


