import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

const Beneficiary = () => {
  const [beneficaries, setBeneficiaries] = useState([
    {
      name: "Will Hopper",
      phone: "0904455588",
      avatar: require("../../assets/images/will.png"),
    },
    {
      name: "Jonathan",
      phone: "0909948485",
      avatar: require("../../assets/images/jonathan.png"),
    },
    {
      name: "Dr Kamal",
      phone: "0909948485",
      avatar: require("../../assets/images/kamal.png"),
    },
    {
      name: "Will Hopper",
      phone: "0904455588",
      avatar: require("../../assets/images/will.png"),
    },
    {
      name: "Jonathan",
      phone: "0909948485",
      avatar: require("../../assets/images/jonathan.png"),
    },
    {
      name: "Dr Kamal",
      phone: "0909948485",
      avatar: require("../../assets/images/kamal.png"),
    },
   

  ]);
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: "5%" }}>
      <ScrollView style={{height:'100%'}}>
        <CustomHeader text="Beneficiary" />
        <View style={{ marginTop: "5%" }}>
          <View style={{ position: "absolute", top: "8%", left: "10%" }}>
            <EvilIcons name="search" size={24} color="gray" />
          </View>
          <TextInput
            style={{
              backgroundColor: "rgba(164, 169, 174, 0.25)",
              width: "90%",
              height: "25%",
              paddingHorizontal: 50,
              marginHorizontal: "auto",
              borderRadius: 10,
              fontSize: 18,
            }}
            placeholder="search"
          />
        </View>
        <View style={{ paddingHorizontal: "2%", top: "-12%" }}>
          <Text
            style={{
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 20,
              marginLeft: "2%",
            }}
          >
            Beneficiaries
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: "3%" }}>
            {beneficaries.map((item) => (
              <View
                style={{
                  width: "30%",
                  height: 128,
                  backgroundColor: "white",
                  shadowColor: "#171717",
                  shadowOffset: { width: -2, height: 4 },
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                  elevation: 5,
                  marginBottom: "7%",
                }}
              >
                <View
                  style={{ position: "absolute", right: "-7%", top: "-9%" }}
                >
                  <Image
                    source={require("../../assets/images/more.png")}
                    width={22}
                    height={22}
                  />
                </View>
                <Image
                  source={item.avatar}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    marginHorizontal: "auto",
                    marginTop: 3,
                  }}
                  resizeMode="contain"
                />
                <View style={{ marginTop: 10 }}>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "rgba(164, 169, 174, 1)",
                      fontSize: 13,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "rgba(164, 169, 174, 1)",
                      fontSize: 13,
                    }}
                  >
                    {item.phone}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

            <View>
            <TouchableOpacity
          style={{
            width: "80%",
            backgroundColor: "rgba(10, 46, 226, 1)",
            height: 60,
            marginHorizontal:'auto',
            borderRadius:10,
            
            
          }}
        >
            
            <AntDesign name="pluscircleo" size={24} color="white" style={{top:'25%', left:'20%'}}/>
            <Text style={{textAlign:'center', color:'white', fontSize:20, top:'-20%', left:'8%'}}>Add Beneficiary</Text>
            
            
        </TouchableOpacity>
            </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Beneficiary;

const styles = StyleSheet.create({});
