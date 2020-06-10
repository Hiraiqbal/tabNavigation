import * as React from 'react';
import { Text, View,StyleSheet,Button } from 'react-native';

function ScreenStack1({ navigation }) {
    return (
    
      <View  style={styles.Stack1} >
        <Button
          title="Go to Screen 1"
          onPress={() => navigation.navigate('Stack2')}
        />
      </View>
    );
  }

const styles = StyleSheet.create({

    Stack1:{ 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
      justifyContent:'space-around',
    },
  });

  export default ScreenStack1;
  
