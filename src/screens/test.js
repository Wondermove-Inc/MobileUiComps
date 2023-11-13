import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { colors, fontColors } from '@styles';
import { Divider, Icon, Text } from '@components';
import moment from 'moment';
import { getCalenderTitle } from '@utils';

const holiday = [{}];

export default () => {
  const [defaultCurrentMonth, setMonth] = useState(moment().month());
  const [defaultCurrentYear, setYear] = useState(moment().year());
  const [rangeCurrentMonth, setRangeMonth] = useState(moment().month());
  const [rangeCurrentYear, setRangeYear] = useState(moment().year());
  const [yearListYear, setYearListYear] = useState(moment().year());
  const [monthListMonth, setMonthListMonth] = useState(moment().month());
  const [mark, setMark] = useState();
  const [rangeMark, setRangeMark] = useState([]);
  const [currentYear, setCurrentYear] = useState();
  const [currentMonth, setCurrentMonth] = useState(defaultCurrentMonth);

  const onRightPress = () => {
    if (defaultCurrentMonth === 11) {
      setYear(defaultCurrentYear + 1);
      setMonth(0);
    } else {
      setMonth(defaultCurrentMonth + 1);
    }
  };

  const onLeftPress = () => {
    if (defaultCurrentMonth === 0) {
      setYear(defaultCurrentYear - 1);
      setMonth(11);
    } else {
      setMonth(defaultCurrentMonth - 1);
    }
  };

  const onRangeRightPress = () => {
    if (rangeCurrentMonth === 11) {
      setRangeYear(rangeCurrentYear + 1);
      setRangeMonth(0);
    } else {
      setRangeMonth(rangeCurrentMonth + 1);
    }
  };

  const onRangeLeftPress = () => {
    if (rangeCurrentMonth === 0) {
      setRangeYear(rangeCurrentYear - 1);
      setRangeMonth(11);
    } else {
      setRangeMonth(rangeCurrentMonth - 1);
    }
  };

  const onPress = (item) => {
    if (item.month !== defaultCurrentMonth) {
      setMonth(item.month);
      setYear(item.year);
    }
    setMark(item.dateString);
  };

  const onRangePress = (item) => {
    if (item.month !== rangeCurrentMonth) {
      setRangeMonth(item.month);
      setRangeYear(item.year);
    }
  };

  const onSelectYear = (item) => setCurrentYear(item);
  const dateRange = (item) => setRangeMark(item);

  const onSelectMonth = (item, year) => setCurrentMonth(item.month);

  const today = moment().clone().format('YYYY-MM-DD');

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 100,
      }}>
      <Calendar
        month={defaultCurrentMonth}
        year={defaultCurrentYear}
        onLeftPress={onLeftPress}
        onRightPress={onRightPress}
        onDatePress={onPress}
        markedDate={mark}
        today={today}
      />
      <Calendar
        month={rangeCurrentMonth}
        year={rangeCurrentYear}
        onLeftPress={onRangeLeftPress}
        onRightPress={onRangeRightPress}
        onDatePress={onRangePress}
        markedDate={rangeMark}
        rangeCalendar={true}
        today={today}
        dateRange={dateRange}
      />
      <YearList year={yearListYear} onSelectItem={onSelectYear} selected={currentYear} />
      <MonthList
        currentYear={yearListYear}
        onSelectItem={onSelectMonth}
        currentMonth={currentMonth}
      />
    </ScrollView>
  );
};

const Calendar = ({
  month,
  year,
  onLeftPress,
  onRightPress,
  onDatePress,
  markedDate,
  today,
  rangeCalendar,
  dateRange,
}) => {
  const [startDate, setStartDate] = useState();
  const [isSelectStart, setSelectStart] = useState(false);
  const [isSelectEnd, setSelectEnd] = useState(false);

  const isRange = rangeCalendar;
  const onDayPress = (day) => {
    if (isRange) {
      if (!isSelectStart || (isSelectStart && isSelectEnd)) {
        setStartDate(day.dateString);
        setSelectStart(true);
        setSelectEnd(false);
        dateRange([day.dateString]);
        onDatePress != null && onDatePress(day);
      } else if (!isSelectEnd) {
        setSelectEnd(true);
        setRangeMarked(day);
        onDatePress != null && onDatePress(day);
      }
    } else {
      onDatePress != null && onDatePress(day);
    }
  };

  const setRangeMarked = (date) => {
    const start = moment(startDate, 'YYYY-MM-DD').clone();
    const end = moment(date.dateString, 'YYYY-MM-DD').clone();

    let duration = start.diff(end, 'days');

    let durationArray = [startDate];

    if (duration < 0) {
      for (let i = duration; i < 0; i++) {
        let markDate = start.add(1, 'days').format('YYYY-MM-DD');
        durationArray.push(markDate);
      }
      dateRange(durationArray);
    }
  };

  const onHeaderPress = () => console.log('header');
  const headTitle = getCalenderTitle(month, year);

  return (
    <View style={styles.calendar_container}>
      <CalendarHeader
        onLeftPress={onLeftPress}
        onRightPress={onRightPress}
        onHeaderPress={onHeaderPress}
        title={headTitle}
      />
      <Divider />
      <DayName />
      <CalendarWeek
        month={month}
        year={year}
        onDatePress={onDayPress}
        markedDate={markedDate}
        today={today}
        dateRange={dateRange}
        rangeCalendar={rangeCalendar}
      />
    </View>
  );
};

const CalendarHeader = ({ onLeftPress, onRightPress, onHeaderPress, title }) => {
  return (
    <View
      style={{
        minHeight: 51,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
      }}>
      <LeftIcon onPress={onLeftPress} />
      <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center' }}
        onPress={onHeaderPress}>
        <Text style={{ minWidth: 35, marginRight: 10 }} category="Label">
          {title}
        </Text>
        <Icon name="arrow_down" />
      </TouchableOpacity>
      <RightIcon onPress={onRightPress} />
    </View>
  );
};

const LeftIcon = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="arrow_left" />
    </TouchableOpacity>
  );
};

const RightIcon = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="arrow_right" />
    </TouchableOpacity>
  );
};

const CalendarText = ({ children, category, style, backgroundStyle, ...props }) => {
  return (
    <TouchableOpacity
      style={[
        { flex: 1, minHeight: 15, alignItems: 'center', justifyContent: 'center' },
        backgroundStyle,
      ]}
      {...props}>
      <Text category={category} style={style}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const DayName = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 20,
      }}>
      <DayNameText>Mon</DayNameText>
      <DayNameText>Tue</DayNameText>
      <DayNameText>Wed</DayNameText>
      <DayNameText>Thu</DayNameText>
      <DayNameText>Fri</DayNameText>
      <DayNameText style={{ color: fontColors.color_primary_blue }}>Sat</DayNameText>
      <DayNameText style={{ color: colors.color_secondary_active_red }}>Sun</DayNameText>
    </View>
  );
};

const DayNameText = ({ children, backgroundStyle, ...props }) => {
  return (
    <CalendarText backgroundStyle={backgroundStyle} disabled category="MiniLabel" {...props}>
      {children}
    </CalendarText>
  );
};

const DateNumberText = ({ children, ...props }) => {
  return (
    <CalendarText category="B2" {...props}>
      {children}
    </CalendarText>
  );
};

const CalendarWeek = ({
  month,
  year,
  onDatePress,
  markedDate,
  today,
  dateRange,
  rangeCalendar,
}) => {
  const _moment = moment().month(month).year(year);
  const startDay = _moment.clone().startOf('month').startOf('week');
  const endDay = _moment.clone().endOf('month').endOf('week');

  let calendar = [];
  let index = startDay.clone();

  while (index.isBefore(endDay, 'day')) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => {
          return {
            date: index.add(1, 'day').date(),
            month: index.month(),
            day: index.day(),
            year: index.year(),
            dateString: index.format('YYYY-MM-DD'),
          };
        }),
    );
  }

  if (calendar[0][0].date === 2) {
    const prevWeek = [];
    let _index = startDay.subtract(1, 'w');
    const _endDay = _moment.clone().date(1);

    while (_index.isBefore(_endDay, 'day')) {
      prevWeek.push(
        Array(7)
          .fill(0)
          .map(() => {
            return {
              date: _index.add(1, 'day').date(),
              month: _index.month(),
              day: _index.day(),
              year: _index.year(),
              dateString: index.format('YYYY-MM-DD'),
            };
          }),
      );
    }
    calendar.unshift(...prevWeek);
  }

  if (calendar[4] != null && calendar[4][0].date === 1) {
    calendar.pop();
  }

  if (calendar[5] != null && calendar[5][0].date === 1) {
    calendar.pop();
  }

  return (
    <View style={{ marginTop: 12 }}>
      {calendar.map((rowItem, rowIndex) => {
        const rowContainerStyle = {
          ...styles.calendar_week_container,
          marginBottom: rowIndex === calendar.length - 1 ? 20 : 6,
        };
        return (
          <View key={rowIndex} style={rowContainerStyle}>
            {rowItem.map((dateNumber, dateIndex) => {
              const onPress = () => onDatePress != null && onDatePress(dateNumber);
              const isMarked = rangeCalendar
                ? markedDate.includes(dateNumber.dateString)
                : markedDate === dateNumber.dateString;
              const isToday = today === dateNumber.dateString;
              const numberStyle = {
                color:
                  dateNumber.month !== month
                    ? fontColors.color_gray
                    : isMarked
                    ? colors.color_secondary_white
                    : dateNumber.day === 6
                    ? fontColors.color_primary_blue
                    : dateNumber.day === 0
                    ? colors.color_secondary_active_red
                    : fontColors.color_darkgray,
              };
              const markedStyle = {
                backgroundColor: isMarked
                  ? colors.color_primary_blue
                  : isToday
                  ? colors.color_secondary_skyblue
                  : colors.color_secondary_white,
                paddingVertical: 6,
              };

              return (
                <DateNumberText
                  key={dateIndex}
                  style={numberStyle}
                  backgroundStyle={markedStyle}
                  onPress={onPress}>
                  {dateNumber.date}
                </DateNumberText>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

const YearList = ({ year, onSelectItem, selected }) => {
  const [page, setPage] = useState(0);
  const [currentYear, setCurrentYear] = useState(getYear(year, page));

  const title = `${year} - ${year}`;
  const onLeftPress = () => {
    setCurrentYear(getYear(year, page + 1));
    setPage(page + 1);
  };
  const onRightPress = () => {
    setCurrentYear(getYear(year, page - 1));
    setPage(page - 1);
  };

  return (
    <View style={styles.calendar_container}>
      <CalendarHeader title={title} onLeftPress={onLeftPress} onRightPress={onRightPress} />
      <Divider style={{ marginBottom: 20 }} />
      {currentYear.map((year, index) => {
        return (
          <View
            key={index}
            style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
            {year.map((item, index) => {
              const onPressItem = () => onSelectItem != null && onSelectItem(item);
              const isSelected = selected === item;
              return (
                <YearItem key={index} onPress={onPressItem} isSelected={isSelected}>
                  {item}
                </YearItem>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

const YearItem = ({ children, onPress, isSelected }) => {
  const backgroundStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 28,
    minWidth: 52,
    backgroundColor: isSelected ? colors.color_primary_blue : colors.color_secondary_white,
  };
  const textColor = { color: isSelected ? fontColors.color_white : fontColors.color_darkgray };
  return (
    <TouchableOpacity style={backgroundStyle} onPress={onPress}>
      <Text style={textColor} category="B2">
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const getYear = (year, page) => {
  const yearContainer = Array(4)
    .fill(0)
    .map((_, index) => {
      return [
        year - (index + 3 * index + 3) - 16 * page,
        year - (index + 3 * index + 2) - 16 * page,
        year - (index + 3 * index + 1) - 16 * page,
        year - (index + 3 * index) - 16 * page,
      ];
    });

  return yearContainer.reverse();
};

const getMonth = [
  [
    { name: 'Jan', month: '0' },
    { name: 'Feb', month: '1' },
    { name: 'Mar', month: '2' },
    { name: 'Apr', month: '3' },
  ],
  [
    { name: 'May', month: '4' },
    { name: 'Jun', month: '5' },
    { name: 'Jul', month: '6' },
    { name: 'Aug', month: '7' },
  ],
  [
    { name: 'Sep', month: '8' },
    { name: 'Oct', month: '9' },
    { name: 'Nov', month: '10' },
    { name: 'Dec', month: '11' },
  ],
];

const MonthItem = ({ onPress, item, style }) => {
  return (
    <TouchableOpacity
      style={[
        { alignItems: 'center', justifyContent: 'center', minHeight: 28, minWidth: 52 },
        style,
      ]}
      onPress={onPress}>
      <Text category="B2">{item.name}</Text>
    </TouchableOpacity>
  );
};

const MonthList = ({ currentYear, selectedMonth, currentMonth, onSelectItem }) => {
  const [year, setYear] = useState(currentYear);
  const title = `${year}`;

  const onLeftPress = () => setYear(year - 1);
  const onRightPress = () => setYear(year + 1);

  return (
    <View style={styles.calendar_container}>
      <CalendarHeader title={title} onLeftPress={onLeftPress} onRightPress={onRightPress} />
      <Divider style={{ marginBottom: 20 }} />
      {getMonth.map((row, index) => {
        return (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 20,
            }}>
            {row.map((item, index) => {
              const isCurrent = `${currentYear}-${currentMonth}` === `${year}-${item.month}`;
              const onPress = () => onSelectItem != null && onSelectItem(item, currentYear);
              const currentMonthStyle = {
                backgroundColor: isCurrent
                  ? colors.color_secondary_skyblue
                  : colors.color_secondary_white,
              };
              return (
                <MonthItem key={index} style={currentMonthStyle} item={item} onPress={onPress} />
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  calendar_container: {
    width: '100%',
    borderColor: colors.color_secondary_lightgray,
    borderWidth: 1.5,
    borderRadius: 4,
  },
  calendar_week_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});
