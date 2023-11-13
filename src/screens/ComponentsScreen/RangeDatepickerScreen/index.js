import React from 'react';
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from 'react-native';

import styles from './styles';

import {Header, Text, RangeDatepicker} from '@components';

export default ({navigation}) => {
  const onPressKeyboardDismiss = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={onPressKeyboardDismiss}>
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} title="RangeDatepicker" />
        <Text style={{margin: 20}} category="H3">
          Default
        </Text>
        <View style={styles.item_container1}>
          <Text style={{flex: 3}} category="MiniLabel">
            Default
          </Text>
          <RangeDatepicker
            containerStyle={{flex: 7}}
            placeholder="dd/mm/yyyy"
          />
        </View>
        <Text style={{margin: 20}} category="H3">
          Accessories
        </Text>
        <View style={styles.item_container2}>
          <Text style={{flex: 3}} category="MiniLabel">
            Icon
          </Text>
          <RangeDatepicker
            containerStyle={{flex: 7}}
            placeholder="dd/mm/yyyy"
            accessoryRight="calendar"
          />
        </View>
        <View style={[styles.item_container3, {marginTop: 20}]}>
          <Text style={{flex: 3}} category="MiniLabel">
            Label
          </Text>
          <RangeDatepicker
            containerStyle={{flex: 7}}
            placeholder="dd/mm/yyyy"
            label="Date"
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
