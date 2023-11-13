import React from 'react';
import {View} from 'react-native';
import PropsType from 'prop-types';
import styles from './styles';

/**
 * Render a Card component
 * @param {Element} header - Render header Component. ex) header={<Header/>}
 * @param {Element} content - Render content Component. ex) content={<Content/>}
 * @param {Object, Object[]} style - Customize the style
 */

const Card = ({header, content, style, ...props}) => {
  return (
    <View style={[styles.card_style, style]} {...props}>
      {header}
      {content}
    </View>
  );
};

Card.propTypes = {
  header: PropsType.element,
  content: PropsType.element,
  style: PropsType.oneOfType([PropsType.object, PropsType.array]),
};

Card.defaultProps = {
  header: null,
  content: null,
};

export default Card;
