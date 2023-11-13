import React, {useState} from 'react';
import {ScrollView, View, TouchableOpacity, Image} from 'react-native';

import styles from './styles';

import {Text, Icon} from '@components';

import {fontColors} from '@styles';

export default ({navigation}) => {
  const [autocompleteDisabled] = useState(false);
  const [bottomNavigationDisabled] = useState(false);
  const [buttonDisabled] = useState(false);
  const [buttonGroupDisabled] = useState(false);
  const [calendarDisabled] = useState(false);
  const [checkBoxDisabled] = useState(false);
  const [datepickerDisabled] = useState(false);
  const [iconDisabled] = useState(false);
  const [inputDisabled] = useState(false);
  const [menuDisabled] = useState(false);
  const [popOverDisabled] = useState(false);
  const [rangeDatePickerDisabled] = useState(false);
  const [radioDisabled] = useState(false);
  const [spinnerDisabled] = useState(false);
  const [tabBarDisabled] = useState(false);
  const [textDisabled] = useState(false);
  const [toggleDisabled] = useState(false);
  const [tooltipDisabled] = useState(false);
  const [topNavigationDisabled] = useState(false);
  const [cardPagerDisabled] = useState(false);
  const [progressDisabled] = useState(false);

  const autocompleteIcon = autocompleteDisabled
    ? require('@image/icon_autocomplete_disabled.png')
    : require('@image/icon_autocomplete_default.png');
  const bottomNavigationIcon = bottomNavigationDisabled
    ? require('@image/icon_bottom_navigation_disabled.png')
    : require('@image/icon_bottom_navigation_default.png');
  const buttonIcon = buttonDisabled
    ? require('@image/icon_button_disabled.png')
    : require('@image/icon_button_default.png');
  const buttonGroupIcon = buttonGroupDisabled
    ? require('@image/icon_button_group_disabled.png')
    : require('@image/icon_button_group_default.png');
  const calendarIcon = calendarDisabled
    ? require('@image/icon_calendar_disabled.png')
    : require('@image/icon_calendar_default.png');
  const checkBoxIcon = checkBoxDisabled
    ? require('@image/icon_checkbox_disabled.png')
    : require('@image/icon_checkbox_default.png');
  const datepickerIcon = datepickerDisabled
    ? require('@image/icon_datepicker_disabled.png')
    : require('@image/icon_datepicker_default.png');
  const iconIcon = iconDisabled
    ? require('@image/icon_icon_disabled.png')
    : require('@image/icon_icon_default.png');
  const inputIcon = inputDisabled
    ? require('@image/icon_input_disabled.png')
    : require('@image/icon_input_default.png');
  const menuIcon = menuDisabled
    ? require('@image/icon_menu_disabled.png')
    : require('@image/icon_menu_default.png');
  const popOverIcon = popOverDisabled
    ? require('@image/icon_popover_disabled.png')
    : require('@image/icon_popover_default.png');
  const radioIcon = radioDisabled
    ? require('@image/icon_radio_disabled.png')
    : require('@image/icon_radio_default.png');
  const rangeDatePickerIcon = rangeDatePickerDisabled
    ? require('@image/icon_rangedatepicker_disabled.png')
    : require('@image/icon_rangedatepicker_default.png');
  const spinnerIcon = spinnerDisabled
    ? require('@image/icon_spinner_disabled.png')
    : require('@image/icon_spinner_default.png');
  const tabBarIcon = tabBarDisabled
    ? require('@image/icon_tabbar_disabled.png')
    : require('@image/icon_tabbar_default.png');
  const textIcon = textDisabled
    ? require('@image/icon_text_disabled.png')
    : require('@image/icon_text_default.png');
  const toggleIcon = toggleDisabled
    ? require('@image/icon_toggle_disabled.png')
    : require('@image/icon_toggle_default.png');
  const tooltipIcon = tooltipDisabled
    ? require('@image/icon_tooltip_disabled.png')
    : require('@image/icon_tooltip_default.png');
  const topNavigationIcon = topNavigationDisabled
    ? require('@image/icon_topnavigation_disabled.png')
    : require('@image/icon_topnavigation_default.png');
  const cardPagerIcon = cardPagerDisabled
    ? require('@image/icon_cardpager_disabled.png')
    : require('@image/icon_cardpager_default.png');
  const progressIcon = progressDisabled
    ? require('@image/icon_progress_disabled.png')
    : require('@image/icon_progress_default.png');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.item_container}>
        <RenderAutoComplete
          navigation={navigation}
          imageSource={autocompleteIcon}
        />
        <RenderBottomNavigation
          navigation={navigation}
          imageSource={bottomNavigationIcon}
        />
      </View>

      <View style={styles.item_container}>
        <RenderButton navigation={navigation} imageSource={buttonIcon} />
        <RenderButtonGroup
          navigation={navigation}
          imageSource={buttonGroupIcon}
        />
      </View>

      <View style={styles.item_container}>
        <RenderCalendar navigation={navigation} imageSource={calendarIcon} />
        <RenderCardPager navigation={navigation} imageSource={cardPagerIcon} />
      </View>

      <View style={styles.item_container}>
        <RenderCheckBox navigation={navigation} imageSource={checkBoxIcon} />
        <RenderDatepicker
          navigation={navigation}
          imageSource={datepickerIcon}
        />
      </View>

      <View style={styles.item_container}>
        <RenderIcon navigation={navigation} imageSource={iconIcon} />
        <RenderInput navigation={navigation} imageSource={inputIcon} />
      </View>

      <View style={styles.item_container}>
        <RenderMenu navigation={navigation} imageSource={menuIcon} />
        <RenderPopover navigation={navigation} imageSource={popOverIcon} />
      </View>

      <View style={styles.item_container}>
        <RenderProgress navigation={navigation} imageSource={progressIcon} />
        <RenderRadio navigation={navigation} imageSource={radioIcon} />
      </View>

      <View style={styles.item_container}>
        <RenderSpinner navigation={navigation} imageSource={spinnerIcon} />
        <RenderTabBar navigation={navigation} imageSource={tabBarIcon} />
      </View>

      <View style={styles.item_container}>
        <RenderText navigation={navigation} imageSource={textIcon} />
        <RenderToggle navigation={navigation} imageSource={toggleIcon} />
      </View>

      <View style={styles.item_container}>
        <RenderTopNavigation
          navigation={navigation}
          imageSource={topNavigationIcon}
        />
        <RenderTooltip navigation={navigation} imageSource={tooltipIcon} />
      </View>
    </ScrollView>
  );
};

const CategoryItem = ({
  imageSource,
  name,
  marginStyle,
  disable,
  style,
  ...props
}) => {
  return (
    <TouchableOpacity
      disabled={disable}
      style={[styles.category_container, marginStyle, style]}
      {...props}>
      <Image style={styles.icon_base} source={imageSource} />
      <Text
        category="Label"
        style={{
          color: disable ? fontColors.color_gray : fontColors.color_darkgray,
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const RenderAutoComplete = ({navigation, imageSource}) => {
  return (
    <CategoryItem
      imageSource={imageSource}
      marginStyle={styles.margin_end}
      name="Autocomplete"
      disable={false}
      onPress={() =>
        navigation.navigate('ComponentsNav', {screen: 'AutoCompleteScreen'})
      }
    />
  );
};

const RenderBottomNavigation = ({navigation, imageSource}) => {
  return (
    <CategoryItem
      imageSource={imageSource}
      name="BottomNavigation"
      disable={false}
      onPress={() =>
        navigation.navigate('ComponentsNav', {screen: 'BottomNavigationScreen'})
      }
    />
  );
};

const RenderButton = ({navigation, imageSource}) => {
  return (
    <CategoryItem
      imageSource={imageSource}
      marginStyle={styles.margin_end}
      name="Button"
      disable={false}
      onPress={() =>
        navigation.navigate('ComponentsNav', {screen: 'ButtonScreen'})
      }
    />
  );
};

const RenderButtonGroup = ({navigation, imageSource}) => {
  return (
    <CategoryItem
      imageSource={imageSource}
      name="ButtonGroup"
      disable={false}
      onPress={() =>
        navigation.navigate('ComponentsNav', {screen: 'ButtonGroupScreen'})
      }
    />
  );
};

const RenderCalendar = ({navigation, imageSource}) => {
  return (
    <CategoryItem
      imageSource={imageSource}
      marginStyle={styles.margin_end}
      name="Calendar"
      disable={false}
      onPress={() =>
        navigation.navigate('ComponentsNav', {screen: 'CalendarScreen'})
      }
    />
  );
};

const RenderCardPager = ({navigation, imageSource}) => {
  return (
    <CategoryItem
      imageSource={imageSource}
      name="CardPager"
      disable={false}
      onPress={() =>
        navigation.navigate('ComponentsNav', {screen: 'CardPagerScreen'})
      }
    />
  );
};

const RenderCheckBox = ({navigation, imageSource}) => {
  return (
    <CategoryItem
      imageSource={imageSource}
      marginStyle={styles.margin_end}
      name="CheckBox"
      disable={false}
      onPress={() =>
        navigation.navigate('ComponentsNav', {screen: 'CheckBoxScreen'})
      }
    />
  );
};

const RenderDatepicker = ({navigation, imageSource}) => {
  return (
    <CategoryItem
      imageSource={imageSource}
      name="Datepicker"
      disable={false}
      onPress={() =>
        navigation.navigate('ComponentsNav', {screen: 'DatepickerScreen'})
      }
    />
  );
};

const RenderIcon = ({navigation, imageSource}) => {
  return (
    <CategoryItem
      imageSource={imageSource}
      name="Icon"
      marginStyle={styles.margin_end}
      disable={false}
      onPress={() =>
        navigation.navigate('ComponentsNav', {screen: 'IconScreen'})
      }
    />
  );
};

const RenderInput = ({navigation, imageSource}) => {
  return (
    <CategoryItem
      imageSource={imageSource}
      name="Input"
      disable={false}
      onPress={() =>
        navigation.navigate('ComponentsNav', {screen: 'InputScreen'})
      }
    />
  );
};

const RenderMenu = ({navigation, imageSource}) => {
  return (
    <CategoryItem
      imageSource={imageSource}
      marginStyle={styles.margin_end}
      name="Menu"
      disable={false}
      onPress={() =>
        navigation.navigate('ComponentsNav', {screen: 'MenuScreen'})
      }
    />
  );
};

const RenderPopover = ({navigation, imageSource}) => {
  return (
    <CategoryItem
      imageSource={imageSource}
      name="Popover"
      disable={false}
      onPress={() =>
        navigation.navigate('ComponentsNav', {screen: 'PopoverScreen'})
      }
    />
  );
};

const RenderProgress = ({navigation, imageSource}) => {
  return (
    <CategoryItem
      imageSource={imageSource}
      marginStyle={styles.margin_end}
      name="Progress"
      disable={false}
      onPress={() =>
        navigation.navigate('ComponentsNav', {screen: 'ProgressScreen'})
      }
    />
  );
};

const RenderRadio = ({navigation, imageSource}) => {
  return (
    <CategoryItem
      imageSource={imageSource}
      name="Radio"
      disable={false}
      onPress={() =>
        navigation.navigate('ComponentsNav', {screen: 'RadioScreen'})
      }
    />
  );
};

const RenderRangeDatepicker = ({navigation, imageSource}) => {
  return (
    <CategoryItem
      imageSource={imageSource}
      marginStyle={styles.margin_end}
      name="RangeDatepicker"
      disable={false}
      onPress={() =>
        navigation.navigate('ComponentsNav', {screen: 'RangeDatepickerScreen'})
      }
    />
  );
};

const RenderSpinner = ({navigation, imageSource}) => {
  return (
    <CategoryItem
      imageSource={imageSource}
      marginStyle={styles.margin_end}
      name="Spinner"
      disable={false}
      onPress={() =>
        navigation.navigate('ComponentsNav', {screen: 'SpinnerScreen'})
      }
    />
  );
};

const RenderTabBar = ({navigation, imageSource}) => {
  return (
    <CategoryItem
      imageSource={imageSource}
      name="TabBar"
      disable={false}
      onPress={() =>
        navigation.navigate('ComponentsNav', {screen: 'TabBarScreen'})
      }
    />
  );
};

const RenderText = ({navigation, imageSource}) => {
  return (
    <CategoryItem
      imageSource={imageSource}
      marginStyle={styles.margin_end}
      name="Text"
      onPress={() =>
        navigation.navigate('ComponentsNav', {screen: 'TextScreen'})
      }
    />
  );
};

const RenderToggle = ({navigation, imageSource}) => {
  return (
    <CategoryItem
      imageSource={imageSource}
      name="Toggle"
      disable={false}
      onPress={() =>
        navigation.navigate('ComponentsNav', {screen: 'ToggleScreen'})
      }
    />
  );
};

const RenderTopNavigation = ({navigation, imageSource}) => {
  return (
    <CategoryItem
      imageSource={imageSource}
      name="TopNavigation"
      disable={false}
      marginStyle={styles.margin_end}
      onPress={() =>
        navigation.navigate('ComponentsNav', {screen: 'TopNavigationScreen'})
      }
    />
  );
};

const RenderTooltip = ({navigation, imageSource}) => {
  return (
    <CategoryItem
      imageSource={imageSource}
      name="Tooltip"
      disable={false}
      onPress={() =>
        navigation.navigate('ComponentsNav', {screen: 'TooltipScreen'})
      }
    />
  );
};
