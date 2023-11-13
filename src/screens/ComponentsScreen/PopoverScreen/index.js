import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';

import styles from './styles';

import {Text, Header, Popover, Button} from '@components';
const PopoverScreen = ({navigation}) => {
  const [defaultVisible, setDefaultVisible] = useState(false);
  const [fullwidthVisible, setFullwidthVisible] = useState(false);

  const handlePressDefault = () => {
    setDefaultVisible(!defaultVisible);
  };

  const handlePressFullwidth = () => {
    setFullwidthVisible(!fullwidthVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Popover" />
      <Title title="Default" />
      <View style={styles.item_container1}>
        <Text style={{flex: 4}} category="MiniLabel">
          Default
        </Text>
        <Popover
          style={{flex: 6}}
          content={Content}
          trigger={<RenderButton onPress={handlePressDefault} />}
          isVisible={defaultVisible}
        />
      </View>
      <View style={styles.item_container2}>
        <Text style={{flex: 4}} category="MiniLabel">
          Full width
        </Text>
        <Popover
          style={{flex: 6}}
          content={Content}
          trigger={<RenderButton onPress={handlePressFullwidth} />}
          isVisible={fullwidthVisible}
          fullWidth={true}
        />
      </View>
    </SafeAreaView>
  );
};

const Title = ({title}) => {
  return (
    <Text category="H3" style={{margin: 20}}>
      {title}
    </Text>
  );
};

const Content = ({...props}) => {
  return (
    <Text category="B2" {...props}>
      Hello :) I’m Popover!
    </Text>
  );
};

const RenderButton = ({onPress}) => {
  return <Button text="TOGGLE POPOVER" onPress={onPress} />;
};

export default PopoverScreen;
