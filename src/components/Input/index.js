import React, {useState} from 'react';
import {View, TextInput, TouchableWithoutFeedback} from 'react-native';
import PropsType from 'prop-types';
import {Text, Icon} from '@components';
import styles from './styles';
import {colors} from '@styles';

/**
 * @param {Object, Object[]} inputStyle
 * @param {Object, Object[]} containerStyle
 * @param {string} label
 * @param {string} errorText
 * @param {boolean} error
 * @param {string} theme
 * @param {string} size
 * @param {string} icon
 * @param {Function} iconOnPress
 * @param {bool} disabled
 */

const Input = props => {
  const {
    inputStyle,
    label,
    theme,
    iconRight,
    error,
    errorText,
    iconOnPress,
    containerStyle,
    disabled,
    multiline,
    size,
    onFocus,
    onBlur,
    placeholder,
    ...override
  } = props;

  const [status, setStatus] = useState('normal');

  const handleFocus = e => {
    error ? setStatus('error') : setStatus('typing');
    onFocus && onFocus(e);
  };

  const handleBlur = e => {
    error ? setStatus('error') : setStatus('normal');
    onBlur && onBlur(e);
  };

  const handleSubmit = () => {
    error ? setStatus('error') : setStatus('normal');
  };

  return (
    <View style={containerStyle}>
      {label && (
        <Text
          category="Label"
          style={[
            error
              ? errorTextColor[`${theme}_error`]
              : errorTextColor[`${theme}_${status}`],
            disabled && errorTextColor[`${theme}_disabled`],
          ]}>
          {label}
        </Text>
      )}

      <View
        activeOpacity={1}
        style={{
          flexDirection: 'row-reverse',
          alignItems: 'center',
        }}>
        <TextInput
          style={[
            styles.input_base,
            error
              ? inputColor[`${theme}_error`]
              : inputColor[`${theme}_${status}`],
            disabled && inputColor[`${theme}_disabled`],
            multiline ? styles.multiline_input : inputSize[size],
            iconRight && {paddingRight: 50},
            inputStyle,
          ]}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onSubmitEditing={handleSubmit}
          placeholder={placeholder}
          placeholderTextColor={
            disabled
              ? placeholderColor[`${theme}_disabled`]
              : placeholderColor[theme]
          }
          selectionColor={inputSelectionColor[theme]}
          autoCapitalize="none"
          editable={!disabled}
          multiline={multiline}
          {...override}
        />

        {iconRight && (
          <View style={styles.input_icon}>
            <TouchableWithoutFeedback onPress={iconOnPress}>
              <Icon
                style={[
                  error
                    ? iconColor[`${theme}_error`]
                    : iconColor[`${theme}_${status}`],
                  disabled && iconColor[`${theme}_disabled`],
                ]}
                name={iconRight}
              />
            </TouchableWithoutFeedback>
          </View>
        )}
      </View>

      {error && (
        <View>
          <Text category="B3" style={styles.label_error}>
            {errorText}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Input;

Input.propTypes = {
  inputStyle: PropsType.oneOfType([PropsType.object, PropsType.array]),
  containerStyle: PropsType.oneOfType([PropsType.object, PropsType.array]),
  label: PropsType.string,
  errorText: PropsType.string,
  error: PropsType.bool,
  theme: PropsType.oneOf(['light', 'dark']),
  size: PropsType.oneOf(['tiny', 'small', 'medium', 'large', 'giant']),
  icon: PropsType.string,
  iconOnPress: PropsType.func,
  disabled: PropsType.bool,
};

Input.defaultProps = {
  theme: 'light',
  size: 'medium',
  label: null,
  error: false,
  disabled: false,
  multiline: false,
};

const inputColor = {
  light_normal: styles.light_input_general,
  light_typing: styles.light_input_typing,
  light_error: styles.light_input_danger,
  light_disabled: styles.light_input_disabled,

  dark_normal: styles.dark_input_general,
  dark_typing: styles.dark_input_typing,
  dark_error: styles.dark_input_danger,
  dark_disabled: styles.dark_input_disabled,
};

const placeholderColor = {
  light: colors.color_secondary_gray,
  dark: colors.color_secondary_lightgray,
  light_disabled: colors.color_secondary_lightgray,
  dark_disabled: colors.color_secondary_gray,
};

const errorTextColor = {
  light_normal: styles.light_label_general,
  light_typing: styles.light_label_typing,
  light_error: styles.light_label_danger,
  light_disabled: styles.light_label_disabled,

  dark_normal: styles.dark_label_general,
  dark_typing: styles.dark_label_typing,
  dark_error: styles.dark_label_danger,
  dark_disabled: styles.dark_label_disabled,
};

const inputSelectionColor = {
  light: colors.color_secondary_darkgray,
  dark: colors.color_secondary_white,
};

const iconColor = {
  light_normal: styles.light_tint_general,
  light_typing: styles.light_tint_typing,
  light_error: styles.light_tint_danger,
  light_disabled: styles.light_tint_disabled,

  dark_normal: styles.dark_tint_general,
  dark_typing: styles.dark_tint_typing,
  dark_error: styles.dark_tint_danger,
  dark_disabled: styles.dark_tint_disabled,
};

const inputSize = {
  small: styles.small_input,
  medium: styles.medium_input,
  large: styles.large_input,
};
