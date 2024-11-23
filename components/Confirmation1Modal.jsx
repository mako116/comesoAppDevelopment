import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import CustomHeader from './CustomHeader'
import { AntDesign } from '@expo/vector-icons'
import CustomBlueButton from './CustomBlueButton'

const Confirmation1Modal = ({toggleModal}) => {
  return (
    <>
    
        <View
          style={{
            flex: 1,
            position: "absolute",
            backgroundColor: "rgba(164, 169, 174, 0.6)",
            top: "5%",
            width: "100%",
            height: "100%",
            opacity: 0.9,
            left: "2%",
          }}
        ></View>
  
        <View
          style={{
            width: "95%",
            height: "70%",
            backgroundColor: "white",
            opacity: 1,
            position: "absolute",
            top: "15%",
            left: "3%",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingHorizontal: "5%",
            paddingVertical: "5%",
          }}
        >
            <View style={{top:'-5%'}}>
            <CustomHeader text='Confirmation'/>
            </View>
            
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily: "Sofia", fontSize: 19 }}>
              Add Beneficiary
            </Text>
            <TouchableOpacity onPress={toggleModal}>
              <AntDesign name="close" size={20} color="black" />
            </TouchableOpacity>
          </View>
          
  
         
          <CustomBlueButton text='Add Beneficiary'/>
        </View>
      </>
  )
}

export default Confirmation1Modal

const styles = StyleSheet.create({
    container: {
      marginTop: 16,
    },
    phoneContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 16,
      borderRadius: 10,
      overflow: "hidden",
      backgroundColor: "#F1F2F3",
      width: "100%",
      left: "-5%",
    },
    callingCode: {
      marginRight: 10,
      fontSize: 16,
      color: "#333",
    },
    flagButton: {
      marginLeft: 8,
    },
    phoneInput: {
      height: 55,
      borderRadius: 3,
      borderLeftWidth: 1,
      borderColor: "#E9E9E9",
      paddingLeft: 15,
      fontSize: 14,
      color: "#a1a1a1",
    },
    checkboxContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingTop: 20,
      marginHorizontal: 16,
    },
    checkbox: {
      width: 20,
      height: 20,
      borderWidth: 1,
      borderColor: "#0A2EE2",
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 3,
      marginRight: 10,
    },
    checkboxSelected: {
      backgroundColor: "#0A2EE2",
    },
    checkmark: {
      color: "#fff",
      fontSize: 10,
    },
    checkboxLabel: {
      color: "#8E949A",
      fontSize: 15,
      fontWeight: "400",
      lineHeight: 23.44,
    },
  });