import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, @User</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontFamily: 'SourceSansPro-Bold',
  },
});
export default App;
