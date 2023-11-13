import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';

import styles from './styles';

import {Header, Radio, Text} from '@components';
const RadioScreen = ({navigation}) => {
  const [lightUnselected, setLightUnselected] = useState(false);
  const [lightSelected, setLightSelected] = useState(true);
  const [darkUnselected, setDarkUnselected] = useState(false);
  const [darkSelected, setDarkSelected] = useState(true);

  const handlePressLightUnselected = () => {
    setLightUnselected(!lightUnselected);
  };

  const handlePressLightSelected = () => {
    setLightSelected(!lightSelected);
  };

  const handlePressDarkUnselected = () => {
    setDarkUnselected(!darkUnselected);
  };

  const handlePressDarkSelected = () => {
    setDarkSelected(!darkSelected);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Radio" />
      <ScrollView>
        <View style={styles.light_container}>
          {/* Light checkbox group */}
          <Text category="H3">Light</Text>
          <View style={styles.item_container}>
            <Text category="MiniLabel">Unselected</Text>
            <Radio
              onSelect={handlePressLightUnselected}
              isSelected={lightUnselected}
            />
          </View>
          <View style={styles.item_container}>
            <Text category="MiniLabel">Selected</Text>
            <Radio
              onSelect={handlePressLightSelected}
              isSelected={lightSelected}
            />
          </View>
          <View style={styles.item_container}>
            <Text category="MiniLabel">Disabled unselected</Text>
            <Radio isSelected={false} disabled={true} />
          </View>
          <View style={styles.item_container}>
            <Text category="MiniLabel">Disabled selected</Text>
            <Radio isSelected={true} disabled={true} />
          </View>
        </View>
        {/* ------------------------ */}

        {/* Dark checkbox group */}
        <View style={styles.dark_container}>
          <Text style={styles.dark_text} category="H3">
            Dark
          </Text>
          <View style={styles.item_container}>
            <Text style={styles.dark_text} category="MiniLabel">
              Unselected
            </Text>
            <Radio
              onSelect={handlePressDarkUnselected}
              isSelected={darkUnselected}
              theme="dark"
            />
          </View>
          <View style={styles.item_container}>
            <Text style={styles.dark_text} category="MiniLabel">
              Selected
            </Text>
            <Radio
              onSelect={handlePressDarkSelected}
              isSelected={darkSelected}
              theme="dark"
            />
          </View>
          <View style={styles.item_container}>
            <Text style={styles.dark_text} category="MiniLabel">
              Disabled unselected
            </Text>
            <Radio theme="dark" disabled={true} isSelected={false} />
          </View>
          <View style={styles.item_container}>
            <Text style={styles.dark_text} category="MiniLabel">
              Disabled selected
            </Text>
            <Radio theme="dark" disabled={true} isSelected={true} />
          </View>
        </View>
        {/* ------------------------ */}

        {/* Light Text group */}
        <View style={styles.light_container}>
          <Text category="H3">Text</Text>
          <View style={styles.item_container}>
            <Text category="MiniLabel">Right text</Text>
            <Radio textRight="Text" />
          </View>
          <View style={styles.item_container}>
            <Text category="MiniLabel">Left text</Text>
            <Radio textLeft="Text" />
          </View>
          <View style={styles.item_container}>
            <Text category="MiniLabel">Text Disabled</Text>
            <Radio disabled={true} textRight="Text" />
          </View>
        </View>
        {/* ------------------------ */}

        {/* Dark Text group */}
        <View style={styles.dark_container}>
          <View style={styles.item_container}>
            <Text style={styles.dark_text} category="MiniLabel">
              Right Text
            </Text>
            <Radio theme="dark" textRight="Text" />
          </View>
          <View style={styles.item_container}>
            <Text style={styles.dark_text} category="MiniLabel">
              Left Text
            </Text>
            <Radio theme="dark" textLeft="Text" />
          </View>
          <View style={styles.item_container}>
            <Text style={styles.dark_text} category="MiniLabel">
              Text Disabled
            </Text>
            <Radio theme="dark" textRight="Text" disabled={true} />
          </View>
        </View>
        {/* ------------------------ */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RadioScreen;
