import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { router } from 'expo-router';


const CustomHeader = ({text})=> {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={()=>router.push('/(tabs)/home')} style={styles.profileContainer}>
          <Image 
            source={require('../assets/images/headerback.png')} 
            width={30}
            height={30}
            resizeMode='contain'
            style={styles.profileImage}
          />
          
          
        </TouchableOpacity>

        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>{text}</Text>
        </View>

        <View style={styles.bellContainer}>
        <Image 
            source={require('../assets/images/notificationIcon.png')} 
            style={styles.profileImage}
            width={30}
            height={30}
            resizeMode='contain'
          />
          
        </View>
      </View>
    </View>
  );
}

export default CustomHeader;
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal:23,
     
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    alignItems: 'center',
  },
  profileContainer: {
    position: 'relative', // To position the notification dot relative to the image
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  greetingContainer: {
    flex: 1, // To push bell icon to the right side
    alignItems: 'center',
  },
  greetingText: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight:27.72,
    fontFamily:'Sora'
  },
  bellContainer: {
    position: 'relative', // To position the notification dot relative to the bell icon
  },
  notificationDot: {
    position: 'absolute',
    top: -1,
    right: -1,
    width: 10,
    height: 10,
    borderRadius: 5, // Circular dot
    backgroundColor: '#E73726',
  },
});
