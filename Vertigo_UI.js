import React, {useState} from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Please log in')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Button title="Log in" onPress={() => setOutputText('You are now logged in')}/>
      <Text></Text>
      <Text></Text>
      <Text></Text>
        <Button title="Log out" onPress={() => setOutputText('You are now logged out')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9a4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
