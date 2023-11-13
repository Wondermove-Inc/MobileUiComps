import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import PropsType from 'prop-types';
import {Icon, Text} from '@components';

/**
 * @param {string} size
 * @param {string} variant
 * @param {string} text
 * @param {boolean} disabled
 * @param {string} iconLeft
 * @param {string} iconRight
 * @param {Object, Object[]} buttonStyle
 * @param {Object, Object[]} textStyle
 */

const Button = props => {
  const {
    size,
    text,
    variant,
    buttonStyle,
    textStyle,
    iconStyle,
    iconLeft,
    iconRight,
    disabled,
    onPress,
  } = props;
  const [status, setStatus] = useState('default');

  const handlePressIn = () => setStatus('hover');
  const handlePressOut = () => setStatus('default');

  return (
    <TouchableOpacity
      style={[
        styles.button_base,
        buttonSize[size],
        disabled
          ? buttonColor[`${variant}_disabled`]
          : buttonColor[`${variant}_${status}`],
        buttonStyle,
      ]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      activeOpacity={1}
      onPress={onPress}>
      {iconLeft && (
        <Icon
          style={[
            disabled
              ? iconColor[`${variant}_disabled`]
              : iconColor[`${variant}_${status}`],
            iconStyle,
          ]}
          name={iconLeft}
        />
      )}

      {text && (
        <Text
          category="CTA"
          style={[
            iconLeft && {marginLeft: 4},
            iconRight && {marginRight: 4},
            disabled
              ? fontColor[`${variant}_disabled`]
              : fontColor[`${variant}_${status}`],
            textStyle,
          ]}>
          {text}
        </Text>
      )}

      {iconRight && (
        <Icon
          style={[
            disabled
              ? iconColor[`${variant}_disabled`]
              : iconColor[`${variant}_${status}`],
            iconStyle,
          ]}
          name={iconRight}
        />
      )}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  size: PropsType.oneOf(['tiny', 'small', 'medium', 'large', 'giant']),
  variant: PropsType.oneOf(['primary', 'sub', 'line', 'ghost']),
  text: PropsType.string,
  disabled: PropsType.bool,
  iconLeft: PropsType.string,
  iconRight: PropsType.string,
  buttonStyle: PropsType.oneOfType([PropsType.object, PropsType.array]),
  textStyle: PropsType.oneOfType([PropsType.object, PropsType.array]),
};

Button.defaultProps = {
  size: 'medium',
  variant: 'primary',
  disabled: false,
  iconLeft: null,
  iconRight: null,
  text: '',
};

const buttonSize = {
  tiny: styles.tiny_button,
  small: styles.small_button,
  medium: styles.medium_button,
  large: styles.large_button,
  giant: styles.giant_button,
};

const buttonColor = {
  primary_default: styles.button_primary_default,
  primary_disabled: styles.button_primary_disabled,
  primary_hover: styles.button_primary_hover,

  sub_default: styles.button_sub_default,
  sub_disabled: styles.button_sub_disabled,
  sub_hover: styles.button_sub_hover,

  line_default: styles.button_line_default,
  line_disabled: styles.button_line_disabled,
  line_hover: styles.button_line_hover,

  ghost_default: styles.button_ghost_default,
  ghost_disabled: styles.button_ghost_disabled,
  ghost_hover: styles.button_ghost_hover,
};

const fontColor = {
  primary_default: styles.text_primary_default,
  primary_disabled: styles.text_primary_disabled,
  primary_hover: styles.text_primary_hover,

  sub_default: styles.text_sub_default,
  sub_disabled: styles.text_sub_disabled,
  sub_hover: styles.text_sub_hover,

  line_default: styles.text_line_default,
  line_disabled: styles.text_line_disabled,
  line_hover: styles.text_line_hover,

  ghost_default: styles.text_ghost_default,
  ghost_disabled: styles.text_ghost_disabled,
  ghost_hover: styles.text_ghost_hover,
};

const iconColor = {
  primary_default: styles.icon_primary_default,
  primary_disabled: styles.icon_primary_disabled,
  primary_hover: styles.icon_primary_hover,

  sub_default: styles.icon_sub_default,
  sub_disabled: styles.icon_sub_disabled,
  sub_hover: styles.icon_sub_hover,

  line_default: styles.icon_line_default,
  line_disabled: styles.icon_line_disabled,
  line_hover: styles.icon_line_hover,

  ghost_default: styles.icon_ghost_default,
  ghost_disabled: styles.icon_ghost_disabled,
  ghost_hover: styles.icon_ghost_hover,
};

export default Button;
