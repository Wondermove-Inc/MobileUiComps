import React, {useRef} from 'react';

import {
  Dimensions,
  StyleSheet,
  Animated,
  View,
  PanResponder,
  TouchableOpacity,
} from 'react-native';

import {colors} from '@styles';

const {width} = Dimensions.get('window');

export default props => {
  const panY = useRef(new Animated.Value(props.panelDownHeight)).current;

  const slidingDown = Animated.timing(panY, {
    toValue: props.panelDownHeight,
    duration: 300,
    useNativeDriver: true,
  });

  const slidingUp = Animated.timing(panY, {
    toValue: props.panelUpHeight,
    duration: 300,
    useNativeDriver: true,
  });

  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: (event, gestureState) => {
        if (gestureState.moveY) panY.setValue(gestureState.moveY);

        if (gestureState.moveY < props.panelUpHeight)
          panY.setValue(props.panelUpHeight);
        else if (gestureState.moveY > props.panelDownHeight)
          panY.setValue(props.panelDownHeight);
      },
      onPanResponderRelease: (_, gs) => {
        if (gs.vy != 0) {
          if (gs.vy > 0) {
            slidingDown.start();
          } else {
            slidingUp.start();
          }
        }
      },
    }),
  ).current;

  return (
    <Animated.View
      style={[
        styles.container,
        {transform: [{translateY: translateY}], height: props.panelHeight},
      ]}>
      <View style={styles.invisible_grabber} {...panResponders.panHandlers}>
        <View style={styles.grabber} />
      </View>

      {props.children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color_secondary_white,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    position: 'absolute',
    width: width,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 5.3,
    elevation: 13,
  },
  grabber: {
    width: 30,
    borderTopWidth: 4,
    height: 0,
    borderColor: colors.color_secondary_lightgray,
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: 12,
  },
  invisible_grabber: {
    position: 'absolute',
    height: 50,
    width: 120,
    zIndex: 5,

    alignSelf: 'center',
  },
});
