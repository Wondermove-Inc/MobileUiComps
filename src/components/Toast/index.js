import React, {useRef, useEffect} from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import {Text} from '@components';
import {colors, fontColors} from '@styles';

export default ({visible, message}) => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 300,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 300,
    }).start();
  };

  useEffect(() => {
    if (visible) fadeIn();
    else fadeOut();
  }, [visible]);

  return (
    visible && (
      <Animated.View
        style={{...styles.toast_container, opacity: fadeAnimation}}>
        <Text style={styles.toast_message} category="B2">
          {message}
        </Text>
      </Animated.View>
    )
  );
};

const styles = StyleSheet.create({
  toast_container: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 38,
    backgroundColor: colors.color_secondary_gray,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 28,
    marginHorizontal: 20,
  },
  toast_message: {
    color: fontColors.color_white,
    textAlign: 'center',
  },
});
