import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles';
import {Text, Header, BottomNavigation, Icon} from '@components';

const BottomNavigationScreen = ({navigation}) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [iconIndex, setIconIndex] = useState(0);
  const [iconTitleIndex, seticonTitleIndex] = useState(0);

  const titleItems = [{title: 'Tab 1'}, {title: 'Tab 2'}, {title: 'Tab 3'}];

  const iconItems = [
    {icon: RenderHeart},
    {icon: RenderHeart},
    {icon: RenderHeart},
  ];

  const iconTitleItems = [
    {title: 'Tab 1', icon: RenderHeart},
    {title: 'Tab 2', icon: RenderHeart},
    {title: 'Tab 3', icon: RenderHeart},
  ];

  const handleTitleSelect = index => {
    setTitleIndex(index);
  };

  const handleIconSelect = index => {
    setIconIndex(index);
  };

  const handleIconTitleSelect = index => {
    seticonTitleIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Bottom Navigation" />
      <Title title="Title" />
      <BottomNavigation
        items={titleItems}
        selectedIndex={titleIndex}
        onSelect={handleTitleSelect}
      />

      <Title title="Icon" />
      <BottomNavigation
        items={iconItems}
        selectedIndex={iconIndex}
        onSelect={handleIconSelect}
      />

      <Title title="Icon Title" />
      <BottomNavigation
        items={iconTitleItems}
        selectedIndex={iconTitleIndex}
        onSelect={handleIconTitleSelect}
      />
    </SafeAreaView>
  );
};

const RenderHeart = ({...props}) => {
  return <Icon name="heart_fill" {...props} />;
};

const Title = ({title}) => {
  return (
    <Text category="H3" style={styles.title_text}>
      {title}
    </Text>
  );
};

export default BottomNavigationScreen;
