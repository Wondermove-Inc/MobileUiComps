import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import PropsType from 'prop-types';
import {Button} from '@components';

/**
 * @param {Object[]} items - Set ButtonGroup item
 * @param {Function} onPress - Set a function when you on click button. ex) onPress={index=>consonle.log(index)}
 * @param {string} variant - Choose the appearance of the button as primary, sub, line or ghost.
 * @param {string} size - Choose the size of the button as tiny, small, medium, large or giant
 * @param {Object, Object[]} buttonStyle - Customize the button style
 * @param {Object, Object[]} style
 */

const ButtonGroup = props => {
  const {style, items, onPress, variant, size, buttonStyle} = props;
  const handlePress = index => {
    onPress && onPress(index);
  };

  return (
    <View style={[styles.button_group_container, style]}>
      {items.map((item, index) => {
        return (
          <Button
            key={index}
            buttonStyle={[
              index == 0
                ? variant == 'line'
                  ? items.length == 2
                    ? styles.two_button_line_first_button
                    : styles.first_button_line
                  : items.length == 2
                  ? variant == 'sub'
                    ? styles.two_button_sub_first_button
                    : styles.two_button_primary_first_button
                  : styles.first_button
                : index == items.length - 1
                ? variant == 'line'
                  ? styles.last_button_line
                  : styles.last_button
                : middleButton[variant],
              buttonStyle,
            ]}
            text={item.name}
            variant={variant}
            size={size}
            onPress={handlePress(index)}
          />
        );
      })}
    </View>
  );
};

ButtonGroup.defaultProps = {
  variant: 'primary',
  shape: 'round',
};

ButtonGroup.propTypes = {
  style: PropsType.oneOfType([PropsType.array, PropsType.object]),
  items: PropsType.array,
  onPress: PropsType.func,
  variant: PropsType.string,
  size: PropsType.string,
  buttonStyle: PropsType.oneOfType([PropsType.array, PropsType.object]),
};

const middleButton = {
  primary: styles.primary_middle,
  sub: styles.sub_middle,
  line: styles.line_middle,
};

export default ButtonGroup;
