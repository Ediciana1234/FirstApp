import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import Login from './component/Login'

export default function App() {
  return (
    < SafeAreaView style={styles.container}> 

    < Login/>

    < StatusBar style='auto'/>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
