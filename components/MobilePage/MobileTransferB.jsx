import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import HeaderM from '../../screens/MobileTransfer/HeaderM';
import logo from '../../assets/images/logo.png';
import CountryPicker from 'react-native-country-picker-modal';
import SectionsLogin from "@/styles/Login/Login.styles";
import { router } from 'expo-router';

const MobileTransferB = () => {
    const [searchText, setSearchText] = useState('');
    const [buttonSpinner, setButtonSpinner] = useState(false);
    const [selectedBeneficiaryId, setSelectedBeneficiaryId] = useState(null);

    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('US'); // Default to 'US'
    const [callingCode, setCallingCode] = useState('1');  // Default calling code for 'US'
    const [userInfo, setUserInfo] = useState({
       password: "",
       Name: "",
       phone: "",
     });

    const [beneficiaries] = useState([
        { id: '1', name: 'John Doe', img: logo },
        { id: '2', name: 'Jane Smith', img: logo },
        { id: '3', name: 'Mark Lee', img: logo },
        { id: '4', name: 'Anna Lee', img: logo },
    ]);

    const toggleSelectBeneficiary = (id) => {
        if (selectedBeneficiaryId === id) {
            setSelectedBeneficiaryId(null); // Deselect if clicked again
        } else {
            setSelectedBeneficiaryId(id); // Select the new beneficiary
        }
    };
    
    const handleContinue = () => {
       router.push("/(routes)/TrfConfirm")
    };

    const filteredBeneficiaries = beneficiaries.filter(beneficiary =>
        beneficiary.name.toLowerCase().includes(searchText.toLowerCase())
    );

    // Handle phone number change, only numeric values
    const handlePhoneChange = (number) => {
        const filteredNumber = number.replace(/[^0-9]/g, ''); // Remove non-numeric characters
        setPhoneNumber(filteredNumber);
    };

    // Handle country selection from CountryPicker
    const onSelectCountry = (country) => {
        setCountryCode(country.cca2); // Set the selected country code
        setCallingCode(country.callingCode[0]); // Set the corresponding calling code
    };

    return (
        <View style={styles.container}>
            <HeaderM />

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <MaterialIcons name="search" size={24} color="#8E949A" />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#8E949A"
                    value={searchText}
                    onChangeText={setSearchText}
                />
            </View>
            
            <Text style={styles.sectionTitle}>Beneficiaries</Text>

            {/* List of Beneficiaries */}
            <FlatList
                data={filteredBeneficiaries}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity  
                    key={item.id}
                        onPress={() => toggleSelectBeneficiary(item.id)}
                        style={[
                            styles.beneficiaryItem,
                            selectedBeneficiaryId === item.id && styles.selectedBeneficiary,
                        ]}
                    >

                        <View style={styles.beneficiaryItem}>
                            <Image
                                source={item.img ? item.img : logo}
                                style={styles.beneficiaryImage}
                            />
                            <Text style={styles.beneficiaryName}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={
                    <Text style={styles.noBeneficiariesText}>No beneficiaries found</Text>
                }
            />

            {/* Make New Transfer Form */}
            <View style={styles.formContainer}>
                <Text style={styles.formTitle}>Make New Transfer</Text>

                {/* Name Input */}
                <TextInput
                    style={styles.input}
                    keyboardType="default"
                    value={userInfo.Name}
                    placeholder="Name"
                    onChangeText={(value) => setUserInfo({ ...userInfo, Name: value })}
                    placeholderTextColor="#8E949A"
                />

                {/* Phone Number Input */}
                <View style={styles.phoneContainer}>
                    <CountryPicker
                        countryCode={countryCode}
                        withFilter
                        withFlag
                        withCallingCode
                        withCountryNameButton={false}
                        onSelect={onSelectCountry}
                        containerButtonStyle={styles.flagButton}
                    />
                    <Text style={styles.callingCode}>+{callingCode}</Text>
                    <TextInput
                        style={styles.phoneInput}
                        keyboardType="numeric"
                        value={phoneNumber}
                        onChangeText={handlePhoneChange}
                        placeholder="Phone number"
                    />
                </View>

                {/* Password Input */}
                <View style={{ marginTop: 20, flexDirection: "row", alignItems: "center", gap:10 }}>
                    <View style={{ width: "83%",   }}>
                        <TextInput
                            style={styles.input}
                            secureTextEntry={!isPasswordVisible}
                            value={userInfo.password}
                            placeholder="Password"
                            onChangeText={(value) => setUserInfo({ ...userInfo, password: value })}
                        />
                        <TouchableOpacity
                            style={SectionsLogin.visibleIcon}
                            onPress={() => setPasswordVisible(!isPasswordVisible)}
                        >
                            {isPasswordVisible ? (
                                <Ionicons name="eye-off-outline" size={20} color={"#747474"} />
                            ) : (
                                <Ionicons name="eye-outline" size={20} color={"#747474"} />
                            )}
                        </TouchableOpacity>
                    </View>

                    {/* Fingerprint Icon */}
                    <TouchableOpacity style={{padding:10, marginTop:-10, borderRadius:10,backgroundColor:"#f1f2f3",}}>
                        <Ionicons name="finger-print-outline" size={30} color="black" />
                    </TouchableOpacity>
                </View>

                {/* Continue Button */}
                <TouchableOpacity
                onPress={handleContinue}
            style={[SectionsLogin.loginButtons,  ]}
            disabled={buttonSpinner}
          >
            {buttonSpinner ? (
              <ActivityIndicator size="small" color={"white"} />
            ) : (
              <Text style={SectionsLogin.loginButtonText}>Continue</Text>
            )}
          </TouchableOpacity>

                 
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    sectionTitle: { fontSize: 19, fontWeight: '500', color: '#23303B', marginBottom: 10 },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F1F1F1',
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
    },
    phoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginHorizontal: 16,
        borderRadius: 10,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: '#ccc',
        // backgroundColor: "#A4A9AE",
    },
    callingCode: {
        marginRight: 10,
        fontSize: 16,
        color: '#333',
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
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: '#333',
    },
    beneficiaryItem: {
        alignItems: 'center',
        padding: 5,
        marginHorizontal: 5,
        borderRadius: 8,
        width: 100,
         shadowColor: '#6E758812',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 3, // Android shadow
      },
     beneficiaryImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 10,
    },
    beneficiaryName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        textAlign: 'center',
    },
    noBeneficiariesText: { fontSize: 16, color: '#8E949A', textAlign: 'center', marginTop: 20 },
    formContainer: {
        marginTop: 20,
    },
    formTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 15,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingLeft: 15,
        fontSize: 16,
        color: '#333',
        // backgroundColor:"#A4A9AE",
        marginBottom: 20,
    },
    continueButton: {
        backgroundColor: '#3498db',
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 20,
    },
    continueButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
    selectedBeneficiary: {
        borderColor: '#0A2EE2',
        borderWidth: 2,
    },
});

export default MobileTransferB;
