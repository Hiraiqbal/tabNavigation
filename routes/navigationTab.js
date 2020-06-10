import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreen';
import NotificationScreen from '../screens/notificationScreen';
import SettingsScreen from '../screens/settingScreen';
import TabNotification from '../screens/TabNotification';
import AboutScreen from '../screens/aboutscreen';
import ScreenA from '../screens/ScreenA';
import ScreenB from '../screens/ScreenB';
import ScreenC from '../screens/ScreenC';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Stack2 = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="About" component={AboutScreen} />

    </Stack.Navigator>
  );
}
function MyStack2() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="ScreenA" component={ScreenA} />
      <Stack.Screen name="ScreenB" component={ScreenB} />
      <Stack.Screen name="ScreenC" component={ScreenC} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notification" component={MyStack} />
      <Tab.Screen name="Settings" component={MyStack2} />
    </Tab.Navigator>
  );
}

export default MyTabs;



