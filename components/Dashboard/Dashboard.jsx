 import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground, ScrollView, StyleSheet } from "react-native";
import Dashs from "../../styles/Dashboard/Dashboard.styles";
import Header from "../../screens/Dashboard/Header";
import { router } from "expo-router";
import { AuthContext } from "@/context/AuthContext";
import axiosClient from '../../axiosClient';

const DashboardScreen = () => {
  const [user, setUser] = useState(null);
   const [transactions, setTransactions] = useState([]);

  const date = transactions?.map(item=>{
    const date = new Date(item.created_at); // Example date

    const formattedDate = new Intl.DateTimeFormat('en-US', {
      month: 'long',  // Full month name
      day: 'numeric', // Day of the month
      year: 'numeric' // Year
    }).format(date);
    
    return formattedDate;
   })

   
   
  
  

  useEffect(()=>{
    const getUser = async ()=>{
      try {
        
        const response = await axiosClient.get('/user');
        setUser(response.data.user);
        setTransactions(response.data.transactions);
       
        
      } catch (error) {
        console.log(error)
      }
      
    }

    getUser();
  }, [])
 
  // const transactions = [
  //   {
  //     id: 1,
  //     type: "Account Top-up",
  //     status: "Received",
  //     date: "Feb 25, 2022",
  //     amount: "$5.00 USD",
  //     icon: "arrow-down-left",
  //     iconColor: "#04AD29",
  //     backgroundColor: "#E0F7EC",
  //     textColor: "#04AD29",
  //   },
  //   {
  //     id: 2,
  //     type: "Transfer Out",
  //     status: "Sent",
  //     date: "Feb 26, 2022",
  //     amount: "$10.00 USD",
  //     icon: "arrow-up-right",
  //     iconColor: "#F8332F",
  //     backgroundColor: "#FEE0E0",
  //     textColor: "#F8332F",
  //   },
  //   {
  //     id: 3,
  //     type: "Purchase",
  //     status: "Completed",
  //     date: "Feb 27, 2022",
  //     amount: "$20.00 USD",
  //     icon: "arrow-up-right",
  //     iconColor: "#F8332F",
  //     backgroundColor: "#FEE0E0",
  //     textColor: "#F8332F",
  //   },
  // ];

  

if(!user){
  return null;
}


  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Header/>
   
      <View style={Dashs.container}>
        {/* Top Section: Title */}
        <View style={Dashs.board}>
          <ImageBackground
             source={require("../../assets/images/board.png")}
            style={Dashs.boardImage}
          >
            <View style={Dashs.boardContent}>
              <Text style={Dashs.balanceText}>Available Balance</Text>
              <Text style={Dashs.balanceAmount}>${user?.balance}</Text>

              <Text style={Dashs.holderText}>Holder</Text>
              <Text style={Dashs.holderName}>{user?.name} - {user?.phone}</Text>
            </View>
          </ImageBackground>
        </View>

        {/* Middle Section: Quick Actions */}
        <View style={Dashs.quickActionsContainer}>
          <Text style={Dashs.sectionTitle}>Quick Actions</Text>
          <View style={Dashs.actionBoxesContainer}>
            <View style={Dashs.actionBoxContainer}>
              <TouchableOpacity onPress={()=>router.push('/(tabs)/send')} style={[Dashs.actionBox, {backgroundColor:"#0A2EE2"}]}>
                <Image source={require('../../assets/images/sendmoni.png')} style={Dashs.icon} />
              </TouchableOpacity>
              <Text style={Dashs.actionBoxText}>Send Money</Text>
            </View>

            <View style={Dashs.actionBoxContainer}>
              <TouchableOpacity onPress={()=>router.push('/(routes)/add-money')} style={[Dashs.actionBox, {backgroundColor:"#A4A9AE26"}]}>
                <Ionicons name="add-circle-outline" size={20} color="#0A2EE2BF" />
              </TouchableOpacity>
              <Text style={Dashs.actionBoxText}>Add Money</Text>
            </View>

            <View style={Dashs.actionBoxContainer}>
              <TouchableOpacity style={[Dashs.actionBox, {backgroundColor:"#A4A9AE26"}]} onPress={()=>router.push('beneficiary')}>
                <FontAwesome5 name="user-circle" size={20} color="#0A2EE2BF" />
              </TouchableOpacity> 
              <Text style={Dashs.actionBoxText}>Beneficiaries</Text>
            </View>
          </View>
        </View>

        {/* Bottom Section: Recent Transactions */}
        <View style={Dashs.recentTransactionsContainer}>
          <View style={Dashs.recentTransactionsHeader}>
            <Text style={Dashs.sectionTitle}>Recent Transactions</Text>
            <TouchableOpacity>
              <Text style={[Dashs.actionBoxText, {lineHeight: 13}]}>View All</Text>
            </TouchableOpacity>
          </View>

          {transactions.map((transaction, index) => (
            <View key={transaction.id} style={Dashs.transactionItem}>
              <View style={Dashs.transactionRow}>
                <View
                  style={[
                    Dashs.transactionIcon,
                    { backgroundColor: transaction.status=='Received' &&'#E0F7EC'|| transaction.status=='Sent' &&'#FEE0E0' },
                  ]}
                >
                  <Feather
                    name={transaction.status =='Received'&& "arrow-down-left"|| transaction.status=='Sent'&&'arrow-up-right' }
                    size={24}
                    color={transaction.status=='Received' && '#04AD29' || transaction.status =='Sent' && '#F8332F'}
                  />
                </View>
                <View style={Dashs.transactionDetails}>
                  <Text
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      fontSize: 14,
                      lineHeight: 20.51,
                      color: "#23303B",
                    }}
                  >
                    {transaction.type}
                  </Text>
                  <View style={Dashs.transactionInfo}>
                    <Text
                      style={{
                        fontFamily: "Poppins",
                        color: transaction.status=='Received'&& '#04AD29'|| transaction.status=='Sent'&&'#F8332F',
                        fontWeight: "500",
                        fontSize: 12,
                        lineHeight: 17.58,
                        marginRight:3
                      }}
                    >
                      {transaction.status}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Poppins",
                        color: "#A4A9AE",
                        fontWeight: "400",
                        fontSize: 12,
                        lineHeight: 17.58,
                      }}
                    >
                      
                      {date[index]}
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 15,
                    lineHeight: 29.3,
                    fontFamily: "SofiaPro",
                  }}
                >
                 
                  ${transaction.amount}.00 USD
                </Text>
              </View>
            </View>
          ))}
        </View>

      </View>

      </ScrollView>
   );
};
 
const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1, // Ensures that the content expands to fill the screen when necessary
    backgroundColor: '#f5f5f5', // You can customize the background color
   },
});


export default DashboardScreen;
