import { StyleSheet, Text, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomDrawerContent from '../../components/CustomDrawer';
import { Drawer } from 'expo-router/drawer';
import React from 'react'
import { Slot } from 'expo-router';


const RouteLayout = () => {
  return (
    <>
     <GestureHandlerRootView style={{ flex: 1 }}>

    <Drawer screenOptions={{headerShown:false}} drawerContent={(props) => <CustomDrawerContent />}>
      
     
    
    </Drawer>
  </GestureHandlerRootView>

    </>
   
  )
}

export default RouteLayout

const styles = StyleSheet.create({})