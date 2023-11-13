import {StyleSheet} from 'react-native';
import {fontColors} from '@styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dark_text: {
    color: fontColors.color_white,
  },
  left_text: {
    marginRight: 10,
  },
  right_text: {
    marginLeft: 10,
  },
});
