import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';

import {LayoutScreen} from './LayoutsScreen';
import {ComponentsScreen} from './ComponentsScreen';

import {Icon, TopNavigation, BottomNavigation} from '@components';

export default ({navigation}) => {
  const [index, setIndex] = useState(0);
  const onSelectIndex = index => setIndex(index);

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation title="Components" iconRight={<SettingsIcon />} />
      {index == 0 ? (
        <LayoutScreen navigation={navigation} />
      ) : (
        <ComponentsScreen navigation={navigation} />
      )}
      <BottomNavigation
        style={{bottom: 0}}
        items={bottomNavItem}
        selectedIndex={index}
        onSelect={onSelectIndex}
      />
    </SafeAreaView>
  );
};

const LayoutIcon = ({...props}) => {
  return <Icon name="layout" {...props} />;
};

const ComponentIcon = ({...props}) => {
  return <Icon name="star_empty" {...props} />;
};

const SettingsIcon = () => {
  return (
    <TouchableOpacity style={{position: 'absolute', right: 20}}>
      <Icon name="settings" />
    </TouchableOpacity>
  );
};

const bottomNavItem = [
  {title: 'Layouts', icon: LayoutIcon},
  {title: 'Components', icon: ComponentIcon},
];
