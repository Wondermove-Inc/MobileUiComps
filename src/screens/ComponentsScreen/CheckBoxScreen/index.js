import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';

import styles from './styles';

import {Text, Header, CheckBox} from '@components';

const CheckBoxScreen = ({navigation}) => {
  const [lightUnSelected, setLightUnSelected] = useState(false);
  const [lightSelected, setLightSelected] = useState(true);
  const [darkUnSelected, setDarkUnSelected] = useState(false);
  const [darkSelected, setDarkSelected] = useState(true);

  const lightUnselectedOnPress = () => {
    setLightUnSelected(!lightUnSelected);
  };

  const lightSelectedOnPress = () => {
    setLightSelected(!lightSelected);
  };

  const darkUnSelectedOnPress = () => {
    setDarkUnSelected(!darkUnSelected);
  };

  const darkSelectedOnPress = () => {
    setDarkSelected(!darkSelected);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="CheckBox" />
      <ScrollView>
        {/* Light checkbox */}
        <View style={styles.light_container}>
          <Text category="H3">Light</Text>
          <View style={styles.item_container}>
            <Text category="MiniLabel">Unselected</Text>
            <CheckBox
              onSelect={lightUnselectedOnPress}
              isSelected={lightUnSelected}
            />
          </View>

          <View style={styles.item_container}>
            <Text category="MiniLabel">Selected</Text>
            <CheckBox
              onSelect={lightSelectedOnPress}
              isSelected={lightSelected}
            />
          </View>

          <View style={styles.item_container}>
            <Text category="MiniLabel">Disabled unselected</Text>
            <CheckBox isSelected={false} disabled={true} />
          </View>

          <View style={styles.item_container}>
            <Text category="MiniLabel">Disabled selected</Text>
            <CheckBox isSelected={true} disabled={true} />
          </View>
        </View>
        {/* ----------- */}

        {/* Dark checkbox */}
        <View style={styles.dark_container}>
          <Text style={styles.dark_text} category="H3">
            Dark
          </Text>
          <View style={styles.item_container}>
            <Text style={styles.dark_text} category="MiniLabel">
              Unselected
            </Text>
            <CheckBox
              onSelect={darkUnSelectedOnPress}
              isSelected={darkUnSelected}
              theme="dark"
            />
          </View>
          <View style={styles.item_container}>
            <Text style={styles.dark_text} category="MiniLabel">
              Selected
            </Text>
            <CheckBox
              onSelect={darkSelectedOnPress}
              isSelected={darkSelected}
              theme="dark"
            />
          </View>
          <View style={styles.item_container}>
            <Text style={styles.dark_text} category="MiniLabel">
              Disabled unselected
            </Text>
            <CheckBox theme="dark" disabled={true} isSelected={false} />
          </View>
          <View style={styles.item_container}>
            <Text style={styles.dark_text} category="MiniLabel">
              Disabled selected
            </Text>
            <CheckBox theme="dark" disabled={true} isSelected={true} />
          </View>
        </View>
        {/* ----------- */}

        {/* Light Text checkbox */}
        <View style={styles.light_container}>
          <Text category="H3">Text</Text>
          <View style={styles.item_container}>
            <Text category="MiniLabel">Right text</Text>
            <CheckBox textRight="Text" />
          </View>
          <View style={styles.item_container}>
            <Text category="MiniLabel">Left text</Text>
            <CheckBox textLeft="Text" />
          </View>
          <View style={styles.item_container}>
            <Text category="MiniLabel">Text Disabled</Text>
            <CheckBox disabled={true} textRight="Text" />
          </View>
        </View>
        {/* ----------- */}

        {/* Dark Text checkbox */}
        <View style={styles.dark_container}>
          <View style={styles.item_container}>
            <Text style={styles.dark_text} category="MiniLabel">
              Right Text
            </Text>
            <CheckBox theme="dark" textRight="Text" />
          </View>
          <View style={styles.item_container}>
            <Text style={styles.dark_text} category="MiniLabel">
              Left Text
            </Text>
            <CheckBox theme="dark" textLeft="Text" />
          </View>
          <View style={styles.item_container}>
            <Text style={styles.dark_text} category="MiniLabel">
              Text Disabled
            </Text>
            <CheckBox theme="dark" textRight="Text" disabled={true} />
          </View>
        </View>
        {/* ----------- */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckBoxScreen;
