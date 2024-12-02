import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import LoginScreen from '@/components/AuthSections/Logins/Login';
  
const LoginScreens = () =>{
  return (
    <View style={styles.background}>
    <View
       style={{
            position:"absolute",right:"-0%",borderTopLeftRadius:50
       }}>
     <Image
      source={require('../../../assets/images/Ellipse2.png')}
       
      />
     </View>
     <View
       style={{
            position:"absolute",left:"-15%",bottom:"0%",borderTopLeftRadius:50, 
            justifyContent:"center"
       }}>
     <Image
      source={require('../../../assets/images/Ellipse.png')}
    //   style={{zIndex:-10}} 
      />
     </View>
     <LoginScreen/>
     
    </View>
  )
}

const styles = StyleSheet.create({
    background:{
      flex:1,
      backgroundColor:"#ffffff",
      
       },
    welcomeText:{
      textAlign:"center",
      fontSize:40,
      color:"#fff",
      fontWeight:"600"
    },
    container:{
        display:"flex",
         height:"100%",
        justifyContent: "center",
        alignItems:"center",
        // zIndex:1,
       },
    });

    export default LoginScreens;