import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import beranda from './screens/beranda';
import notifikasi from './screens/notifikasi';
import Setelan from './screens/Setelan';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Beranda" component={beranda} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Notifikasi" component={notifikasi} options={{
          tabBarLabel: 'Notifikasi',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Setelan" component={Setelan} options={{
          tabBarLabel: 'Setelan',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}/>
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App

const styles = StyleSheet.create({})