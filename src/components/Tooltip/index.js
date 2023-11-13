import React from 'react';
import PropsType from 'prop-types';
import {View, Image} from 'react-native';
import styles from './styles';
import {Text} from '@components';

/**
 * @param {Function} trigger
 * @param {boolean} isVisible
 * @param {string} toolTip
 * @param {string} iconLeft
 * @param {Object, Object[]} style
 */

const Tooltip = props => {
  const {trigger, isVisible, toolTip, iconLeft, style} = props;
  return (
    <View style={style}>
      {trigger}
      <View>
        <View style={styles.tooltip_container}>
          {isVisible && toolTip && (
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../assets/image/image_tooltip_caret.png')}
              />
              <View style={styles.text_container}>
                {iconLeft}
                <Text style={styles.tooltip_text} category="B2">
                  {toolTip}
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

Tooltip.propType = {
  trigger: PropsType.func,
  isVisible: PropsType.bool,
  toolTip: PropsType.string,
  iconLeft: PropsType.string,
  style: PropsType.oneOfType([PropsType.array, PropsType.object]),
};

export default Tooltip;
