import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import styles from './styles';

import {Text, Header, Datepicker} from '@components';

import {transformDate} from '@utils';

export default ({navigation}) => {
  const [defaultValue, setDefaulValue] = useState();
  const [iconValue, setIconValue] = useState();
  const [labelValue, setLabelValue] = useState();

  const handleDefaultDayPress = day => {
    setDefaulValue(transformDate(day));
  };

  const handleIconDayPress = day => {
    setIconValue(transformDate(day));
  };

  const handleLabelDayPress = day => {
    setLabelValue(transformDate(day));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} title="Datepicker" />
        <Text style={{margin: 20}} category="H3">
          Default
        </Text>

        {/* default */}
        <View style={styles.default_calendar_container}>
          <Text category="MiniLabel">Default</Text>
          <Datepicker
            markedDate={defaultValue}
            onDatePress={handleDefaultDayPress}
            placeholder="dd/mm/yyyy"
          />
        </View>
        <Text style={{margin: 20}} category="H3">
          Accessories
        </Text>

        {/* icon */}
        <View style={styles.icon_calendar_container}>
          <Text category="MiniLabel">Icon</Text>
          <Datepicker
            markedDate={iconValue}
            onDatePress={handleIconDayPress}
            placeholder="dd/mm/yyyy"
            iconRight="calendar"
          />
        </View>

        {/* label */}
        <View style={styles.label_calendar_container}>
          <Text category="MiniLabel">Label</Text>
          <Datepicker
            markedDate={labelValue}
            onDatePress={handleLabelDayPress}
            placeholder="dd/mm/yyyy"
            label="Date"
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
