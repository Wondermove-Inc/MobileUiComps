import {StyleSheet} from 'react-native';
import {colors, fontColors} from '@styles';

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
  disabled_text_color: {
    color: colors.color_secondary_lightgray,
  },
});
