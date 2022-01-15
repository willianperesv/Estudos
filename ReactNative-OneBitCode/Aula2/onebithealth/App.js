
import React from 'react';
import { StyleSheet, View } from 'react-native';//para usar a const styles é preciso esta linha de importação
import Title from './src/components/Title/'
import Form from './src/components/Form/'

export default function App() {
  return (
    <View style={styles.container}>
     <Title/>
     <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop:80,
  },
});
