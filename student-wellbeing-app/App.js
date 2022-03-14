import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogSport from './src/screens/LogScreens/LogSport';
import LogFood from './src/screens/LogScreens/LogFood';

export default function App() {
  return (
    <LogSport />
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
