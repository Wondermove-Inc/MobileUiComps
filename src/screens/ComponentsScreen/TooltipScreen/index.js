import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './styles';
import {colors} from '@styles';
import {Text, Header, Tooltip, Divider, Button, Icon} from '@components';

export default ({navigation}) => {
  const [defaultVisible, setDefaultVisible] = useState(false);
  const [accessoryVisible, setAccessoryVisible] = useState(false);

  const handleDefaultPress = () => {
    setDefaultVisible(!defaultVisible);
  };

  const handleAccessoryPress = () => {
    setAccessoryVisible(!accessoryVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Tooltip" />
      <Title title="Default" />
      <View style={styles.item_container}>
        <Subtitle subtitle={'Default'} />
        <Tooltip
          style={{flex: 7}}
          isVisible={defaultVisible}
          trigger={<RenderButton onPress={handleDefaultPress} />}
          toolTip="Hello! I'm Tooltip!"
        />
      </View>
      <Divider />

      <Title title="Accessories" />
      <View style={styles.item_container}>
        <Subtitle subtitle="Accessories" />
        <Tooltip
          style={{flex: 7}}
          isVisible={accessoryVisible}
          trigger={<RenderButton onPress={handleAccessoryPress} />}
          iconLeft={<RenderHeart />}
          toolTip="Hello! I'm Tooltip!"
        />
      </View>
    </SafeAreaView>
  );
};

const Title = ({title}) => {
  return (
    <Text style={{margin: 20}} category="H3">
      {title}
    </Text>
  );
};

const Subtitle = ({subtitle}) => {
  return (
    <Text style={{flex: 3}} category="MiniLabel">
      {subtitle}
    </Text>
  );
};

const RenderHeart = () => {
  return (
    <Icon
      style={{tintColor: colors.color_secondary_white, marginEnd: 10}}
      name="heart_fill"
    />
  );
};

const RenderButton = ({onPress}) => {
  return <Button onPress={onPress} text="TOGGLE TOOLTIP" />;
};
