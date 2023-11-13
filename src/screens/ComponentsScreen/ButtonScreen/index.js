import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';
import styles from './styles';
import {Text, Button, Divider, Header, Input} from '@components';

const ButtonScreen = ({navigation}) => {
  const [exampleText, setExampleText] = useState('');
  const viewRef = useRef(null);

  const onChangeExampleText = text => setExampleText(text);
  const scrollToEnd = () => viewRef.current?.scrollToEnd();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      scrollToEnd,
    );
    return () => {
      keyboardDidShowListener.remove();
    };
  }, [viewRef]);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Button" />
      <KeyboardAvoidingView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          ref={viewRef}
          // contentContainerStyle={{paddingBottom: 50}}
        >
          <RenderTextGroup />
          <Divider />

          <RenderLeftIconGroup />
          <Divider />

          <RenderRightIconGroup />
          <Divider />

          <RenderSizeGroup />
          <Divider />

          <RenderExample
            exampleText={exampleText}
            onChangeExampleText={onChangeExampleText}
            scrollToEnd={scrollToEnd}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

// top default disabled text
const ButtonStatus = () => {
  return (
    <View style={styles.status_container}>
      <Button buttonStyle={styles.item_width} disabled variant="ghost" />
      <Button
        buttonStyle={styles.item_width}
        disabled
        variant="ghost"
        textStyle={styles.status_text}
        text="Default"
      />

      {/* disabled */}
      <Button
        buttonStyle={[styles.item_width, styles.left_margin]}
        disabled
        variant="ghost"
        textStyle={styles.status_text}
        text="Disabled"
      />
    </View>
  );
};

const RenderItem = ({variantType, variant, iconLeft, iconRight}) => {
  return (
    <View style={[styles.status_container]}>
      <Button
        buttonStyle={styles.item_appearance_container}
        textStyle={styles.item_appearance_text}
        variant="ghost"
        disabled
        text={variantType}
      />
      <Button
        buttonStyle={styles.item_width}
        text="Button"
        variant={variant}
        iconLeft={iconLeft}
        iconRight={iconRight}
      />
      <Button
        buttonStyle={[styles.item_width, styles.left_margin]}
        disabled
        text="Button"
        variant={variant}
        iconLeft={iconLeft}
        iconRight={iconRight}
      />
    </View>
  );
};

// Size button item
const RenderSizeItem = ({size, variant, variantType, iconLeft, iconRight}) => {
  return (
    <View style={[styles.size_container]}>
      <Text category="MiniLabel">{variantType}</Text>
      <Button
        size={size}
        variant={variant}
        text="Button"
        buttonStyle={[styles.item_width, styles.item_size]}
        iconLeft={iconLeft}
        iconRight={iconRight}
      />
    </View>
  );
};

// Text button group
const RenderTextGroup = () => {
  return (
    <View style={styles.group_container}>
      <Text category="H3">Text</Text>
      <ButtonStatus />
      <RenderItem variantType="Primary" variant="primary" />
      <RenderItem variantType="Sub" variant="sub" />
      <RenderItem variantType="Line" variant="line" />
      <RenderItem variantType="Ghost" variant="ghost" />
    </View>
  );
};

// Left Icon button group
const RenderLeftIconGroup = () => {
  return (
    <View style={styles.group_container}>
      <Text category="H3">Left icon</Text>
      <ButtonStatus />
      <RenderItem variantType="Primary" variant="primary" iconLeft="search" />
      <RenderItem variantType="Sub" variant="sub" iconLeft="search" />
      <RenderItem variantType="Line" variant="line" iconLeft="search" />
      <RenderItem variantType="Ghost" variant="ghost" iconLeft="search" />
    </View>
  );
};

// Right Icon button group
const RenderRightIconGroup = () => {
  return (
    <View style={styles.group_container}>
      <Text category="H3">Right icon</Text>
      <ButtonStatus />
      <RenderItem variantType="Primary" variant="primary" iconRight="search" />
      <RenderItem variantType="Sub" variant="sub" iconRight="search" />
      <RenderItem variantType="Line" variant="line" iconRight="search" />
      <RenderItem variantType="Ghost" variant="ghost" iconRight="search" />
    </View>
  );
};

// button size group
const RenderSizeGroup = () => {
  return (
    <View style={styles.group_container}>
      <Text category="H3">Button Size</Text>
      <RenderSizeItem variantType="Tiny" iconLeft="search" size="tiny" />
      <RenderSizeItem variantType="Small" iconLeft="search" size="small" />
      <RenderSizeItem variantType="Medium" iconLeft="search" size="medium" />
      <RenderSizeItem variantType="Large" iconLeft="search" size="large" />
      <RenderSizeItem variantType="Giant" iconLeft="search" size="giant" />
    </View>
  );
};

const RenderExample = props => {
  const {exampleText, onChangeExampleText, scrollToEnd} = props;
  return (
    <View style={{padding: 20}}>
      <Text category="H3">Example</Text>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Input
          containerStyle={{flex: 7, marginRight: 10}}
          placeholder="Please input 'Text'"
          onChangeText={onChangeExampleText}
          value={exampleText}
          onFocus={scrollToEnd}
        />
        <Button
          buttonStyle={{flex: 2}}
          size="small"
          text="Button"
          disabled={exampleText !== 'Text'}
        />
      </View>
    </View>
  );
};

export default ButtonScreen;
