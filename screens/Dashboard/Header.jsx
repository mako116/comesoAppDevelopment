import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { AntDesign, Fontisto } from '@expo/vector-icons';
import { AuthContext } from '@/context/AuthContext';

const Header = ()=> {
  const {userDetails} = useContext(AuthContext);
  const user = userDetails
  
  
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.profileContainer}>
          <Image 
            source={require('../../assets/images/profile.png')} 
            style={styles.profileImage}
          />
          {/* <AntDesign name="user" size={40} color="black" /> */}
          {/* Red notification dot for profile */}
          <View style={styles.notificationDot} />
        </View>

        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Hi, {user?.name}</Text>
        </View>

        <View style={styles.bellContainer}>
          <Fontisto name="bell" size={24} color="black" />
          {/* Red notification dot for bell */}
          <View style={styles.notificationDot} />
        </View>
      </View>
    </View>
  );
}

export default Header;
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
     fontFamily: 'Sora',
    fontSize: 22,
    fontWeight: '600',
    lineHeight:27.72
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
