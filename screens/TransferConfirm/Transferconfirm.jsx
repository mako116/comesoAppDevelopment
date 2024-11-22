import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ConfirmTransfer = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Are you sure?</Text>

      {/* Description */}
      <Text style={styles.description}>
        We care about your privacy. Please make sure that you want to transfer money.
      </Text>

      {/* Box with Image and Content */}
      <View style={styles.boxContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your actual image URL
          style={styles.absoluteImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.boxText}>Recipient: John Doe</Text>
          <Text style={styles.boxText}>Amount: $500</Text>
          <Text style={styles.boxText}>Fee: $5</Text>
        </View>

        {/* Row of Texts */}
        <View style={styles.rowContainer}>
          <Text style={styles.rowText}>Cancel</Text>
          <Text style={styles.rowText}>Confirm</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#23303B',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#8E949A',
    paddingHorizontal: 10,
  },
  boxContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    position: 'relative',
  },
  absoluteImage: {
    position: 'absolute',
    top: -30,
    left: '40%',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textContainer: {
    marginBottom: 20,
  },
  boxText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#23303B',
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  rowText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0A2EE2',
  },
});

export default ConfirmTransfer;
