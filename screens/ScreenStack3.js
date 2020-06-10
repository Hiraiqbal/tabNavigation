import * as React from 'react';
import { Text, View,StyleSheet,Button } from 'react-native';

function ScreenStack3({ navigation }) {
    return (
    
      <View  style={styles.Stack3} >
        <Button
          title="Go to Stack3"
          onPress={() => navigation.navigate('Stack3')}
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

  export default ScreenStack3;
  
