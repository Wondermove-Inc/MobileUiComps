import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  Platform,
} from 'react-native';

import styles from './styles';

import {colors} from '@styles';
import {Text, Input, CheckBox} from '@components';

import {checkIOS} from '@utils';

export default Select = ({
  style,
  disabled,
  placeholder,
  selectData,
  onSelect,
  selectedIndex,
  value,
  multiSelect,
  position,
  onPressIn,
}) => {
  const [isFocus, setFocus] = useState(false);
  const [isOpen, setOpen] = useState(false);

  return (
    <View style={[style]}>
      {position === 'top' && isOpen && (
        <View>
          <ScrollView
            contentContainerStyle={styles.list_inner_container}
            style={[
              styles.list_outter_container,
              !checkIOS() && {zIndex: 2},
              {top: -180},
            ]}
            keyboardShouldPersistTaps="handled"
            nestedScrollEnabled>
            {selectData != null &&
              selectData.map((item, index, array) => {
                return (
                  <RenderItem
                    key={index}
                    item={item}
                    index={index}
                    selectedIndex={selectedIndex}
                    multiSelect={multiSelect}
                    onSelect={onSelect}
                  />
                );
              })}
          </ScrollView>
        </View>
      )}
      <Input
        iconRight={isFocus ? 'arrow_up' : 'arrow_down'}
        showSoftInputOnFocus={false}
        selectTextOnFocus={false}
        contextMenuHidden={true}
        value={value}
        onFocus={() => {
          setFocus(true);
          setOpen(true);
        }}
        onBlur={() => {
          setFocus(false);
          setOpen(false);
        }}
        disabled={disabled}
        placeholder={placeholder}
        ellipsizeMode="tail"
        numberOfLines={1}
        onPressIn={onPressIn}
        caretHidden
      />

      {position === 'bottom' && isOpen && (
        <View>
          <ScrollView
            contentContainerStyle={styles.list_inner_container}
            style={[styles.list_outter_container, !checkIOS() && {zIndex: 2}]}
            keyboardShouldPersistTaps="handled"
            nestedScrollEnabled>
            {selectData != null &&
              selectData.map((item, index, array) => {
                return (
                  <RenderItem
                    key={index}
                    item={item}
                    index={index}
                    selectedIndex={selectedIndex}
                    multiSelect={multiSelect}
                    onSelect={onSelect}
                  />
                );
              })}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

Select.defaultProps = {
  position: 'bottom',
};

const RenderItem = ({item, index, selectedIndex, multiSelect, onSelect}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onSelect != null && onSelect(item, index);
        !multiSelect && Keyboard.dismiss();
      }}
      style={[
        {padding: 16, flexDirection: 'row'},
        selectedIndex != null &&
          selectedIndex == index &&
          !multiSelect &&
          styles.selected_index_container,
      ]}>
      {multiSelect && (
        <CheckBox
          style={{marginRight: 16}}
          isSelect={
            selectedIndex != null &&
            typeof selectedIndex == 'object' &&
            selectedIndex.includes(index) &&
            true
          }
          onPress={() => {
            onSelect != null && onSelect(item, index);
          }}
        />
      )}
      {item.icon != null && (
        <item.icon
          style={[
            selectedIndex != null && selectedIndex == index
              ? {tintColor: colors.color_secondary_white}
              : {tintColor: colors.color_primary_blue},
            {marginRight: 10},
          ]}
        />
      )}
      {item.title != null && (
        <Text
          style={
            selectedIndex != null &&
            selectedIndex == index &&
            !multiSelect &&
            styles.selected_index_text
          }
          category="B2">
          {item.title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
