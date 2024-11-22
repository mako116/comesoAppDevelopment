 import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground, ScrollView, StyleSheet } from "react-native";
import Dashs from "../../styles/Dashboard/Dashboard.styles";
import Header from "../../screens/Dashboard/Header";

const DashboardScreen = () => {
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
              <Text style={Dashs.holderName}>Will Jonas - 09123456789</Text>
            </View>
          </ImageBackground>
        </View>

        {/* Middle Section: Quick Actions */}
        <View style={Dashs.quickActionsContainer}>
          <Text style={Dashs.sectionTitle}>Quick Actions</Text>
          <View style={Dashs.actionBoxesContainer}>
            <View style={Dashs.actionBoxContainer}>
              <TouchableOpacity style={[Dashs.actionBox, {backgroundColor:"#0A2EE2"}]}>
                <Image source={require('../../assets/images/sendmoni.png')} style={Dashs.icon} />
              </TouchableOpacity>
              <Text style={Dashs.actionBoxText}>Send Money</Text>
            </View>

            <View style={Dashs.actionBoxContainer}>
              <TouchableOpacity style={[Dashs.actionBox, {backgroundColor:"#A4A9AE26"}]}>
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

          <View style={Dashs.transactionItem}>
            <View style={Dashs.transactionRow}>
              <View style={Dashs.transactionIcon}>
                <Feather name="arrow-down-left" size={24} color="#04AD29" />
              </View>
              <View style={Dashs.transactionDetails}>
                <Text>Account Top-up</Text>
                <View style={Dashs.transactionInfo}>
                  <Text style={{color:'#04AD29', fontWeight:"500", fontSize:12,lineHeight:17.58}}>Received</Text>
                  <Text style={{color:'#A4A9AE', fontWeight:"400", fontSize:12,lineHeight:17.58}}>Feb 25, 2022</Text>
                </View>
              </View>
              </View>
              <View>
                <Text style={{fontWeight:"500", fontSize:15, lineHeight:29.3}}>$5.00 USD</Text>
              </View>
            
          </View>

          {/* Additional Transactions */}
          <View style={Dashs.transactionItem}>
            <View style={Dashs.transactionRow}>
              <View style={[Dashs.transactionIcon,{backgroundColor:"#fee0e0"}]}>
              <Feather name="arrow-up-right" size={24} color="#F8332F" />              
              </View>
              <View style={Dashs.transactionDetails}>
                <Text>Account Top-up</Text>
                <View style={Dashs.transactionInfo}>
                  <Text style={{color:'#04AD29', fontWeight:"500", fontSize:12,lineHeight:17.58}}>Received</Text>
                  <Text style={{color:'#A4A9AE', fontWeight:"400", fontSize:12,lineHeight:17.58}}>Feb 25, 2022</Text>
                </View>
              </View>
              </View>
              <View>
                <Text style={{fontWeight:"500", fontSize:15, lineHeight:29.3}}>$5.00 USD</Text>
              </View>
            
          </View>
          <View style={Dashs.transactionItem}>
            <View style={Dashs.transactionRow}>
              <View style={[Dashs.transactionIcon,{backgroundColor:"#fee0e0"}]}>
              <Feather name="arrow-up-right" size={24} color="#F8332F" />              
              </View>
              <View style={Dashs.transactionDetails}>
                <Text>Account Top-up</Text>
                <View style={Dashs.transactionInfo}>
                  <Text style={{color:'#04AD29', fontWeight:"500", fontSize:12,lineHeight:17.58}}>Received</Text>
                  <Text style={{color:'#A4A9AE', fontWeight:"400", fontSize:12,lineHeight:17.58}}>Feb 25, 2022</Text>
                </View>
              </View>
              </View>
              <View>
                <Text style={{fontWeight:"500", fontSize:15, lineHeight:29.3}}>$5.00 USD</Text>
              </View>
            
          </View>
        </View>

      </View>

      </ScrollView>
   );
};
 
const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1, // Ensures that the content expands to fill the screen when necessary
    backgroundColor: '#f5f5f5', // You can customize the background color
    paddingBottom: 20, // Optional: Adds padding at the bottom of the scroll view to prevent content from getting clipped
  },
});


export default DashboardScreen;
