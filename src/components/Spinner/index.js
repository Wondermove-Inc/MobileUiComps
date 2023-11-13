import React from 'react';
import LottieView from 'lottie-react-native';
import PropsType from 'prop-types';
import styles from './styles';

/**
 * @param {string} size
 * @param {Object,Object[]} style
 */

const Spinner = props => {
  const {size, style} = props;
  return (
    <LottieView
      style={[spinnerSize[size], style]}
      source={require('../assets/lottie/spinner.json')}
      autoPlay
      loop
    />
  );
};

Spinner.propType = {
  size: PropsType.string,
  style: PropsType.oneOfType([PropsType.array, PropsType.object]),
};

Spinner.defaultProps = {
  size: 'tiny',
};

const spinnerSize = {
  tiny: styles.tiny_spinner,
  small: styles.small_spinner,
  medium: styles.medium_spinner,
  large: styles.large_spinner,
  giant: styles.giant_spinner,
};

export default Spinner;
