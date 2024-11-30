import { Entypo, FontAwesome, Fontisto, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { ActivityIndicator, Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import SectionsLogin from "@/styles/Login/Login.styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "@/context/AuthContext";

export default function LoginScreen() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const {setUserDetails, userDetails} = useContext(AuthContext)
  const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;
  

  const handleSignIn = async () => {
    if(!email || !password){
      return Alert.alert('All fields are required', 'Please fill in all the fields to continue')
    }
    setButtonSpinner(true);

    try {
      const response = await axios.post(`${baseUrl}/api/login`, {email, password});
      
      if(response.data.status){
       
      
        await AsyncStorage.clear();
        await AsyncStorage.setItem('authToken', response.data.token);

      
        // await AsyncStorage.setItem('userDetails', JSON.stringify(response.data.user));
        setUserDetails(response.data.user);

        
      
        router.push('/(tabs)/home');
      }
    } catch (error) {
      setButtonSpinner(false);
       Alert.alert('Invalid credentials', 'Please provide the correct credentials to login');
      
    }
  
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
      <Text style={[SectionsLogin.welcomeText, {fontFamily: 'SofiaPro', color:"#0A2EE2", lineHeight:43.95, fontWeight:"400" }]}>
        Login to Your Account
      </Text>
      <View style={SectionsLogin.inputContainer}>
        {/* Email Input */}
        <View>
          <TextInput
            style={[SectionsLogin.input, {fontFamily: 'SofiaPro', paddingHorizontal: 0 }]}
            keyboardType="email-address"
            value={email}
            placeholder="email"
            onChangeText={(value) =>
              setEmail(value)
            }
          />
           
        </View>

        {/* Password Input */}
        <View style={{ marginTop: 15 }}>
          <TextInput
            style={[SectionsLogin.input,{fontFamily: 'SofiaPro',}]}
            secureTextEntry={!isPasswordVisible}
            value={password}
            placeholder="password"
            onChangeText={(value) =>
              setPassword(value)
            }
          />
          <TouchableOpacity
            style={[SectionsLogin.visibleIcon,{fontFamily: 'SofiaPro',}]}
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
            <Text style={[SectionsLogin.loginButtonText,{fontFamily: 'SofiaPro',}]}>Login</Text>
          )}
        </TouchableOpacity>

        {/* Forgot Password */} 
        <TouchableOpacity
          onPress={() => router.push("/(routes)/forgot-password")}
        >
          <Text style={[SectionsLogin.forgotSection, { fontFamily: 'SofiaPro', }]}>
            Forget User / Forgot Password ?
          </Text>
        </TouchableOpacity>

        {/* Social Login */}
        <TouchableOpacity style={SectionsLogin.socialLogin}>
        <Ionicons name="finger-print-outline" size={44} color="black" />
        </TouchableOpacity>

        {/* Sign Up Redirect */}
        <View style={SectionsLogin.signupRedirect}>
          <Text style={{fontFamily: 'SofiaPro', fontSize: 18,  lineHeight:26.37, fontWeight:"400", color:"#8E949A"}}>
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


