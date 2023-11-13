import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import PropsType from 'prop-types';
import {Text} from '@components';
import styles from './styles';

/**
 * @param {Object[]} items
 * @param {Function} onSelect
 * @param {number} selectedIndex
 * @param {Object, Object[]} style
 */

const Menu = props => {
  const {items, onSelect, selectedIndex, style} = props;
  return (
    <View style={style}>
      {items?.map((item, index) => {
        const {title, iconLeft, disabled} = item;

        const handlePress = () => {
          onSelect && onSelect(index);
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={handlePress}
            disabled={disabled}
            style={[
              index == 0
                ? styles.first_item_container
                : index == items.length - 1
                ? styles.last_item_container
                : styles.other_item_container,
              styles.container_base,
            ]}>
            <View
              style={[
                index == selectedIndex
                  ? styles.selected_bar
                  : styles.unselected_bar,
                disabled && styles.statusbar_disabled,
              ]}
            />
            {iconLeft && (
              <item.iconLeft
                style={[
                  styles.icon_style,
                  index == selectedIndex
                    ? styles.icon_selected
                    : styles.icon_unselected,
                  disabled && styles.icon_disabled,
                ]}
              />
            )}
            <Text style={disabled && styles.text_disabled} category="B2">
              {title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

Menu.propTypes = {
  items: PropsType.array,
  onSelect: PropsType.func,
  selectedIndex: PropsType.number,
  style: PropsType.oneOfType([PropsType.array, PropsType.object]),
};

export default Menu;
