import React from 'react';
import {SafeAreaView} from 'react-native';
import {Header, Text, Progress} from '@components';

export default ({navigation}) => {
  return (
    <SafeAreaView>
      <Header title="Progress" navigation={navigation} />
      <Text style={{margin: 20}} category="H3">
        Default
      </Text>

      <Text style={{marginStart: 20, marginBottom: 20}} category="MiniLabel">
        Default
      </Text>
      <Progress
        style={{marginHorizontal: 20}}
        userValue={1383}
        userTime="23h 03m"
        dealerValue={1506}
        dealerTime="1d 01h 06m"
        headerText="30 days"
      />

      <Text style={{marginStart: 20, marginVertical: 20}} category="MiniLabel">
        Danger
      </Text>
      <Progress
        style={{marginHorizontal: 20}}
        userValue={1563}
        userTime="1d 02h 03m"
        dealerValue={1506}
        dealerTime="1d 01h 06m"
        headerText="30 days"
      />
    </SafeAreaView>
  );
};
