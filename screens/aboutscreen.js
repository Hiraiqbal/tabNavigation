import React from 'react';
import { Button, View,StyleSheet } from 'react-native';

function AboutScreen({ navigation }) {
    return (
      <View style={styles.setting} >
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  const styles = StyleSheet.create({

    setting:{ 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  export default AboutScreen;