import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { router } from 'expo-router';
 
const  OnBoardingScreen =()=> {
      
    useEffect(()=>{
        setTimeout(() => {
            // router.push("/(tabs)/home")
            router.push("/(routes)/Welcome-intro")
         }, 2000);
    },[])

  return (
    <View style={styles.background}>
           <StatusBar hidden />
      {/* <Text style={styles.welcomeText}>splashs</Text> */}
      <View
       style={{
            position:"absolute",right:"-15%",borderTopLeftRadius:50
       }}>
     <Image
      source={require('../../assets/images/Ellipse2.png')}
      style={{}} 
      />
     </View>
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
    <Image
      source={require('../../assets/images/COMESO.png')}
      style={styles.logo}
      />
     </View>
     <View
       style={{
            position:"absolute",left:"-15%",bottom:"-15%",borderTopLeftRadius:50
       }}>
     <Image
      source={require('../../assets/images/Ellipse.png')}
      style={{}} 
      />
     </View>
       
    </View>
  )
}


export default OnBoardingScreen;

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
    logo:{
       display:"flex",
      justifyContent:"center",
      alignItems:"center",
      width:"90%",
      marginBottom:"20%",
      objectFit:"contain"
    },
    
  })