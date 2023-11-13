import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import styles from './styles';

import {Text, Divider, Header, AutoComplete, Icon} from '@components';

import {autocompleteFilter, checkIOS} from '@utils';
import {colors} from '@styles';

const RenderHeart = () => {
  return (
    <Icon
      style={{tintColor: colors.color_primary_blue, marginRight: 10}}
      name="heart_fill"
    />
  );
};

const defaultData = [
  {title: 'Text 1'},
  {title: 'Text 2'},
  {title: 'Text 3'},
  {title: 'Text 4'},
  {title: 'Text 5'},
  {title: 'Text 6'},
];

const accessoriesData = [
  {title: 'Text 1', iconLeft: RenderHeart},
  {title: 'Text 2', iconLeft: RenderHeart},
  {title: 'Text 3', iconLeft: RenderHeart},
  {title: 'Text 4', iconLeft: RenderHeart},
  {title: 'Text 5', iconLeft: RenderHeart},
  {title: 'Text 6', iconLeft: RenderHeart},
];

export default ({navigation}) => {
  const [defaultText, setDefaultText] = useState('');
  const [accessoriesText, setAccessoriesText] = useState('');

  const [defaultAutoCompleteData, setDefaultAutoCompleteData] = useState();
  const [accessoriesAutoCompleteData, setAccessoriesAutoCompleteData] =
    useState();

  const defaultOnSelect = item => {
    setDefaultText(item.title);
    setDefaultAutoCompleteData(autocompleteFilter(defaultData, item));
  };

  const defaultOnChangeText = text => {
    setDefaultText(text);
    setDefaultAutoCompleteData(autocompleteFilter(defaultData, text));
  };

  const accessoriesOnSelect = item => {
    setAccessoriesText(item.title);
    setAccessoriesAutoCompleteData(autocompleteFilter(accessoriesData, item));
  };

  const accessoriesOnChangeText = text => {
    setAccessoriesText(text);
    setAccessoriesAutoCompleteData(autocompleteFilter(accessoriesData, text));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Autocomplete" />
      <ScrollView
        contentContainerStyle={{flex: 1}}
        keyboardShouldPersistTaps="handled">
        <Text style={{margin: 20}} category="H3">
          Default
        </Text>
        <AutoComplete
          style={[
            styles.autocomplete_default_style,
            checkIOS() && {zIndex: 10},
          ]}
          data={defaultText.length < 1 ? defaultData : defaultAutoCompleteData}
          onSelect={defaultOnSelect}
          value={defaultText}
          onChangeText={defaultOnChangeText}
          placeholder="Placeholder"
        />
        <Divider />

        <Text style={{margin: 20}} category="H3">
          Accessories
        </Text>
        <AutoComplete
          style={[
            styles.autocomplete_accessories_style,
            checkIOS() && {zIndex: 9},
          ]}
          data={
            accessoriesText.length < 1
              ? accessoriesData
              : accessoriesAutoCompleteData
          }
          onSelect={accessoriesOnSelect}
          value={accessoriesText}
          onChangeText={accessoriesOnChangeText}
          placeholder="Placeholder"
        />
      </ScrollView>
    </SafeAreaView>
  );
};
