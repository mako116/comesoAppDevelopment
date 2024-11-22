import { View, Text, ScrollView, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import Header from './Header'
import DashboardScreen from '@/components/Dashboard/Dashboard'

export default function DashboardMain() {
  return (
    <>
    <Header />
    <DashboardScreen />
  </>
  )
}


const styles = StyleSheet.create({
    

})