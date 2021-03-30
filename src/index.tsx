import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AnimatedText from './AnimatedText';
// import { Container } from './styles';

const Screen: React.FC = () => {
  return (
    <View style={styles.container}>
      <AnimatedText>
        <Text style={styles.title}>Hello, @user</Text>
      </AnimatedText>
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
    fontSize: 35,
    fontFamily: 'SourceSansPro-Bold',
    color: '#333',
  },
});
export default Screen;
