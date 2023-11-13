import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import PropsType from 'prop-types';
import styles from './styles';
import {Text} from '@components';
import {colors} from '@styles';

/**
 * @param {Object[]} items
 * @param {Function} onSelect
 * @param {number} selectedIndex
 * @param {Object, Object[]} style
 */

const BottomNavigation = props => {
  const {items, onSelect, selectedIndex, style} = props;
  return (
    <View style={[styles.container, style]}>
      {items?.map((item, index) => {
        const {title, icon, disabled} = item;

        const handlePress = () => {
          onSelect && onSelect(index);
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={handlePress}
            disabled={disabled}
            style={styles.item_container}>
            {icon && (
              <item.icon
                style={[
                  index == selectedIndex
                    ? {tintColor: colors.color_primary_blue}
                    : {tintColor: colors.color_secondary_lightgray},
                  {marginBottom: 5},
                ]}
              />
            )}
            <Text
              category="MiniLabel"
              style={index == selectedIndex ? styles.on_text : styles.off_text}>
              {title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

BottomNavigation.propTypes = {
  items: PropsType.array,
  onSelect: PropsType.func,
  selectedIndex: PropsType.number,
  style: PropsType.oneOfType([PropsType.array, PropsType.object]),
};

export default BottomNavigation;
