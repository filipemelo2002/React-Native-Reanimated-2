import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withSpring,
  withTiming,
  withDelay,
} from 'react-native-reanimated';
import {View, Button, StyleSheet} from 'react-native';

// import { Container } from './styles';
interface Props {
  children: Element;
}
const AnimatedText: React.FC<Props> = ({children}) => {
  const opacity = useSharedValue(0);
  const y = useSharedValue(-50);
  const viewStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{translateY: y.value}],
  }));
  // useEffect(() => {
  //   opacity.value = withDelay(300, withSequence(withSpring(0), withSpring(1)));
  //   y.value = withDelay(300, withSpring(0));
  // }, [opacity, y]);

  const runAnimation = () => {
    opacity.value = 0.0;
    y.value = -50;
    opacity.value = withDelay(300, withSequence(withSpring(0), withSpring(1)));
    y.value = withDelay(300, withSpring(0));
  };
  return (
    <>
      <Animated.View style={[{position: 'relative'}, viewStyle]}>
        {children}
      </Animated.View>
      <View style={styles.button}>
        <Button title="Run Animation" onPress={runAnimation} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
  },
});

export default AnimatedText;
