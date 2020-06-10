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
import ScreenTab1 from '../screens/ScreenTab1';
import ScreenTab2 from '../screens/ScreenTab2';
import ScreenTab3 from '../screens/ScreenTab3';
import ScreenStack1 from '../screens/ScreenStack1';
import ScreenStack2 from '../screens/ScreenStack2';
import ScreenStack3 from '../screens/ScreenStack3';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Stack2 = createStackNavigator();
const Stack3 = createStackNavigator();

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

function MyStack3() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Stack1" component={ScreenStack1} />
      <Stack.Screen name="Stack2" component={MyTabs} />
      <Stack.Screen name="Stack3" component={ScreenStack3} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notification" component={MyStack} />
      <Tab.Screen name="Settings" component={MyStack2} />
      <Tab.Screen name="Tab1" component={ScreenTab1} />
      <Tab.Screen name="Tab2" component={ScreenTab2} />
      <Tab.Screen name="Tab3" component={ScreenStack3} />
    </Tab.Navigator>
  );
}

export default MyStack3;



