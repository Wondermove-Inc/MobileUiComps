import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles';
import {Text, Header, TabBar, Icon} from '@components';

const TabBarScreen = ({navigation}) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [iconIndex, setIconIndex] = useState(0);
  const [iconTitleIndex, setIconTitleIndex] = useState(0);

  const titleOnSelect = index => {
    setTitleIndex(index);
  };

  const iconOnSelect = index => {
    setIconIndex(index);
  };

  const iconTitleOnSelect = index => {
    setIconTitleIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Tab Bar" />
      <Title title="Title" />
      <TabBar
        items={[{label: 'Label'}, {label: 'Label'}, {label: 'Label'}]}
        onSelect={titleOnSelect}
        selectedIndex={titleIndex}
      />
      <Title title="Icon" />
      <TabBar
        items={[{icon: RenderHeart}, {icon: RenderHeart}, {icon: RenderHeart}]}
        onSelect={iconOnSelect}
        selectedIndex={iconIndex}
      />
      <Title title="Icon Title" />
      <TabBar
        items={[
          {icon: RenderHeart, label: 'Label'},
          {icon: RenderHeart, label: 'Label'},
          {icon: RenderHeart, label: 'Label'},
        ]}
        onSelect={iconTitleOnSelect}
        selectedIndex={iconTitleIndex}
      />
    </SafeAreaView>
  );
};

const RenderHeart = props => {
  return <Icon name="heart_fill" {...props} />;
};

const Title = ({title}) => {
  return (
    <Text category="H3" style={{margin: 20}}>
      {title}
    </Text>
  );
};

export default TabBarScreen;
