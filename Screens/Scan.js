import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Header from '../Components/Header';

export default function Scan() {
  return (
    <View style={styles.ScanContainer}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Header headerName="Decode-Qr-Code" />
      <View style={{padding: 15}}>
        <Text>Hello world</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ScanContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
