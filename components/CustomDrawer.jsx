// CustomDrawerContent.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { router } from 'expo-router';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function CustomDrawerContent(props) {
    
  return (
    <DrawerContentScrollView {...props}>
      <View style={{
        flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingRight:30,
  shadowBox: {
    // width: 100,
    // height: 100,
    backgroundColor: 'gray',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
}}
  
      >
        {/* <View style={{width:97}}>
            <Image source={require('@/assets/icons/logo.png')}   style={{width:'100%', height:57}}/>
        </View> */}
        <View>
            {/* <Image source={require('@/assets/icons/close.png')} width={24} height={24}/> */}
        </View>
      </View>

      <View style={{height:'100%'}}>
      <DrawerItem
      
      label="Manage Profile"
    //   icon={() => <Image source={require('@/assets/icons/contact-info.png')} width={24} height={24}/>}
      onPress={()=>{router.push('/(routes)/profile')}}
      activeBackgroundColor='rgba(10, 46, 226, 1)'
    />
    <DrawerItem
    
    label="Submit Complaints"
    // icon={() => <Image source={require('@/assets/icons/support.png')} width={24} height={24}/>}
    onPress={()=>{router.push('/(routes)/complain')}}
     activeBackgroundColor='rgba(10, 46, 226, 1)'
  />

<DrawerItem
    
    label="Contact"
    // icon={() => <Image source={require('@/assets/icons/location.png')} width={24} height={24}/>}
    onPress={()=>{}}
     activeBackgroundColor='rgba(10, 46, 226, 1)'
    
  />

<DrawerItem
    
    label="Settings"
    // icon={() => <Image source={require('@/assets/icons/emergency.png')} width={24} height={24}/>}
    onPress={()=>{router.push("/(routes)/setting")}}
     activeBackgroundColor='rgba(10, 46, 226, 1)'
  />

<DrawerItem
    
    label="Log out"
    // icon={() => <Image source={require('@/assets/icons/privacy.png')} width={24} height={24}/>}
    onPress={()=>{
      const logout = async()=>{
        await AsyncStorage.clear();
        router.push('/login');
      }
      logout();
    }}
     activeBackgroundColor='rgba(10, 46, 226, 1)'
  />


      </View>

      

    
      
      
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
    shadowBox: {
      
      backgroundColor: 'white',
      // iOS shadow properties
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      // Android shadow property
      elevation: 5,
    },
  });


export default CustomDrawerContent;
