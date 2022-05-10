import { StyleSheet, Text, View } from 'react-native';
import TvController from './src/components/TvController';


export default function App() {
  return (
    <View style={styles.container}>
      <TvController/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: '#000'
  }
});
