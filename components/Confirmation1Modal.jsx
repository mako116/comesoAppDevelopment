import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useState } from "react";
import CustomHeader from "./CustomHeader";
import { AntDesign, Feather } from "@expo/vector-icons";
import CustomBlueButton from "./CustomBlueButton";
import axiosClient from "../axiosClient";


const Confirmation1Modal = ({ toggleModal, image, openSecondConfirm, email, name, phone }) => {
  const [found, setFound] = useState(true)
  const handleAddBeneficary = async ()=>{
    try {
      const res = await axiosClient.post('/beneficiary', {
        name,
        email,
        phone,
      })
      if(res.data.status ==false){
        setFound(false);
        
      }
    } catch (error) {
      console.log(error);
    }
  }
  
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
          height: "85%",
          backgroundColor: "white",
          opacity: 1,
          position: "absolute",
          top: "15%",
          left: "3%",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal: "1%",
          paddingVertical: "5%",
        }}
      >
        <View style={{ top: "-5%" }}>
          <CustomHeader text="Confirmation" />
        </View>

        <View style={{ marginVertical: "3%" }}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Sofia",
              fontSize: 32,
              color: "rgba(69, 110, 254, 1)",
            }}
          >
            Are you sure?
          </Text>
          <Text
            style={{
              fontFamily: "Alata",
              fontWeight: 400,
              fontSize: 18,
              color: "rgba(164, 169, 174, 1)",
              textAlign: "center",
            }}
          >
            Confirm and crosscheck the beneficiary’s details before saving
          </Text>
        </View>

        <View>
          <View
            style={{
              backgroundColor: "white",
              width: "100%",
              marginHorizontal: "auto",

              borderRadius: 10,
              paddingVertical: 5,
              shadowColor: "#171717",
              shadowOffset: { width: -2, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
              elevation: 0.3,
            }}
          >
            <View style={{ position: "absolute", left: "90%", top: "60%" }}>
              <Feather name="edit-3" size={11} color="rgba(164, 169, 174, 1)" />
            </View>

            <TextInput />
          </View>
        </View>

        <View
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            gap:'11%',
            alignItems:'center',
            justifyContent:'center',
            shadowColor: "#171717",
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 5,
            paddingVertical:'5%',
            paddingHorizontal:'2%',
            width:'95%',
            marginHorizontal:'auto',
            marginTop:15,
            borderRadius:10
          }}
        >
          
          <View style={{flex: 1,}}>
          <Image source={image} style={{width:80, height:80, borderRadius:40}} />
          </View>
         
          <View style={{ flex: 3 }}>
            <Text style={{fontFamily:'Alata', fontWeight:800, fontSize:20}}>{name}</Text>
            <Text style={{fontFamily:'Alata',color:'rgba(164, 169, 174, 1)',fontSize:16,fontWeight:"400"}}>{phone}</Text>
            <Text style={{fontFamily:'Alata',color:'rgba(164, 169, 174, 1)',fontSize:16,fontWeight:"400"}}>{email}</Text>
          </View>
        </View>
        <TouchableOpacity
      style={{
        width: "80%",
        backgroundColor: "rgba(10, 46, 226, 1)",
        height: 60,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: "35%",
        marginBottom: 20,
      }}

      onPress={()=>{
        handleAddBeneficary();
        if(!found){
          return Alert.alert('Not Found', 'Beneficiary not found');
        }
        toggleModal();
        openSecondConfirm();
      }}
      
    >
      
      <Text
        style={{
          color: "white",
          fontSize: 18,
          marginLeft: 10,
        }}
      >
        Confirm
      </Text>
    </TouchableOpacity>
      </View>
    </>
  );
};

export default Confirmation1Modal;
