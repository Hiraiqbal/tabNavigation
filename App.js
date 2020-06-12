import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationTab from './routes/navigationTab';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/DrawerScreen1';
import NotificationsScreen from './screens/DrawerScreen2';
import AboutScreen from './screens/DrawerScreen3';
import DrawerTab1 from './screens/DrawerTab1';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={DrawerTab1} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Abouts" component={MyTabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
