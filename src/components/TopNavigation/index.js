import React from 'react';
import {View} from 'react-native';
import {Text} from '@components';
import PropsType from 'prop-types';
import styles from './styles';

const TopNavigation = props => {
  const {title, subtitle, iconLeft, iconRight} = props;
  return (
    <View style={styles.header_container}>
      {iconLeft}
      <View style={styles.header_title}>
        {title && (
          <Text category="Label" style={{textAlign: 'center'}}>
            {title}
          </Text>
        )}
        {subtitle && (
          <Text category="B3" style={{textAlign: 'center'}}>
            {subtitle}
          </Text>
        )}
      </View>
      {iconRight}
    </View>
  );
};

TopNavigation.propTypes = {
  title: PropsType.string,
  subtitle: PropsType.string,
  iconLeft: PropsType.oneOfType([PropsType.object, PropsType.string]),
  iconRight: PropsType.oneOfType([PropsType.object, PropsType.string]),
};

export default TopNavigation;
