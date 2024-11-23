import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { FontAwesome, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { router } from "expo-router";

const  OnboardingAuth =()=> {

  const handsignin = () =>{
    router.push("/(routes)/login")
  }
  return (
    <ScrollView
      contentContainerStyle={{
        paddingVertical: 20,
        paddingHorizontal: 20,
       }}
    >
      {/* Back Arrow */}
      <TouchableOpacity onPress={()=> router.back()} style={{backgroundColor:"#A4A9AE40", width:"15%", padding:15, borderRadius:"50%", marginTop:10}}>
        <SimpleLineIcons name="arrow-left" size={14} color="black" />
      </TouchableOpacity>

      {/* Title Section */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: "20%",
        }}
      >
        <Text
          style={{
            color: "#333333",
            fontWeight: "600",
            fontSize: 24,
            fontFamily: 'Poppins',
           }}
        >
          What kind of account would you like to open today?
        </Text>
      </View>

      {/* Options Section */}
      <View
        style={{
          gap: 20,
        }}
      >
        {/* User Account Option */}
        <TouchableOpacity
        onPress={()=> handsignin()}
          style={{
            flexDirection: "row",
            alignItems: "center",
             borderRadius: 10,
            paddingHorizontal:10,
            paddingVertical: 15,
            gap:20
          }}
        >
          <View style={{backgroundColor:"#A4A9AE40", paddingVertical:15,paddingHorizontal:15, borderRadius:"50%"}}>
          <Octicons name="person" size={20} color="black"  />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{fontFamily: 'Poppins',color:"#0A2EE2", fontWeight: "700", fontSize: 16, marginBottom: 5 }}>
              User Account
            </Text>
            <Text
              style={{
                fontWeight: "400",
                fontFamily: 'Poppins',
                fontSize: 12,
                lineHeight: 16,
                color: "#333333",
              }}
            >
              Top up your wallet and send money through it.
            </Text>
          </View>
          <SimpleLineIcons name="arrow-right" size={14} color="black" />
        </TouchableOpacity>

        {/* Business Account Option */}
        <TouchableOpacity
         onPress={()=> handsignin()}
          style={{
            flexDirection: "row",
            alignItems: "center",
             borderRadius: 10,
            paddingHorizontal:10,
            paddingVertical: 15,
            gap:20
          }}
        >
          <View style={{fontFamily: 'Poppins',backgroundColor:"#A4A9AE40", padding:10, justifyContent:"center", borderRadius:"50%"}}>
          <MaterialCommunityIcons name="briefcase-variant-outline" size={24} color="black" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{fontFamily: 'Poppins',color:"#0A2EE2", fontWeight: "700", fontSize: 16, marginBottom: 5 }}>
              Business Account
            </Text>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 12,
                lineHeight: 16,
                fontFamily: 'Poppins',
                color: "#333333",
              }}
            >
              Partner with us as a health facility and get paid through us.
            </Text>
          </View>
          <SimpleLineIcons name="arrow-right" size={14} color="black" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}


export default OnboardingAuth