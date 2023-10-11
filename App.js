import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import registerNNPushToken from 'native-notify';
export default function App() {
  //registerNNPushToken(13309, '9Sr3Pqbh3qfiyZsUNbVSTt');
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!
        Work well
      </Text>
      <StatusBar style="auto" />
    </View>
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
