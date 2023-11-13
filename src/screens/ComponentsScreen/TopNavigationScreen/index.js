import React from 'react';
import {TouchableOpacity, SafeAreaView} from 'react-native';
import styles from './styles';
import {Text, Icon, Header, TopNavigation} from '@components';

const TopNavigationScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Top Navigation" />
      <Text style={styles.title_text} category="H3">
        Default
      </Text>

      {/* Default TopNavigation */}
      <TopNavigation title="Title" />
      <Text style={styles.title_text} category="H3">
        Subtitle
      </Text>

      {/* Subtitle TopNavigation */}
      <TopNavigation title="Title" subtitle="Subtitle" />
      <Text style={styles.title_text} category="H3">
        Left Control
      </Text>

      {/* Left Control */}
      <TopNavigation
        title="Title"
        subtitle="Subtitle"
        iconLeft={<RenderLeftButton />}
      />
      <Text style={styles.title_text} category="H3">
        Right Control
      </Text>

      {/* Right Control */}
      <TopNavigation
        title="Title"
        subtitle="Subtitle"
        iconLeft={<RenderLeftButton />}
        iconRight={<RenderAddButton />}
      />

      {/* Right Control */}
      <TopNavigation
        title="Title"
        subtitle="Subtitle"
        iconLeft={<RenderLeftButton />}
        iconRight={<RenderProfileButton />}
      />
    </SafeAreaView>
  );
};

const RenderLeftButton = () => {
  return (
    <TouchableOpacity style={styles.back_button}>
      <Icon name="arrow_left" />
    </TouchableOpacity>
  );
};

const RenderAddButton = () => {
  return (
    <TouchableOpacity style={styles.right_button}>
      <Icon name="add" />
    </TouchableOpacity>
  );
};

const RenderProfileButton = () => {
  return (
    <TouchableOpacity style={styles.right_button}>
      <Icon name="settings" />
    </TouchableOpacity>
  );
};

export default TopNavigationScreen;
