import { View, Text, Image, TouchableOpacity, TextInput, Alert } from "react-native";
import React, { useContext, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Paystack, paystackProps } from "react-native-paystack-webview";

import CustomHeader from "../../../components/CustomHeader";
import { Feather } from "@expo/vector-icons";
import { AuthContext } from "@/context/AuthContext";
import axiosClient from "../../../axiosClient";
import { router } from "expo-router";

const AddMoney = () => {
  const { userDetails, setUserDetails } = useContext(AuthContext);
  const paystackWebViewRef = useRef(paystackProps.PayStackRef);
  const [amount, setAmount] = useState(0);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader text="Add Money" />
      <Paystack
        paystackKey={process.env.EXPO_PUBLIC_PAYSTACK_TEST_PUBLIC}
        billingEmail={userDetails.email}
        amount={amount}
        billingName={userDetails.name}
        currency="GHS"
        onCancel={(e) => {
          // handle response here
        }}
        onSuccess={(res) => {
          // handle response here
           axiosClient.post('/user/top-up', {amount}).then(res=>{
            setUserDetails(prev=>({
              ...prev,
              balance: prev.balance + amount
            }))
            router.push('/(tabs)/home');
          }).catch(e=>console.log(e));
        }}
        ref={paystackWebViewRef}
      />

      <View
        style={{
          marginTop: "10%",
          height: "30%",
          width: "90%",
          marginHorizontal: "auto",
          borderWidth: 0.2,
          borderColor: "rgba(35, 48, 59, 1)",
          borderRadius: 5,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            height: "25%",
            width: "100%",
            backgroundColor: "rgba(242, 245, 248, 1)",
            paddingHorizontal: "5%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins",
              fontWeight: 500,
            }}
          >
            Your Balance
          </Text>
          <View>
            <Feather
              name="arrow-up-right"
              size={20}
              color="rgba(207, 211, 219, 1)"
            />
          </View>
        </View>

        <View
          style={{ marginVertical: "5%", paddingHorizontal: "5%", gap: "5%" }}
        >
          <Text style={{ fontSize: 36, fontWeight: "500" }}>
            ${userDetails.balance}
          </Text>
          <View style={{ flexDirection: "row", gap: "8%", marginTop: "5%" }}>
            <TouchableOpacity
              style={{
                width: 92,
                height: 40,
                backgroundColor: "rgba(0, 92, 232, 1)",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 8,
                borderRadius: 20,
              }}
            >
              <Text style={{ color: "white", fontSize: 14 }}>Copy</Text>
              <View style={{}}>
                <Feather name="edit-2" size={20} color="white" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 92,
                height: 40,
                backgroundColor: "rgba(241, 242, 243, 0.8)",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 8,
                borderRadius: 20,
              }}
            >
              <Text style={{ color: "rgba(51, 51, 51, 0.7)", fontSize: 14 }}>
                Share
              </Text>
              <View style={{}}>
                <Image source={require("../../../assets/images/forward.png")} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <View style={{ paddingHorizontal: "5%", marginTop: "4%" }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 300,
              color: "rgba(51, 51, 51, 0.7)",
            }}
          >
            Copy or share your wallet account number and send any amount of your
            choice into it to top up account.
          </Text>
        </View>
      </View>

      <View style={{ paddingHorizontal: "5%", marginTop: "10%" }}>
        <Text style={{ fontFamily: "Alata", fontWeight: "400", fontSize: 19 }}>
          Top up with Paystack
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "rgba(164, 169, 174, 0.2)",
          width: "90%",
          marginHorizontal: "auto",
          marginTop: 20,
          borderRadius: 10,
          paddingVertical: 5,
        }}
      >
        <TextInput
          placeholder="Amount"
          keyboardType="numeric"
          style={{ paddingLeft: 10 }}
          onChangeText={(val) => setAmount(val)}
        />
      </View>
      <View
        style={{
          marginTop: "5%",
          paddingHorizontal: "5%",
          flexDirection: "row",
          gap: "3%",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: "100%",
            height: 103.4,
            borderRadius: 10,
            justifyContent: "center",
          }}
          onPress={() => {
            if(amount ==0){
              return Alert.alert('Amount Required', 'Please enter amount of voucher you want to add')
            }
            paystackWebViewRef.current.startTransaction();
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../../../assets/images/paystacklogo.png")}
            style={{ width: "70%", marginHorizontal: "auto" }}
          />
          {/* <Text style={{fontSize:13,fontFamily:'Sofia', color:'rgba(142, 148, 154, 1)', textAlign:'center', marginTop:1}}>AT&T</Text> */}
        </TouchableOpacity>
        {/* <View
          style={{
            backgroundColor: "white",
            width: "30%",
            height: 103.4,
            borderRadius: 10,
            justifyContent:'center'
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../../../assets/images/tmobile.png")}
            style={{ width: "70%", marginHorizontal: "auto" }}
          />
          <Text style={{fontSize:13,fontFamily:'Sofia', color:'rgba(142, 148, 154, 1)', textAlign:'center', marginTop:1}}>T-Mobile</Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            width: "30%",
            height: 103.4,
            borderRadius: 10,
            justifyContent:'center'
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../../../assets/images/verizon.png")}
            style={{ width: "70%", marginHorizontal: "auto" }}
          />
          <Text style={{fontSize:13,fontFamily:'Sofia', color:'rgba(142, 148, 154, 1)', textAlign:'center', marginTop:1}}>Verizon</Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            width: "30%",
            height: 103.4,
            borderRadius: 10,
            justifyContent:'center'
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../../../assets/images/att.png")}
            style={{ width: "70%", marginHorizontal: "auto" }}
          />
          <Text style={{fontSize:13,fontFamily:'Sofia', color:'rgba(142, 148, 154, 1)', textAlign:'center', marginTop:1}}>AT&T</Text>
        </View> */}
      </View>
      {/* <View style={{marginTop:12, paddingHorizontal:"5%"}}>
        
        <Text style={{fontSize:14,fontWeight:300,color:'rgba(51, 51, 51, 0.7)'}}>Selecting any of the provided banks automatically opens the app for you to transfer money into your wallet.</Text>
        
      </View> */}
    </SafeAreaView>
  );
};

export default AddMoney;
