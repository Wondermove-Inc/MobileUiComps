import React, {useState} from 'react';
import {View, Dimensions} from 'react-native';

import {Input, Calendar} from '@components';

import {colors} from '@styles';
import {getToday} from '@utils';
import moment from 'moment';

export default ({containerStyle, onDatePress, ...props}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [rangeValue, setRangeValue] = useState([]);
  const [rangeMark, setRangeMark] = useState([]);
  const calendarWidth = Dimensions.get('window').width;

  const today = getToday();

  const dayRange = item => {
    setRangeValue(item);
    setRangeMark(item);
    onDatePress != null && onDatePress(item);
    console.log(item);
  };

  const textValue =
    rangeValue.length > 0
      ? rangeValue[0] === rangeValue[rangeValue.length - 1]
        ? `${rangeValue[0]}`
        : `${rangeValue[0]} ~ ${rangeValue[rangeValue.length - 1]}`
      : '';

  return (
    <View style={containerStyle}>
      <Input
        inputContainerStyle={{minWidth: 200}}
        onFocus={() => setShowCalendar(true)}
        onBlur={() => setShowCalendar(false)}
        value={textValue}
        showSoftInputOnFocus={false}
        selectTextOnFocus={false}
        selectionColor={colors.color_secondary_white}
        contextMenuHidden={true}
        // selectionColor="transparent"
        {...props}
      />
      {showCalendar && (
        <View>
          <Calendar
            style={{position: 'absolute', width: calendarWidth - 40, right: 0}}
            today={today}
            markedDate={rangeMark}
            dateRange={dayRange}
            rangeCalendar={true}
          />
        </View>
      )}
    </View>
  );
};
