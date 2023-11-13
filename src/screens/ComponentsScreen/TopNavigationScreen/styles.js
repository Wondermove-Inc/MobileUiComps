import {StyleSheet} from 'react-native';
import {baseStyle} from '@styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  title_text: {
    margin: 20,
  },
  back_button: baseStyle.top_navigation_accessory_left_style,
  right_button: baseStyle.top_navigation_accessory_right_style,
});
