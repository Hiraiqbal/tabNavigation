import * as React from 'react';
import { Text, View,StyleSheet,Button } from 'react-native';

function NotificationsScreen({ navigation }) {
    return (
    
      <View  style={styles.notification} >
        <Button
          title="Go to Abouts"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    );
  }

const styles = StyleSheet.create({

    notification:{ 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
      justifyContent:'space-around',
    },
  });

  export default NotificationsScreen;
  
