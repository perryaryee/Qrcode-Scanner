import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from '../Components/Header';
import {useNavigation} from '@react-navigation/native';

const AttendanceList = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header
        headerName="Attendance List"
        onPressBack={() => {
          navigation.goBack();
        }}
        leftheaderName="Export"
      />
      <View style={styles.ListContainer}>
        <ScrollView></ScrollView>
      </View>
    </View>
  );
};

export default AttendanceList;

const styles = StyleSheet.create({
  ListContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
});
