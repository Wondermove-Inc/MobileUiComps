import React from 'react';
import {ScrollView, View, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {fontColors} from '@styles';
import {Text} from '@components';

export default () => {
  const authIcon = require('@image/icon_auth_default.png');
  const socialIcon = require('@image/icon_social_default.png');
  const articleIcon = require('@image/icon_article_default.png');
  const messagingIcon = require('@image/icon_messaging_default.png');
  const dashboardIcon = require('@image/icon_dashboard_default.png');
  const ecommerceIcon = require('@image/icon_ecommerce_default.png');
  const slidingIcon = require('@image/icon_sliding_panel_default.png');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.item_container}>
        <CategoryItem
          name="Auth"
          marginStyle={styles.margin_end}
          imageSource={authIcon}
          onPress={() => {}}
        />
        <CategoryItem
          name="Social"
          disabled={false}
          imageSource={socialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={styles.item_container}>
        <CategoryItem
          name="Articles"
          marginStyle={styles.margin_end}
          disabled={false}
          imageSource={articleIcon}
          onPress={() => {}}
        />
        <CategoryItem
          name="Messaging"
          disabled={false}
          imageSource={messagingIcon}
          onPress={() => {}}
        />
      </View>
      <View style={styles.item_container}>
        <CategoryItem
          name="Dashboards"
          marginStyle={styles.margin_end}
          disabled={false}
          imageSource={dashboardIcon}
          onPress={() => {}}
        />
        <CategoryItem
          name="Ecommerce"
          disabled={false}
          imageSource={ecommerceIcon}
          onPress={() => {}}
        />
      </View>
      <View style={styles.item_container}>
        <CategoryItem
          name="SlidingPanel"
          disabled={false}
          imageSource={slidingIcon}
          marginStyle={styles.margin_end}
          onPress={() => {}}
        />
        <RenderEmpty />
      </View>
    </ScrollView>
  );
};

const CategoryItem = ({
  name,
  marginStyle,
  disabled,
  style,
  imageSource,
  ...props
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.category_container, marginStyle, style]}
      {...props}>
      <Image style={styles.icon_base} source={imageSource} />
      <Text
        category="Label"
        style={{
          color: fontColors.color_darkgray,
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const RenderEmpty = () => {
  return (
    <CategoryItem
      style={{backgroundColor: null, borderWidth: 0}}
      disabled={true}
    />
  );
};
