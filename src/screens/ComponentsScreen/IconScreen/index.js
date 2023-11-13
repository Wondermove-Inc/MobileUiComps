import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';

import styles from './styles';

import {Text, Divider, Header, Icon} from '@components';

const IconScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Icon" />
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <Text style={{margin: 20}} category="H3">
          Auth
        </Text>
        <View style={styles.item_container}>
          <Icon name="call" />
          <Icon name="email" />
          <Icon name="password" />
          <Icon name="person" />
          <Icon name="search" />
          <Icon name="visibility" />
          <Icon name="visibility_off" />
        </View>
        <Divider />
        <Text style={{margin: 20}} category="H3">
          Social
        </Text>
        <View style={styles.item_container}>
          <Icon name="chat" />
          <Icon name="heart_fill" />
          <Icon name="heart_empty" />
          <Icon name="more" />
          <Icon name="person_add" />
          <Icon name="share" />
          <Icon name="time" />
        </View>
        <Divider />
        <Text style={{margin: 20}} category="H3">
          Ecommerce
        </Text>
        <View style={styles.item_container}>
          <Icon name="credit_card" />
          <Icon name="cart" />
          <Icon name="bookmark_fill" />
          <Icon name="bookmark_empty" />
        </View>
        <Divider />
        <Text style={{margin: 20}} category="H3">
          Messaging
        </Text>
        <View style={styles.item_container}>
          <Icon name="camera" />
          <Icon name="done" />
          <Icon name="file" />
          <Icon name="image" />
          <Icon name="mic" />
          <Icon name="people" />
          <Icon name="place" />
          <Icon name="send" />
        </View>
        <Divider />
        <Text style={{margin: 20}} category="H3">
          Content
        </Text>
        <View style={styles.item_container}>
          <Icon name="add" />
          <Icon name="calendar" />
          <Icon name="check" />
          <Icon name="close" />
          <Icon name="edit" />
          <Icon name="layout" />
          <Icon name="library" />
          <Icon name="remove" />
          <Icon name="star_empty" />
        </View>
        <Divider />
        <Text style={{margin: 20}} category="H3">
          Arrow
        </Text>
        <View style={styles.item_container}>
          <Icon name="arrow_left" />
          <Icon name="arrow_right" />
          <Icon name="arrow_up" />
          <Icon name="arrow_down" />
          <Icon name="arrow_forward" />
        </View>
        <Divider />
        <Text style={{margin: 20}} category="H3">
          SNS
        </Text>
        <View style={styles.item_container}>
          <Icon name="facebook" />
          <Icon name="google" />
          <Icon name="twitter" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IconScreen;
