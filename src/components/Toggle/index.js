import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropsType from 'prop-types';
import styles from './styles';
import {Text, Icon} from '@components';

/**
 * @param {boolean} isSelected
 * @param {boolean} disabled
 * @param {Function} onSelect
 * @param {string} textLeft
 * @param {string} textRight
 * @param {Object, Object[]} style
 */

const Toggle = props => {
  const {isSelected, disabled, onSelect, textLeft, textRight} = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onSelect}
      style={styles.container}>
      {textLeft && (
        <Text
          category="B2"
          style={[styles.left_text, disabled && styles.disabled_text_color]}>
          {textLeft}
        </Text>
      )}
      <Icon
        name={
          isSelected
            ? disabled
              ? `toggle_checked_disabled`
              : `toggle_checked`
            : disabled
            ? `toggle_unchecked_disabled`
            : `toggle_unchecked`
        }
      />
      {textRight && (
        <Text
          category="B2"
          style={[styles.right_text, disabled && styles.disabled_text_color]}>
          {textRight}
        </Text>
      )}
    </TouchableOpacity>
  );
};

Toggle.propType = {
  isSelected: PropsType.bool,
  disabled: PropsType.bool,
  onSelect: PropsType.func,
  textLeft: PropsType.string,
  textRight: PropsType.string,
  style: PropsType.oneOfType([PropsType.object, PropsType.array]),
};

export default Toggle;
