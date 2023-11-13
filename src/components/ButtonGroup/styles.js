import {StyleSheet} from 'react-native';
import {colors} from '@styles';

export default StyleSheet.create({
  button_group_container: {
    flexDirection: 'row',
  },

  first_button: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  first_button_line: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderWidth: 1,
  },
  two_button_primary_first_button: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRightWidth: 1,
    borderRightColor: colors.color_secondary_white,
  },
  last_button: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  last_button_line: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderWidth: 1,
  },
  two_button_line_first_button: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 0,
  },
  two_button_sub_first_button: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRightWidth: 1,
    borderRightColor: colors.color_primary_blue,
  },
  primary_middle: {
    borderLeftColor: colors.color_secondary_white,
    borderRightColor: colors.color_secondary_white,
    borderRadius: 0,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  sub_middle: {
    borderLeftColor: colors.color_primary_blue,
    borderRightColor: colors.color_primary_blue,
    borderRadius: 0,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  line_middle: {
    borderRadius: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});
