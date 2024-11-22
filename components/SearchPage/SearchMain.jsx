import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity
} from "react-native";
import { EvilIcons, Feather, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");

  const transactions = [
    { id: "1", title: "University Teaching Hospital, Ibadan, Oyo state", para: "Off New Bodija, Ibadan 200132, Oyo State, Nigeria.",  },
    { id: "2", title: "Allen Avenue, Maryland 200132, Lagos State, Nige.", para: "Off New Bodija, Ibadan 200132, Oyo State, Nigeria.",  },
    { id: "3", title: "Allen Avenue, Maryland 200132, Lagos State, Nige.", para: "Off New Bodija, Ibadan 200132, Oyo State, Nigeria.", },
  ];

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderTransactionItem = ({ item }) => (
    <View style={styles.transactionItem}>
      <View style={styles.transactionDetails}>
        <View style={{flexDirection:'row', gap:5, justifyContent:'center', alignItems:'center'}}>
          <EvilIcons name="location" size={20} color="#0A2EE2" />
          <View>
          <Text style={styles.transactionTitle}>{item.title}</Text>
          <View style={styles.transactionSubDetails}>
            
            <Text style={styles.transactionDate}>{item.para}</Text>
          </View>
        </View>
        </View>
       
      </View>
     </View>
  );

 

  const renderHeader = () => (
    <>
    <View style={styles.container}>
      {/* Search Bar */}
      <Text style={styles.headerText}>Search or select from recent healthcare provider</Text>
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={24} color="#8E949A" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          // placeholder="Search transactions"
          placeholderTextColor="#8E949A"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
    </View>

    <TouchableOpacity style={styles.recentTransactionsContainer} onPress={()=>router.push("search-facilities")}>
      <EvilIcons name="location" size={24} color="white" />
      <Text style={styles.recentText}>Nearest facilities close to you</Text>
    </TouchableOpacity>
    
    </>
    
  );

  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      data={filteredTransactions}
      // ListHeaderComponent={renderRecentItem}
      renderItem={renderTransactionItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.scrollViewContainer}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 16,
    // paddingVertical: 15,
    paddingHorizontal:'1%',
    marginTop:'8%'
    
  },
  headerText: {
    fontWeight: "400",
    fontSize: 12,
    textAlign:"center",
    lineHeight: 18,
    marginBottom: 10,
  },
  scrollViewContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    
   
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    height:32,
    
   
  },
  recentTransactionsContainer: {
    backgroundColor: "#0A2EE2",
    borderRadius: 8,
    marginVertical: 19,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    alignItems: "center",
    top: '-10%'
  },
  recentText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#fff",
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
   justifyContent:"center",
   marginBottom:'5%'
   
  },
  transactionDetails: {
    flexDirection: "row",
    alignItems: "center",
       justifyContent:"center"
   },
  
  transactionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  transactionSubDetails: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
  },
  // transactionType: {
  //   fontSize: 14,
  //   color: "#8E949A",
  // },
  transactionDate: {
    fontSize: 14,
    color: "#8E949A",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});

export default SearchScreen;
