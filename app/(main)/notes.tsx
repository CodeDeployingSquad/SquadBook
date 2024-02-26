import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Notes</Text>
        <Text style={styles.subtitle}>Modify app/notes.tsx</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#121212', // Dark background color
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#FFFFFF', // White color for title in dark mode
  },
  subtitle: {
    fontSize: 36,
    color: '#CCCCCC', // Light gray color for subtitle in dark mode
  },
});
