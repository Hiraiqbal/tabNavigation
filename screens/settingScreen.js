import * as React from 'react';
import { Text, View,StyleSheet,Button } from 'react-native';

function SettingScreen({ navigation }) {
    return (
    
      <View  style={styles.Settings} >
        <Button
          title="Go to ScreenA"
          onPress={() => navigation.navigate('ScreenA')}
        />
      </View>
    );
  }

const styles = StyleSheet.create({

    Settings:{ 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
      justifyContent:'space-around',
    },
  });

  export default SettingScreen;
  
