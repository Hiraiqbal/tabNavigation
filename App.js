import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationTab from './routes/navigationTab';


export default function App() {
  return (
    <NavigationContainer>
      < NavigationTab />
    </NavigationContainer>
  );
}
