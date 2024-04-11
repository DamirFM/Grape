import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, Image, Alert, SafeAreaView, Button } from 'react-native';

export default function App() {
  const handlePress= () => console.log('Text pressed');
  return (
    <SafeAreaView style={styles.container}>
      <Button 
      color="red"
      title="Click Me" 
      onPress={() => Alert.alert('Title', 'My message',
      [
        { text: 'yes', onPress: () => console.log('yes')}, 
        {text: 'no', onPress:() => console.log('no') }])} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
