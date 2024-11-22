import { Tabs } from 'expo-router';
import React, { useState } from 'react';
import { Platform, StyleSheet, TouchableOpacity, Animated, View } from 'react-native';
import { AntDesign, Foundation } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState<string>('home/index');
  const [scale] = useState(new Animated.Value(1)); // Scale animation for icon

  // Function to handle tab change and set active tab
  const handleTabPress = (tabName: string) => {
    setActiveTab(tabName);
    animateTab();
  };

  // Function to animate the active tab icon (scale effect)
  const animateTab = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.2, // Slight scale up
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1, // Scale back to normal
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.container,
        tabBarItemStyle: styles.tabItem,
        tabBarActiveTintColor: Colors['light'].tint,
        tabBarInactiveTintColor: '#A4A4A4',
        tabBarLabelStyle: styles.label,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <TouchableOpacity
              
              onPress={() => handleTabPress('home/index')}
            >
              <Animated.View style={{ transform: [{ scale }] }}>
                <Foundation
                  name="home"
                  size={28} // Slightly larger icon
                  color={"#333"}
                />
              </Animated.View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="section/index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            // <View  >
              <TouchableOpacity
              
              onPress={() => handleTabPress('section/index')}
            >
              <Animated.View style={{ transform: [{ scale }] }}>
                <AntDesign
                  name="profile"
                  size={34} // Slightly larger icon
                  color={"#333"}
                />
              </Animated.View>
            </TouchableOpacity>
            // </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabItem: {
    // margin:"auto"
    // alignItems:"center",
    // padding:"10%",
    // paddingVertical: 12,
    // alignItems:"center",
  },
  container: {
    width: '70%',
    marginHorizontal: 'auto',
    // alignItems:"center",
    bottom: 20,
    height: "9%",
    
    backgroundColor: 'white',
    borderRadius: 50,
   },
  label: {
    textTransform: 'capitalize',
      fontWeight: '500',
  },
  iconWrapper: {
    borderRadius: 12,
      // height:50,
      // fontSize:30,
    // width:"100%",
    // paddingLeft:10,
    //  borderWidth:1,
  },
  activeTab: {
    color:"#fff",
     backgroundColor: '#0A2EE2', // Active tab background color
    borderRadius: 12, // Rounded corners for active tab
   
    // margin:"auto",
  },
});
