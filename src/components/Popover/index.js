import React from 'react';
import PropsType from 'prop-types';
import {View} from 'react-native';
import styles from './styles';

/**
 * @param {Function} trigger
 * @param {boolean} isVisible
 * @param {Function} content
 * @param {boolean} fullWidth
 * @param {Object, Object[]} style
 */

const Popover = props => {
  const {trigger, isVisible, content, fullWidth, style} = props;
  return (
    <View style={style}>
      {trigger}
      <View>
        {isVisible && content && (
          <props.content
            style={[styles.pop_container, fullWidth && {width: '100%'}]}
          />
        )}
      </View>
    </View>
  );
};

Popover.propType = {
  trigger: PropsType.func,
  isVisible: PropsType.bool,
  content: PropsType.func,
  fullWidth: PropsType.bool,
  style: PropsType.oneOfType([PropsType.array, PropsType.object]),
};

export default Popover;
