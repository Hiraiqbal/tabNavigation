import * as React from 'react';
import { Text, View,StyleSheet,Button } from 'react-native';

function ScreenStack2({ navigation }) {
    return (
    
      <View  style={styles.Stack2} >
        <Button
          title="Go to Tab 2"
          onPress={() => navigation.navigate('Tab1')}
        />
      </View>
    );
  }

const styles = StyleSheet.create({

    Stack2:{ 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
      justifyContent:'space-around',
    },
  });

  export default ScreenStack2;
  
