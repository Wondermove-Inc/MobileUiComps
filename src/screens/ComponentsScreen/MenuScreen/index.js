import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './styles';
import {Text, Header, Menu, Icon} from '@components';

const MenuScreen = ({navigation}) => {
  const [defaultIndex, setDefaultIndex] = useState(null);
  const [iconIndex, setIconIndex] = useState(null);

  const defaultItems = [{title: 'Item'}, {title: 'Item'}, {title: 'Item'}];

  const iconItems = [
    {title: 'Item', iconLeft: RenderHeart},
    {title: 'Item', iconLeft: RenderHeart},
    {title: 'Item', iconLeft: RenderHeart},
  ];

  const disabeldItems = [
    {title: 'Item', iconLeft: RenderHeart, disabled: true},
    {title: 'Item', iconLeft: RenderHeart, disabled: true},
    {title: 'Item', iconLeft: RenderHeart, disabled: true},
  ];

  const handleSelect = index => {
    setDefaultIndex(index);
  };

  const handleIconSelect = index => {
    setIconIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Menu" />
      <Text category="H3" style={{margin: 20}}>
        Default
      </Text>

      <View style={styles.item_container}>
        <Text style={{flex: 5}} category="MiniLabel">
          Default
        </Text>
        <Menu
          style={{flex: 5}}
          items={defaultItems}
          onSelect={handleSelect}
          selectedIndex={defaultIndex}
        />
      </View>

      <View style={styles.item_container}>
        <Text style={{flex: 5}} category="MiniLabel">
          Icon
        </Text>
        <Menu
          style={{flex: 5}}
          items={iconItems}
          onSelect={handleIconSelect}
          selectedIndex={iconIndex}
        />
      </View>

      <View style={styles.item_container}>
        <Text style={{flex: 5}} category="MiniLabel">
          Disabled item
        </Text>
        <Menu style={{flex: 5}} items={disabeldItems} />
      </View>
    </SafeAreaView>
  );
};

const RenderHeart = props => {
  return <Icon name="heart_fill" {...props} />;
};

export default MenuScreen;
