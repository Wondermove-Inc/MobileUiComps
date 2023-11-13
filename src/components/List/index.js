import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';

import {Text} from '@components';
import {colors, fontColors} from '@styles';

export const List = ({data, ...props}) => {
  return <FlatList data={data} {...props} />;
};

export const ListItem = ({
  accessoryLeft,
  title,
  description,
  accessoryRight,
}) => {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
      }}
      activeOpacity={1}>
      {accessoryLeft && accessoryLeft}
      <View style={{flex: 6}}>
        <Text category="Label">{title}</Text>
        <Text category="B2" style={{color: fontColors.color_gray}}>
          {description}
        </Text>
      </View>
      {accessoryRight && accessoryRight}
    </TouchableOpacity>
  );
};
