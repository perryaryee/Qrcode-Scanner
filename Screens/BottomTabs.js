import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Generate from './Generate';
import Scan from './Scan';
import AntDesign from 'react-native-vector-icons/AntDesign';

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopColor: '#7119C7',
          borderTopWidth: 0,
        },
        tabBarInactiveTintColor: '#dddddd',
        // tabBarActiveTintColor: '#51D8C7',
        tabBarActiveTintColor: '#FF5A5F',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          // elevation: 10,
          borderColor: '#dddddd',
          borderWidth: 0.6,
        },
      }}>
      <Tab.Screen
        name="Generate"
        component={Generate}
        options={{
          headerShown: false,
          tabBarLabel: 'Generate',
          tabBarIcon: ({color}) => (
            <AntDesign name="find" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          headerShown: false,
          tabBarLabel: 'Scan',
          tabBarIcon: ({color}) => (
            <AntDesign name="scan1" color={color} size={24} />
          ),
        }}
        // options={{
        //   tabBarBadge: 12,
        //   headerShown: false,
        //   tabBarLabel: 'Chats',
        //   tabBarIcon: ({color}) => (
        //     <AntDesign name="message1" color={color} size={24} />
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
