import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import PropsType from 'prop-types';
import {Text} from '@components';
import styles from './styles';

/**
 * @param {Array} items
 * @param {Number} selectedIndex
 * @param {Function} onSelect
 * @param {Object} style
 * @param {String} dark
 */

const TabBar = props => {
  const {items, onSelect, selectedIndex, style, dark} = props;
  return (
    <View style={[styles.container, style]}>
      {items?.map((item, index) => {
        const handlePress = () => {
          onSelect && onSelect(index);
        };
        return (
          <TouchableOpacity
            key={index}
            onPress={handlePress}
            style={styles.item_container}>
            {item.icon && (
              <item.icon
                style={
                  index == selectedIndex
                    ? styles.icon_selected
                    : styles.icon_unselected
                }
              />
            )}

            {item.label && (
              <Text
                style={
                  !dark
                    ? index == selectedIndex
                      ? styles.text_selected
                      : styles.text_unselected
                    : index == selectedIndex
                    ? styles.dark_text_selected
                    : styles.dark_text_unselected
                }
                category="Label">
                {item.label}
              </Text>
            )}

            <View
              style={[
                styles.statusbar_style,
                !dark
                  ? index == selectedIndex
                    ? styles.selected_bar
                    : styles.unselected_bar
                  : index == selectedIndex
                  ? styles.dark_selected_bar
                  : styles.dark_unselected_bar,
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

TabBar.propTypes = {
  items: PropsType.array,
  selectedIndex: PropsType.number,
  onSelect: PropsType.func,
  style: PropsType.oneOfType([PropsType.array, PropsType.object]),
  dark: PropsType.string,
};

export default TabBar;
