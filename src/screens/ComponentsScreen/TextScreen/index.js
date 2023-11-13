import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import {Text, Header} from '@components';

const CategoryNames = {
  H1: 'H1 (Headline 1)',
  H2: 'H2 (Headline 2)',
  H3: 'H3 (Headline 3)',
  H4: 'H4 (Headline 4)',
  H5: 'H5 (BG Type)',
  B1: 'B1 (Introtext)',
  B2: 'B2 (Body)',
  B3: 'B3 (Subtext)',
  CTA: 'CTA (Button)',
  Link: 'Link (Links)',
  Label: 'Label (Label)',
  MiniLabel: 'Mini label (Mini label)',
};

const RenderItem = ({categoryName, category}) => {
  return (
    <View style={styles.text_container}>
      <Text style={styles.text} category="MiniLabel">
        {categoryName}
      </Text>
      <Text category={category}>Text</Text>
    </View>
  );
};

const TextScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Text" navigation={navigation} />
      <ScrollView contentContainerStyle={styles.item_container}>
        <Text category="H3">Font</Text>
        {Object.entries(CategoryNames).map(([category, categoryName]) => (
          <RenderItem
            key={category}
            category={category}
            categoryName={categoryName}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TextScreen;
