import React from 'react';
import {View} from 'react-native';
import styles from './styles';

export default props => {
  return <View style={[styles.defaultDivider, props.style]}></View>;
};
