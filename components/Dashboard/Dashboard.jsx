 import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground, ScrollView, StyleSheet } from "react-native";
import Dashs from "../../styles/Dashboard/Dashboard.styles";
import Header from "../../screens/Dashboard/Header";
import { router } from "expo-router";
import { AuthContext } from "@/context/AuthContext";

const DashboardScreen = () => {
  const {userDetails} = useContext(AuthContext);
  const user = JSON.parse(userDetails);
  const transactions = [
    {
      id: 1,
      type: "Account Top-up",
      status: "Received",
      date: "Feb 25, 2022",
      amount: "$5.00 USD",
      icon: "arrow-down-left",
      iconColor: "#04AD29",
      backgroundColor: "#E0F7EC",
      textColor: "#04AD29",
    },
    {
      id: 2,
      type: "Transfer Out",
      status: "Sent",
      date: "Feb 26, 2022",
      amount: "$10.00 USD",
      icon: "arrow-up-right",
      iconColor: "#F8332F",
      backgroundColor: "#FEE0E0",
      textColor: "#F8332F",
    },
    {
      id: 3,
      type: "Purchase",
      status: "Completed",
      date: "Feb 27, 2022",
      amount: "$20.00 USD",
      icon: "arrow-up-right",
      iconColor: "#F8332F",
      backgroundColor: "#FEE0E0",
      textColor: "#F8332F",
    },
  ];
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
              <Text style={Dashs.balanceAmount}>$4,228.76</Text>

              <Text style={Dashs.holderText}>Holder</Text>
              <Text style={Dashs.holderName}>{user.name} - {user.phone}</Text>
            </View>
          </ImageBackground>
        </View>

        {/* Middle Section: Quick Actions */}
        <View style={Dashs.quickActionsContainer}>
          <Text style={Dashs.sectionTitle}>Quick Actions</Text>
          <View style={Dashs.actionBoxesContainer}>
            <View style={Dashs.actionBoxContainer}>
              <TouchableOpacity onPress={()=>router.push('/(routes)/transaction')} style={[Dashs.actionBox, {backgroundColor:"#0A2EE2"}]}>
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
              <TouchableOpacity style={[Dashs.actionBox, {backgroundColor:"#A4A9AE26"}]}>
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

          {transactions.map((transaction) => (
            <View key={transaction.id} style={Dashs.transactionItem}>
              <View style={Dashs.transactionRow}>
                <View
                  style={[
                    Dashs.transactionIcon,
                    { backgroundColor: transaction.backgroundColor },
                  ]}
                >
                  <Feather
                    name={transaction.icon}
                    size={24}
                    color={transaction.iconColor}
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
                        color: transaction.textColor,
                        fontWeight: "500",
                        fontSize: 12,
                        lineHeight: 17.58,
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
                      {transaction.date}
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
                  {transaction.amount}
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
