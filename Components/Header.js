import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Header = ({onPressBack, headerName, leftheaderName}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressBack}>
        <Entypo name="chevron-thin-left" color="#000000" size={23} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.headerText}>{headerName}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          alert('Hello world');
        }}>
        <Text>{leftheaderName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 0.8,
    paddingHorizontal: 12,
    height: 50,
  },
  headerText: {
    fontWeight: '700',
    color: '#000000',
    fontSize: 16,
  },
  chatheadername: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000000',
  },
});
