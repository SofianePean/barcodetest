import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

//Components
import AppNavigation from './src/navigation';

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <AppNavigation />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
});