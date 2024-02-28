import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Clima from './componentes/Clima';
import { styles } from './componentes/Diseño';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Clima/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}