import {StyleSheet} from 'react-native';
import {colors} from '@styles';

export default StyleSheet.create({
  header_container: {
    minHeight: 56,
    paddingHorizontal: 20,
    borderBottomColor: colors.color_secondary_lightgray,
    borderBottomWidth: 1.5,
    justifyContent: 'center',
  },
  back_button_style: {
    alignSelf: 'flex-start',
  },
  header_title: {
    position: 'absolute',
    alignSelf: 'center',
  },
});
