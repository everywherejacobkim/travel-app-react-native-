import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { theme } from './Colors';

export default function App() {

  const [working, setWorking] = useState(true);

  const travel = () => {
    setWorking(false)
    console.log(working);
  }
  const work = () => {
    setWorking(true)
    console.log(working);
  }


  return (
    <View style={styles.container}>
     <StatusBar style="auto" />
      <View style={styles.header}>

        <TouchableOpacity onPress={work}>
          <Text style={styles.btnTxt}>Work</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={travel}>
        <Text style={styles.btnTxt}>Travel</Text>
        </TouchableOpacity>

      </View>
    
    
    
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    marginTop: 100,
    justifyContent: "space-between",
  },
  btnTxt: {
    color: "white",
    fontSize: 45,
    fontWeight: "600",
  }
});
