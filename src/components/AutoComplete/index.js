import React, {useState} from 'react';
import {View, TouchableOpacity, Keyboard, ScrollView} from 'react-native';
import PropsType from 'prop-types';
import styles from './styles';
import {Input, Text} from '@components';
import {checkIOS} from '@utils';

/**
 * Render a AutoComplete
 * @param {Object[]} data - Set the data object to be used by autocomplete. ex) [{title:"Text 1",accessoryLeft:Icon}]
 * @param {Function} onSelect - Set a function when you click a list item. ex) onSelect={({item,index})=> function(item,index)}
 * @param {string} value - Set the text inside the input box.
 * @param {Function} onChangeText - Set a function when you typing in input ex) onChangeText={text => function(text)}
 * @param {string} iconRight - Place the icon inside the input box.
 * @param {Object, Object[]} style - Customize the style
 * @param {string} placeholder - Typing placeholder text in input
 */

const AutoComplete = props => {
  const {data, onSelect, value, onChangeText, iconRight, style, placeholder} =
    props;
  const [showList, setShowList] = useState(false);

  const AutocompleteList = ({item, index}) => {
    const {title, iconLeft} = item;

    const handlePress = () => {
      onSelect(item, index);
      setShowList(false);
      Keyboard.dismiss();
    };

    return (
      <TouchableOpacity
        style={styles.item_container}
        key={index}
        onPress={handlePress}>
        {iconLeft && <item.iconLeft />}
        <Text category="B2" style={styles.item_text}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={style}>
      <Input
        onFocus={() => setShowList(true)}
        onBlur={() => setShowList(false)}
        value={value}
        onChangeText={onChangeText}
        iconRight={iconRight}
        placeholder={placeholder}
      />

      <View>
        {Array.isArray(data) && data.length !== 0 && showList && (
          <ScrollView
            style={[styles.list_container, !checkIOS() && {zIndex: 1}]}
            contentContainerStyle={{
              flex: 1,
              flexGrow: 1,
              paddingBottom: 16,
            }}
            keyboardShouldPersistTaps="always"
            nestedScrollEnabled={true}>
            {data.map((item, index) => {
              return <AutocompleteList key={index} item={item} index={index} />;
            })}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

AutoComplete.propTypes = {
  data: PropsType.array,
  onSelect: PropsType.func,
  value: PropsType.string,
  onChangeText: PropsType.func,
  iconRight: PropsType.string,
  style: PropsType.oneOfType([PropsType.object, PropsType.array]),
  placeholder: PropsType.string,
};

AutoComplete.defaultProps = {
  onSelect: null,
  iconRight: null,
};

export default AutoComplete;
