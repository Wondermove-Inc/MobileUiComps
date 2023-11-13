import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

export default ({category, style, ...props}) => {
  return <Text style={[textCategory[category], style]} {...props} />;
};

const textCategory = {
  H1: styles.headline_1,
  H2: styles.headline_2,
  H3: styles.headline_3,
  H4: styles.headline_4,
  H5: styles.bg_type,
  B1: styles.intro_text,
  B2: styles.body,
  B3: styles.subtext,
  CTA: styles.button,
  Link: styles.links,
  Label: styles.label,
  MiniLabel: styles.mini_label,
};
