import * as React from 'react';
import { Text, View,StyleSheet,Button } from 'react-native';

function ScreenB({ navigation }) {
    return (
    
      <View  style={styles.ScreenB} >
        <Button
          title="Go to Screen C"
          onPress={() => navigation.navigate('ScreenC')}
        />
      </View>
    );
  }

const styles = StyleSheet.create({

    ScreenB:{ 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
      justifyContent:'space-around',
    },
  });

  export default ScreenB;
  
