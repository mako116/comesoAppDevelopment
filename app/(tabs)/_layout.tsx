import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';

 import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
     <Tabs
     screenOptions={{
       tabBarStyle: styles.container,
       tabBarItemStyle: styles.tabItem,
       tabBarActiveTintColor: Colors['light'].tint, 
       tabBarInactiveTintColor: "#A4A4A4",
       tabBarLabelStyle: styles.label,
       headerShown: false,
     }}
   >
     <Tabs.Screen
       name="home/index"
       options={{ 
         title: 'Home',
         tabBarIcon: ({ color }) => (
           <MaterialIcons name="home-filled" size={24} color={color} />
          ),
       }}
     />
     <Tabs.Screen
       name="section/index"
       options={{
         title: 'My Orders',
         tabBarIcon: ({ color }) => (
           <AntDesign name="profile" size={24} color={color} />
         ),
       }}
     />
       
     
   </Tabs>
  );
}


const styles = StyleSheet.create({
  tabItem: {
    paddingVertical: 12,
  },
  container: {
    height: 80,
    backgroundColor: "white",
    borderRadius: 12,
  },
  label: {
    textTransform: 'capitalize',
    fontSize: 12,
    marginBottom: 7,
  },
  featherIcon: {
    borderWidth: 1.7,   // Adjust border width if necessary
     textAlign:"center",
     paddingTop:1.4,
    borderRadius: 9,    // Adjust border radius if needed
  }
});
