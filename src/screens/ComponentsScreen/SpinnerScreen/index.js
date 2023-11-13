import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {Text, Header, Spinner} from '@components';
import styles from './styles';

const SpinnerTypes = [
  {label: 'Tiny', size: 'tiny'},
  {label: 'Small', size: 'small'},
  {label: 'Medium', size: 'medium'},
  {label: 'Large', size: 'large'},
  {label: 'Giant', size: 'giant'},
];

const SpinnerScreen = ({navigation}) => {
  const renderSpinnerItem = (label, size) => (
    <View style={styles.item_container} key={size}>
      <Text category="MiniLabel">{label}</Text>
      <Spinner size={size} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Spinner" />
      <ScrollView contentContainerStyle={{padding: 20}}>
        <Text style={{marginBottom: 20}} category="H3">
          Size
        </Text>
        {SpinnerTypes?.map(({label, size}) => renderSpinnerItem(label, size))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpinnerScreen;
