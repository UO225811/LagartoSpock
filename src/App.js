import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Buttons from './components/Buttons';
import classes from "./App.css";

const App =() => {
  return (
    <View className={classes.content}>
      <Text>Open up App.js to start working on your app!</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default App;