import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {colors} from '@styles';

import {
  AutoCompleteScreen,
  BottomNavigationScreen,
  ButtonScreen,
  ButtonGroupScreen,
  CalendarScreen,
  CardPagerScreen,
  CheckBoxScreen,
  DatepickerScreen,
  IconScreen,
  InputScreen,
  MenuScreen,
  PopoverScreen,
  RadioScreen,
  RangeDatepickerScreen,
  SpinnerScreen,
  TabBarScreen,
  TextScreen,
  ToggleScreen,
  TooltipScreen,
  TopNavigationScreen,
  ProgressScreen,
} from '../screens/ComponentsScreen';
import MainScreen from '../screens/MainScreen';
import test from '../screens/test';

const Stack = createStackNavigator();

export default function Navigation() {
  const [isActivity, setActivity] = useState(false);

  return (
    <>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          // initialRouteName="test"
          initialRouteName="MainScreen">
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="ComponentsNav" component={ComponentsNav} />
          <Stack.Screen name="test" component={test} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
const screenOption = {headerShown: false};
const MyTheme = {
  dark: false,
  colors: {
    background: colors.color_secondary_white,
  },
};

function ComponentsNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ButtonScreen"
        options={screenOption}
        component={ButtonScreen}
      />
      <Stack.Screen
        name="InputScreen"
        options={screenOption}
        component={InputScreen}
      />
      <Stack.Screen
        name="TextScreen"
        options={screenOption}
        component={TextScreen}
      />
      <Stack.Screen
        name="BottomNavigationScreen"
        component={BottomNavigationScreen}
        options={screenOption}
      />
      <Stack.Screen
        name="ButtonGroupScreen"
        options={screenOption}
        component={ButtonGroupScreen}
      />
      <Stack.Screen
        name="CalendarScreen"
        options={screenOption}
        component={CalendarScreen}
      />
      <Stack.Screen
        name="CheckBoxScreen"
        options={screenOption}
        component={CheckBoxScreen}
      />
      <Stack.Screen
        name="RadioScreen"
        options={screenOption}
        component={RadioScreen}
      />
      <Stack.Screen
        name="AutoCompleteScreen"
        options={screenOption}
        component={AutoCompleteScreen}
      />
      <Stack.Screen
        name="CardPagerScreen"
        options={screenOption}
        component={CardPagerScreen}
      />
      <Stack.Screen
        name="RangeDatepickerScreen"
        component={RangeDatepickerScreen}
        options={screenOption}
      />
      <Stack.Screen
        name="SpinnerScreen"
        options={screenOption}
        component={SpinnerScreen}
      />
      <Stack.Screen
        name="DatepickerScreen"
        options={screenOption}
        component={DatepickerScreen}
      />
      <Stack.Screen
        name="ToggleScreen"
        options={screenOption}
        component={ToggleScreen}
      />
      <Stack.Screen
        name="TopNavigationScreen"
        component={TopNavigationScreen}
        options={screenOption}
      />
      <Stack.Screen
        name="MenuScreen"
        options={screenOption}
        component={MenuScreen}
      />
      <Stack.Screen
        name="TabBarScreen"
        options={screenOption}
        component={TabBarScreen}
      />
      <Stack.Screen
        name="PopoverScreen"
        options={screenOption}
        component={PopoverScreen}
      />
      <Stack.Screen
        name="IconScreen"
        options={screenOption}
        component={IconScreen}
      />
      <Stack.Screen
        name="TooltipScreen"
        options={screenOption}
        component={TooltipScreen}
      />
      <Stack.Screen
        name="ProgressScreen"
        options={screenOption}
        component={ProgressScreen}
      />
    </Stack.Navigator>
  );
}
