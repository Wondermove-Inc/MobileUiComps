import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import PropsType from 'prop-types';
import {Text, Icon} from '@components';
import {colors} from '@styles';
import styles from './styles';

/**
 * @param {boolean} isSelected
 * @param {boolean} disabled
 * @param {Function} onSelect
 * @param {string} theme
 * @param {string} textLeft
 * @param {string} textRight
 * @param {Object, Object[]} style
 */

const Radio = props => {
  const {isSelected, disabled, theme, onSelect, textLeft, textRight, style} =
    props;
  const [hover, setHover] = useState(false);
  const handlePressIn = () => setHover(true);
  const handlePressOut = () => setHover(false);

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onSelect}
      style={[styles.container, style]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}>
      {textLeft && (
        <Text
          category="B2"
          style={[theme == 'dark' && styles.dark_text, styles.left_text]}>
          {textLeft}
        </Text>
      )}
      <Icon
        name={
          isSelected
            ? disabled
              ? `radio_selected_disabled_${theme}`
              : `radio_selected_${theme}`
            : disabled
            ? `radio_unselected_disabled_${theme}`
            : `radio_unselected_${theme}`
        }
        style={
          theme == 'light' && hover && {tintColor: colors.color_primary_blue}
        }
      />
      {textRight && (
        <Text
          category="B2"
          style={[theme == 'dark' && styles.dark_text, styles.right_text]}>
          {textRight}
        </Text>
      )}
    </TouchableOpacity>
  );
};

Radio.propType = {
  isSelected: PropsType.bool,
  disabled: PropsType.bool,
  onSelect: PropsType.func,
  theme: PropsType.oneOf(['light', 'dark']),
  textLeft: PropsType.string,
  textRight: PropsType.string,
  style: PropsType.oneOfType([PropsType.array, PropsType.object]),
};

Radio.defaultProps = {
  isSelected: false,
  disabled: false,
  theme: 'light',
  textLeft: null,
  textRight: null,
};

export default Radio;
