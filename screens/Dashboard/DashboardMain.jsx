import { View, Text, ScrollView, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import Header from './Header'
import DashboardScreen from '../../components/Dashboard/Dashboard';
 
const DashboardMain = () => {
  return (
    <>
      {/* <Header /> */}
      <DashboardScreen />
    </>
  );
};


export default DashboardMain;



const styles = StyleSheet.create({
    

})