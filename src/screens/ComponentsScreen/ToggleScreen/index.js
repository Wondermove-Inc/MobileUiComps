import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';

import styles from './styles';

import {Text, Toggle, Header} from '@components';

export default ({navigation}) => {
  const [defaultChecked, setDefaultChecked] = useState(true);
  const [defaultUnchecked, setDefaultUnchecked] = useState(false);
  const [rightTextChecked, setRightTextChecked] = useState(false);
  const [leftTextChecked, setLeftTextChecked] = useState(false);

  const handleCheckedPress = () => {
    setDefaultChecked(!defaultChecked);
  };

  const handleUncheckedPress = () => {
    setDefaultUnchecked(!defaultUnchecked);
  };

  const handleRightTextPress = () => {
    setRightTextChecked(!rightTextChecked);
  };

  const handleLeftTextPress = () => {
    setLeftTextChecked(!leftTextChecked);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Toggle" />
      <ScrollView>
        <View style={{padding: 20}}>
          <Text category="H3">Default</Text>

          {/* Default Checked */}
          <View style={styles.item_container}>
            <Text category="MiniLabel">Checked</Text>
            <Toggle onSelect={handleCheckedPress} isSelected={defaultChecked} />
          </View>

          {/* Defualt Unchecked */}
          <View style={styles.item_container}>
            <Text category="MiniLabel">Unchecked</Text>
            <Toggle
              onSelect={handleUncheckedPress}
              isSelected={defaultUnchecked}
            />
          </View>

          {/* disabled Unchecked */}
          <View style={styles.item_container}>
            <Text category="MiniLabel">Disabled unchecked</Text>
            <Toggle isSelected={false} disabled={true} />
          </View>

          {/* disabeld Checked */}
          <View style={styles.item_container}>
            <Text category="MiniLabel">Disabled checked</Text>
            <Toggle isSelected={true} disabled={true} />
          </View>
        </View>
        <View style={{padding: 20}}>
          <Text category="H3">Text</Text>

          {/* Right Text */}
          <View style={styles.item_container}>
            <Text category="MiniLabel">Right text</Text>
            <Toggle
              onSelect={handleRightTextPress}
              isSelected={rightTextChecked}
              textRight="Text"
            />
          </View>

          {/* Left Text */}
          <View style={styles.item_container}>
            <Text category="MiniLabel">Left text</Text>
            <Toggle
              onSelect={handleLeftTextPress}
              isSelected={leftTextChecked}
              textLeft="Text"
            />
          </View>

          {/* Disabled Text */}
          <View style={styles.item_container}>
            <Text category="MiniLabel">Text Disabled</Text>
            <Toggle disabled={true} textRight="Text" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
