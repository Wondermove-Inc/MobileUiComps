import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {Text, Divider, Header, ButtonGroup} from '@components';
import styles from './styles';

const buttonItems = {
  two: [{name: 'A'}, {name: 'B'}],
  three: [{name: 'A'}, {name: 'B'}, {name: 'C'}],
};

export default ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} text="Button Group" />
      <ScrollView>
        {/* Two button group */}
        {/* Default */}
        <View style={{padding: 20}}>
          <Text category="H3">Default</Text>

          {/* Primary two button group */}
          <View style={styles.item_container}>
            <Subtitle text="Primary" />
            <RenderButtonGroup items={buttonItems.two} />
          </View>

          {/* Sub two button group */}
          <View style={styles.item_container}>
            <Subtitle text="Sub" />
            <RenderButtonGroup items={buttonItems.two} variant="sub" />
          </View>

          {/* Line two button group */}
          <View style={styles.item_container}>
            <Subtitle text="Line" />
            <RenderButtonGroup items={buttonItems.two} variant="line" />
          </View>
        </View>
        <Divider />

        {/* Size */}
        <View style={{padding: 20}}>
          <Text category="H3">Size</Text>

          {/* Tiny size two button group */}
          <View style={styles.item_container}>
            <Subtitle text="Tiny" />
            <RenderButtonGroup items={buttonItems.two} size="tiny" />
          </View>

          {/* Small size two button group */}
          <View style={styles.item_container}>
            <Subtitle text="Small" />
            <RenderButtonGroup items={buttonItems.two} size="small" />
          </View>

          {/* Medium size two button group */}
          <View style={styles.item_container}>
            <Subtitle text="Medium" />
            <RenderButtonGroup items={buttonItems.two} size="medium" />
          </View>

          {/* Large size two button group */}
          <View style={styles.item_container}>
            <Subtitle text="Large" />
            <RenderButtonGroup items={buttonItems.two} size="large" />
          </View>

          {/* Giant size two button group */}
          <View style={styles.item_container}>
            <Subtitle text="Giant" />
            <RenderButtonGroup items={buttonItems.two} size="giant" />
          </View>
        </View>
        <Divider />

        {/* Three button group */}
        {/* Default */}
        <View style={{padding: 20}}>
          <Text category="H3">Default</Text>

          {/* Primary three button group */}
          <View style={styles.item_container}>
            <Subtitle text="Primary" />
            <RenderButtonGroup items={buttonItems.three} />
          </View>

          {/* Sub three button group */}
          <View style={styles.item_container}>
            <Subtitle text="Sub" />
            <RenderButtonGroup items={buttonItems.three} variant="sub" />
          </View>

          {/* Line three button group */}
          <View style={styles.item_container}>
            <Subtitle text="Line" />
            <RenderButtonGroup items={buttonItems.three} variant="line" />
          </View>
        </View>
        <Divider />

        {/* Size */}
        <View style={{padding: 20}}>
          <Text category="H3">Size</Text>

          {/* Tiny size three button group */}
          <View style={styles.item_container}>
            <Subtitle text="Tiny" />
            <RenderButtonGroup items={buttonItems.three} size="tiny" />
          </View>

          {/* Small size three button group */}
          <View style={styles.item_container}>
            <Subtitle text="Small" />
            <RenderButtonGroup items={buttonItems.three} size="small" />
          </View>

          {/* Medium size three button group */}
          <View style={styles.item_container}>
            <Subtitle text="Medium" />
            <RenderButtonGroup items={buttonItems.three} size="medium" />
          </View>

          {/* Large size three button group */}
          <View style={styles.item_container}>
            <Subtitle text="Large" />
            <RenderButtonGroup items={buttonItems.three} size="large" />
          </View>

          {/* Giant size three button group */}
          <View style={styles.item_container}>
            <Subtitle text="Giant" />
            <RenderButtonGroup items={buttonItems.three} size="giant" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const RenderButtonGroup = ({items, variant, size}) => {
  return (
    <ButtonGroup
      style={{flex: 5}}
      buttonStyle={{flex: 1}}
      items={items}
      variant={variant}
      size={size}
    />
  );
};

const Subtitle = ({text}) => {
  return (
    <Text style={{flex: 5}} category="MiniLabel">
      {text}
    </Text>
  );
};
