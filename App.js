import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/Home/HomeScreen';
import ScrollContainer from './components/ScrollContainer';
import RootTabContainer from './components/Root/RootTabContainer';

export default function App() {
  return (
    <View style={styles.container}>
   <RootTabContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
