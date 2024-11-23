import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ActivityIndicator } from 'react-native';
import { MaterialIcons, Fontisto } from '@expo/vector-icons';
import CountryPicker from 'react-native-country-picker-modal';
import logo from '../../assets/images/logo.png';
import HeaderM from '../MobileTransfer/HeaderM';
import SectionsLogin from "@/styles/Login/Login.styles";
import { router } from 'expo-router';

const Confirm = () => {
    const handleContinue = () => {
        router.push("/(routes)/confirm-transfer/confirmtransfers")
     };

  const [fromCountry, setFromCountry] = useState({
    countryCode: 'US',
    callingCode: '1',
    currency: 'USD',
  });

  const [toCountry, setToCountry] = useState({
    countryCode: 'US',
    callingCode: '1',
    currency: 'USD',
  });

  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [buttonSpinner, setButtonSpinner] = useState(false);

  const [fromInputFocused, setFromInputFocused] = useState(false);
  const [toInputFocused, setToInputFocused] = useState(false);

  const FromSelectCountry = (country) => {
    if (country) {
      setFromCountry({
        countryCode: country.cca2,
        callingCode: country.callingCode ? country.callingCode[0] : '',
        currency: country.currency ? country.currency[0] : 'N/A',
      });
    }
  };

  const ToSelectCountry = (country) => {
    if (country) {
      setToCountry({
        countryCode: country.cca2,
        callingCode: country.callingCode ? country.callingCode[0] : '',
        currency: country.currency ? country.currency[0] : 'N/A',
      });
    }
  };

  return (
    <View style={styles.container}>
      <HeaderM />
      {/* Recipient Info Section */}
      <View style={{ paddingVertical: 10 }}>
        <Text style={styles.recipientHead}>Recipient</Text>
      </View>
      <View style={styles.recipientInfo}>
        <View style={styles.recipientTextContainer}>
          <Image source={logo} style={styles.beneficiaryImage} />
          <View>
            <Text style={styles.recipientName}>John Doe</Text>
            <Text style={styles.recipientPhone}>1******6103</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.editIconContainer}>
          <MaterialIcons name="edit" size={14} color="#0C73C2" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.recipientHead}>Country currencies</Text>
      </View>

      {/* Currency Flags and Transfer Section */}
      <View style={styles.currencyContainer}>
        {/* From Country */}
        <View style={styles.flagContainer}>
          <Text style={styles.labelText}>From</Text>
          <TouchableOpacity style={styles.flagButton}>
            <CountryPicker
              countryCode={fromCountry.countryCode}
              withFilter
              withFlag
              withCallingCode={false}
              withCountryNameButton={false}
              onSelect={FromSelectCountry}
              containerButtonStyle={styles.flag}
            />
          </TouchableOpacity>
          <Text style={styles.currencyText}>{fromCountry.currency}</Text>
        </View>

        <TouchableOpacity style={styles.transferIcon}>
          <Fontisto name="arrow-swap" size={26} color="black" />
        </TouchableOpacity>

        {/* To Country */}
        <View style={styles.flagContainer}>
          <Text style={styles.labelText}>To</Text>
          <TouchableOpacity style={styles.flagButton}>
            <CountryPicker
              countryCode={toCountry.countryCode}
              withFilter
              withFlag
              withCallingCode={false}
              withCountryNameButton={false}
              onSelect={ToSelectCountry}
              containerButtonStyle={styles.flag}
            />
          </TouchableOpacity>
          <Text style={styles.currencyText}>{toCountry.currency}</Text>
        </View>
      </View>

      <View style={styles.transferDetailsContainer}>
        <Text style={styles.transferDetailsHeader}>Transfer Details</Text>
      <View style={[styles.transferRow,
              fromInputFocused && { borderColor: '#0A2EE2', borderWidth: 2 },
      ]}>
  <TextInput
    style={styles.input}
    keyboardType="numeric"
    placeholder="Enter amount"
    value={fromAmount}
    onChangeText={(text) => setFromAmount(text)}
    onFocus={() => setFromInputFocused(true)}
    onBlur={() => setFromInputFocused(false)}
  />
  <Text style={styles.currencyLabel}>{fromCountry.currency}</Text>
</View>
<View style={[styles.transferRow,
      toInputFocused && { borderColor: '#0A2EE2', borderWidth: 2 },]}>  
      <TextInput
    style={styles.input}
    keyboardType="numeric"
    placeholder="Enter amount"
    value={toAmount}
    onChangeText={(text) => setToAmount(text)}
    onFocus={() => setToInputFocused(true)}
    onBlur={() => setToInputFocused(false)}
  />
  <Text style={styles.currencyLabel}>{toCountry.currency}</Text>
</View>
</View>


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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  recipientInfo: {
    borderWidth: 1,
    borderColor: '#6E758812',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  recipientImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F0F4F7',
    marginRight: 15,
  },
  recipientTextContainer: {
    padding: '5%',
    backgroundColor: '#fff',
    gap:14,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  recipientHead: {
    fontSize: 19,
    fontWeight: '600',
    lineHeight: 19,
    color: '#23303B',
  },
  recipientName: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: '600',
    color: '#23303B',
  },
  recipientPhone: {
    fontSize: 14,
    color: '#8E949A',
  },
  editIconContainer: {
    padding: 5,
    borderRadius: 50,
    backgroundColor: '#F0F4F7',
  },
  currencyContainer: {
    borderWidth: 1,
    borderColor: '#6E758812',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: '3%',
  },
  flagContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  labelText: {
    color: '#A4A9AE',
    fontSize: 16,
    fontWeight: '400',
  },
  flag: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  currencyText: {
    fontSize: 14,
    marginTop: 5,
    color: '#23303B',
  },
  transferIcon: {
    marginHorizontal: 30,
    padding: 10,
    backgroundColor: '#F1F2F3',
    borderRadius: 25,
  },
  transferDetailsContainer: {
    marginTop: "10%",
    borderWidth: 1,
    borderColor: '#6E758812',
    padding: 15,
    borderRadius: 10,
   },
  transferDetailsHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#23303B',
  },
  transferRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
   
    borderRadius: 8,
   
    fontSize: 16,
   
    marginRight: 10,
  },
  currencyLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#23303B',
  },
});

export default Confirm;
