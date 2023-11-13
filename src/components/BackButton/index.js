import React from 'react';
import {TouchableOpacity} from 'react-native';

import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Icon} from '@components';

export default ({navigation, color, style}) => {
  return (
    <TouchableOpacity
      style={[style, {marginTop: getStatusBarHeight(true) + 12}]}
      onPress={() => navigation.goBack()}>
      <Icon name="arrow_left" style={{tintColor: color}} />
    </TouchableOpacity>
  );
};
