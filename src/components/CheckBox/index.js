import React from 'react';
import PropsType from 'prop-types';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import {Icon, Text} from '@components';

/**
 * @param {boolean} isSelected
 * @param {boolean} disabled
 * @param {Function} onSelect
 * @param {string} theme
 * @param {string} textLeft
 * @param {string} textRight
 * @param {Object, Object[]} style
 */

const CheckBox = props => {
  const {isSelected, disabled, theme, onSelect, textLeft, textRight, style} =
    props;

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      disabled={disabled}
      onPress={onSelect}>
      {textLeft && (
        <Text
          category="B2"
          style={[theme === 'dark' && styles.dark_text, styles.left_text]}>
          {textLeft}
        </Text>
      )}
      <Icon
        name={
          isSelected
            ? disabled
              ? `checkbox_selected_disabled_${theme}`
              : `checkbox_selected_${theme}`
            : disabled
            ? `checkbox_unselected_disabled_${theme}`
            : `checkbox_${theme}`
        }
      />
      {textRight && (
        <Text
          category="B2"
          style={[theme === 'dark' && styles.dark_text, styles.right_text]}>
          {textRight}
        </Text>
      )}
    </TouchableOpacity>
  );
};

CheckBox.propType = {
  isSelected: PropsType.bool,
  disabled: PropsType.bool,
  onSelect: PropsType.func,
  theme: PropsType.oneOf(['light', 'dark']),
  textLeft: PropsType.string,
  textRight: PropsType.string,
  style: PropsType.oneOfType([PropsType.object, PropsType.array]),
};

CheckBox.defaultProps = {
  isSelected: false,
  disabled: false,
  theme: 'light',
  textLeft: null,
  textRight: null,
};

export default CheckBox;
