import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon, TopNavigation} from '@components';

const Header = ({navigation, title}) => {
  return (
    <TopNavigation
      title={title}
      iconLeft={<RenderBackButton navigation={navigation} />}
    />
  );
};

export default Header;

const RenderBackButton = ({navigation}) => {
  return (
    <TouchableOpacity style={{zIndex: 1}} onPress={() => navigation.goBack()}>
      <Icon name="arrow_left" />
    </TouchableOpacity>
  );
};
