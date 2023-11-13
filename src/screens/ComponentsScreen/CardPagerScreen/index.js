import React from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import styles from './styles';
import {Text, Header, CardPager} from '@components';
import {fontColors} from '@styles';

export default ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Card Pager" />
      <View style={{flex: 1}}>
        <Text style={{margin: 20}} category="H3">
          Default
        </Text>
        <CardPager
          style={{width: '100%', minHeight: 289}}
          items={cardPagerData}
          initialPage={0}
        />
      </View>
    </SafeAreaView>
  );
};

const Content = ({content}) => {
  return (
    <Text
      style={{
        color: fontColors.color_gray,
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 10,
      }}
      category="B2">
      {content}
    </Text>
  );
};

const CardHeader = ({source, title}) => {
  return (
    <View>
      <Image style={{width: '100%'}} source={source} />
      <Text style={{marginStart: 20, marginTop: 10}} category="H4">
        {title}
      </Text>
    </View>
  );
};

const cardPagerData = [
  {
    header: (
      <CardHeader
        title="IONIQ 5"
        source={require('@image/image_ioniq_light.png')}
      />
    ),
    content: (
      <Content content="Experience the IONIQ 5—a world where anything is possible." />
    ),
  },
  {
    header: (
      <CardHeader
        title="New KONA Electric"
        source={require('@image/image_kona_light.png')}
      />
    ),
    content: (
      <Content content="The KONA Electric features an updated design." />
    ),
  },
  {
    header: (
      <CardHeader
        title="AVANTE"
        source={require('@image/image_avante_light.png')}
      />
    ),
    content: (
      <Content content="AVANTE’s wide range of infotainment features make everything colorful." />
    ),
  },
];
