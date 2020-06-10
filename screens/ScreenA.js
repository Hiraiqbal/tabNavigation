import * as React from 'react';
import { Text, View,StyleSheet,Button } from 'react-native';

function ScreenA({ navigation }) {
    return (
    
      <View  style={styles.ScreenA} >
        <Button
          title="Go to Screen B"
          onPress={() => navigation.navigate('ScreenB')}
        />
      </View>
    );
  }

const styles = StyleSheet.create({

    ScreenA:{ 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
      justifyContent:'space-around',
    },
  });

  export default ScreenA;
  
