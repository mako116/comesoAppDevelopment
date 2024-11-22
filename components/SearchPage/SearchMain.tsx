import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  FlatList 
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

interface Transaction {
  id: string;
  title: string;
  type: string;
  date: string;
  amount: string;
}

const SearchScreen: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");

  const transactions: Transaction[] = [
    { id: "1", title: "Account Top-up", type: "Received", date: "Feb 25, 2022", amount: "$5.00" },
    { id: "2", title: "Grocery Shopping", type: "Spent", date: "Feb 24, 2022", amount: "$50.00" },
    { id: "3", title: "Restaurant Bill", type: "Spent", date: "Feb 23, 2022", amount: "$30.00" },
  ];

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderTransactionItem = ({ item }: { item: Transaction }) => (
    <View style={styles.transactionItem}>
      <View style={styles.transactionDetails}>
        <View style={styles.iconContainer}>
          <Feather name="arrow-down-left" size={24} color="#04AD29" />
        </View>
        <View>
          <Text style={styles.transactionTitle}>{item.title}</Text>
          <View style={styles.transactionSubDetails}>
            <Text style={styles.transactionType}>{item.type}</Text>
            <Text style={styles.transactionDate}>{item.date}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.transactionAmount}>{item.amount}</Text>
    </View>
  );

  return (
    <View style={styles.scrollView}>
      <View style={styles.container}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <MaterialIcons name="search" size={24} color="#8E949A" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search transactions"
            placeholderTextColor="#8E949A"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Recent Transactions Section */}
        <View style={styles.recentTransactionsContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View Alls</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={filteredTransactions}
            renderItem={renderTransactionItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.transactionList}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    paddingBottom: 20,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
    padding: 20,
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
  },
  recentTransactionsContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#23303B",
  },
  viewAllText: {
    fontSize: 14,
    color: "#0A2EE2",
  },
  transactionList: {
    marginTop: 10,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
  transactionDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "#d9f3df",
    padding: 10,
    borderRadius: 5,
    marginRight: 15,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  transactionSubDetails: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
  },
  transactionType: {
    fontSize: 14,
    color: "#8E949A",
  },
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
 