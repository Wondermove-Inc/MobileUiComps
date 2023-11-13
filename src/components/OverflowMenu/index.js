import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import styles from './styles';

import {Text} from '@components';

export default ({style, anchor, visible, menuItem, onSelect}) => {
  return (
    <View style={style}>
      {anchor != null && anchor}

      <View>
        <View style={styles.menu_container}>
          {visible &&
            menuItem != null &&
            menuItem.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    onSelect != null && onSelect(item, index);
                  }}
                  style={[
                    styles.item_base,
                    index != 0 &&
                      index != menuItem.length - 1 &&
                      styles.other_item,
                  ]}
                  disabled={item.disabled != null && item.disabled}>
                  {item.accessoryLeft != null && (
                    <item.accessoryLeft
                      style={[
                        styles.icon_style,
                        item.disabled
                          ? styles.icon_disabled_on
                          : styles.icon_disabled_off,
                      ]}
                    />
                  )}
                  <Text
                    style={item.disabled && styles.text_disabled_on}
                    category="B2">
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </View>
    </View>
  );
};
