import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import moment from 'moment';

import styles from './styles';

import {Text, Header, Calendar} from '@components';

import {getToday, getIPhoneNotchHeight} from '@utils';

export default ({navigation}) => {
  const [defaultMark, setDefaultMark] = useState();
  const [rangeMark, setRangeMark] = useState([]);

  const onDefaultPress = item => setDefaultMark(item.dateString);

  const dateRange = item => setRangeMark(item);

  const today = getToday();

  return (
    <SafeAreaView style={{flex: 1, paddingTop: getIPhoneNotchHeight()}}>
      <Header navigation={navigation} title="Calendar" />
      <ScrollView style={{flexGrow: 1}}>
        <Text style={{marginLeft: 20, marginTop: 20}} category="H3">
          Default
        </Text>
        <View style={styles.calendar_container}>
          <Calendar
            today={today}
            onDatePress={onDefaultPress}
            markedDate={defaultMark}
          />
        </View>
        <Text style={{marginLeft: 20}} category="H3">
          Range Calendar
        </Text>
        <View style={styles.calendar_container}>
          <Calendar
            markedDate={rangeMark}
            rangeCalendar={true}
            today={today}
            dateRange={dateRange}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
