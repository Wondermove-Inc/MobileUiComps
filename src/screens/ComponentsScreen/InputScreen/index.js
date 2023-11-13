import React from 'react';
import {View, SafeAreaView} from 'react-native';

import styles from './styles';

import {Text, Input, Header} from '@components';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Input" navigation={navigation} />
      <KeyboardAwareScrollView extraScrollHeight={20}>
        {/* Light Icon group */}
        <RenderLightIcon />

        {/* Dark Icon group */}
        <RenderDarkIcon />

        {/* Light Label group */}
        <RenderLightLabel />

        {/* Dark Label group */}
        <RenderDarkLabel />

        {/* Size group */}
        <View style={styles.group_container}>
          <RenderTitle title={'Size'} />
          <RenderItem
            status_text="Small"
            placeholder="Placeholder"
            size="small"
          />
          <RenderItem
            status_text="Medium"
            placeholder="Placeholder"
            size="medium"
          />
          <RenderItem
            status_text="Large"
            placeholder="Placeholder"
            size="large"
          />
          <RenderItem
            status_text="Multiline"
            placeholder="Placeholder"
            multiline={true}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const RenderLightIcon = () => {
  return (
    <View style={styles.group_container}>
      {/* title */}
      <RenderTitle title={'Light icon'} />

      {/* placeholder */}
      <RenderItem
        status_text="Placeholder"
        placeholder="Email"
        iconRight="email"
      />

      {/* danger */}
      <RenderItem
        status_text="Danger"
        error={true}
        iconRight="email"
        defaultValue="Text"
        errorText="Error Message"
      />

      {/* general */}
      <RenderItem status_text="General" iconRight="email" defaultValue="Text" />

      {/* disabled */}
      <RenderItem
        status_text="Disabled"
        iconRight="email"
        placeholder="Email"
        disabled={true}
      />
    </View>
  );
};

const RenderLightLabel = () => {
  return (
    <View style={styles.group_container}>
      {/* title */}
      <RenderTitle title={'Light label'} />

      {/* placeholder */}
      <RenderItem status_text="Placeholder" placeholder="Email" label="Email" />

      {/* danger */}
      <RenderItem
        status_text="Danger"
        error={true}
        defaultValue="Text"
        label="Email"
        errorText="Error Message"
      />

      {/* general */}
      <RenderItem status_text="General" defaultValue="Text" label="Email" />

      {/* disabled */}
      <RenderItem
        status_text="Disabled"
        placeholder="Email"
        disabled={true}
        label="Email"
      />
    </View>
  );
};

const RenderDarkIcon = () => {
  return (
    <View style={styles.dark_group_container}>
      {/* title */}
      <RenderDarkTitle title={'Dark icon'} />

      {/* placeholder */}
      <RenderDarkItem
        status_text="Placeholder"
        placeholder="Email"
        iconRight="email"
        theme="dark"
      />

      {/* danger */}
      <RenderDarkItem
        status_text="Danger"
        error={true}
        iconRight="email"
        defaultValue="Text"
        theme="dark"
        errorText="Error Message"
      />

      {/* general */}
      <RenderDarkItem
        status_text="General"
        iconRight="email"
        defaultValue="Text"
        theme="dark"
      />

      {/* disabled */}
      <RenderDarkItem
        status_text="Disabled"
        iconRight="email"
        placeholder="Email"
        disabled={true}
        theme="dark"
      />
    </View>
  );
};

const RenderDarkLabel = () => {
  return (
    <View style={styles.dark_group_container}>
      {/* title */}
      <RenderDarkTitle title={'Dark label'} />

      {/* placeholder */}
      <RenderDarkItem
        status_text="Placeholder"
        placeholder="Email"
        theme="dark"
        label="Email"
      />

      {/* danger */}
      <RenderDarkItem
        status_text="Danger"
        error={true}
        defaultValue="Text"
        theme="dark"
        errorText="Error Message"
        label="Email"
      />

      {/* general */}
      <RenderDarkItem
        status_text="General"
        defaultValue="Text"
        theme="dark"
        label="Email"
      />

      {/* disabled */}
      <RenderDarkItem
        status_text="Disabled"
        placeholder="Email"
        disabled={true}
        theme="dark"
        label="Email"
      />
    </View>
  );
};

const RenderTitle = ({title}) => {
  return <Text category="H3">{title}</Text>;
};

const RenderDarkTitle = ({title}) => {
  return (
    <Text category="H3" style={styles.item_dark_title}>
      {title}
    </Text>
  );
};

const RenderItem = ({status_text, ...props}) => {
  return (
    <View style={styles.item_container}>
      <Text category="MiniLabel">{status_text}</Text>
      <Input containerStyle={styles.input_style} {...props} />
    </View>
  );
};

const RenderDarkItem = ({status_text, ...props}) => {
  return (
    <View style={styles.item_container}>
      <Text category="MiniLabel" style={styles.dark_item_status_text}>
        {status_text}
      </Text>
      <Input containerStyle={styles.input_style} {...props} />
    </View>
  );
};
