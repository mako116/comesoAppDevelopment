import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
  import HeaderM from '../TransferConfirm/HeaderM';
  import logo from '../../assets/images/logo.png';

  
const Successfulmodals = () => {
 
 
  return (
    <View style={styles.container}>
      {/* Header */}
    <View style={{paddingHorizontal:5,}}>
      <HeaderM />
      <Text style={styles.header}>Transfer Successfully</Text>

      {/* Description */}
      <Text style={styles.description}>
        Your money has been transferred successfully.
      </Text>
      </View>
      {/* Box with Image and Content */}
      <View style={styles.boxContainer}>
        <Image
          source={require('../../assets/images/successfullbg.png')}
          style={styles.absoluteImages}
          resizeMode="contain"
        />
     
      </View>
      {/*  */}
       <View style={styles.boxContainers}>
      <Image source={logo} style={styles.absoluteImage} />

        
        <View style={styles.textContainer}>
          <Text style={styles.boxTexts}>John Doe</Text>
          <Text style={styles.boxText}>1******6103</Text>
          <View style={styles.boxBoard}>
          <Text style={styles.boxTex}>Transactions Status:</Text>
          <Text style={[styles.boxTex, {fontWeight:"700"}]}> Sent</Text>
          </View>
        
         <View style={{flexDirection:'row', alignItems:"center",justifyContent:"center",paddingVertical:8}}>
         <Text style={styles.currencyText}>$250.00</Text>
         <Text style={styles.currency}>USD</Text>
         </View>
         <View style={{flexDirection:'row', alignItems:"center",justifyContent:"space-between"}}>
         <Text style={styles.TrfText}>Card Type</Text>
         <Text style={styles.amounts}>Debit Card</Text>
         </View>
         <View style={{ flexDirection:'row',alignItems:"center",justifyContent:"space-between"}}>
         <Text style={styles.TrfText}>Transfer fee</Text>
         <Text style={styles.amounts}>$10.00<Text style={{fontSize:9}}>USD</Text></Text>
         </View>
        </View>
 
      </View>
     </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: '#A4A9AE',
       },
       header: {
        fontFamily: 'Alata',
        fontSize: 30,
        lineHeight: 39.52,
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: 20,
        color: '#456EFE',
      },
      description: {
        fontFamily: 'SofiaPro',
        lineHeight: 26.37,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10,
        color: '#23303B',
        paddingHorizontal: 10,
      },
       boxContainers:{
        width:"100%",
          backgroundColor: '#fff',
        borderTopRightRadius: 20,
        paddingVertical: 20,
         paddingHorizontal:20,
        shadowColor: '#A4A9AE26',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        textAlign:"center",
        elevation: 5,
        position: 'relative',
       },
    boxContainer: {
         // backgroundColor: '#fff',
        borderRadius: 20,
        
        position: 'relative',
      },
      absoluteImages: {
        // width: "100%",  
         backgroundColor: '#999999',
         opacity:0.3
      },
      absoluteImage: {
        position: 'absolute',
        top: -30,
        left: '45%',
        width: 70,
        objectFit:"cover",
        height: 70,
        borderRadius: 30,
        paddingVertical:"3%",
        borderWidth:2,
        borderColor:"#F4F6FC"
      },
      textContainer: {
       
         marginBottom: 20,
      },
      boxTexts: {
        fontFamily: 'SofiaPro',
        paddingTop:15,
        fontSize: 26,
        textAlign:"center",
        fontWeight: '600',
        lineHeight:38,
        color: '#23303B',
        marginBottom: 10,
      },
      boxBoard:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
         borderRadius:10,
        backgroundColor:"#ddf7f0",
        paddingVertical:"3.7%",
        marginBottom: 10,
      },
      boxTex: {
        fontSize: 16,
        fontFamily: 'SofiaPro',
        textAlign:"center",
        lineHeight:23.44,
        fontWeight: '500',
        color: '#13C999',
       },
      boxText: {
        fontSize: 16,
        fontFamily: 'SofiaPro',
        lineHeight:23.44,
        textAlign:"center",
        fontWeight: '500',
        color: '#8E949A',
        marginBottom: 10,
      },
      currencyText: {
        fontFamily: 'SofiaPro',
        fontSize: 36,
        lineHeight:36,
        textAlign:"center",
        fontWeight: '600',
        color: '#23303B',
        marginBottom: 10,
      },
      currency: {
        fontFamily: 'SofiaPro',
        fontSize: 20,
        lineHeight:20,
        textAlign:"center",
        fontWeight: '600',
        color: '#8e949a',
        marginBottom: 10,
      },
      amounts:{
        fontFamily: 'Alata',
        fontSize: 14,
        lineHeight:20.51,
        letterSpacing:1,
        textAlign:"center",
        fontWeight: '400',
        color: '#23303B',
        marginBottom: 10,
      },
      TrfText:{
        fontFamily: 'Alata',
        fontSize: 14,
        lineHeight:20.51,
        textAlign:"center",
        fontWeight: '400',
        color: '#8e949a',
        marginBottom: 10,
      },
      rowContainer: {
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#E5E5E5',
      },
      rowTexts: {
        fontFamily: 'Alata',
        fontSize: 18,
        lineHeight:26.37,
        fontWeight: '400',
        color: '#8E949A',
      },
      rowText: {
        fontFamily: 'Alata',
        fontSize: 18,
        lineHeight:26.37,
        letterSpacing:1,
        fontWeight: '400',
        color: '#23303B',
      }
})

export default Successfulmodals;
