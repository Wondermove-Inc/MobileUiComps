import React, {useState} from 'react';
import PropsType from 'prop-types';
import {View, Dimensions, Keyboard} from 'react-native';
import {Input, Calendar} from '@components';
import {getToday} from '@utils';

/**
 * @param {string} label
 * @param {string} iconRight
 * @param {string} placeholder
 * @param {Function} onDatePress
 * @param {string} markedDate
 * @param {Object, Object[]} style
 */

const Datepicker = props => {
  const {label, iconRight, placeholder, onDatePress, markedDate, style} = props;
  const [showCalendar, setShowCalendar] = useState(false);

  const calendarWidth = Dimensions.get('window').width;

  const handleDatePress = day => {
    onDatePress && onDatePress(day);
    Keyboard.dismiss();
  };

  const handleFocus = () => {
    setShowCalendar(true);
  };

  const handleBlur = () => {
    setShowCalendar(false);
  };

  return (
    <View>
      <Input
        inputStyle={{minWidth: 200}}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={markedDate}
        showSoftInputOnFocus={false}
        selectionColor="transparent"
        contextMenuHidden={true}
        iconRight={iconRight}
        placeholder={placeholder}
        label={label}
      />

      {showCalendar && (
        <View>
          <Calendar
            style={{position: 'absolute', width: calendarWidth - 40, right: 0}}
            today={getToday()}
            onDatePress={handleDatePress}
            markedDate={markedDate}
          />
        </View>
      )}
    </View>
  );
};

Datepicker.propTypes = {
  label: PropsType.string,
  iconRight: PropsType.string,
  placeholder: PropsType.string,
  onDatePress: PropsType.func,
  markedDate: PropsType.string,
  style: PropsType.oneOfType([PropsType.object, PropsType.array]),
};

export default Datepicker;
