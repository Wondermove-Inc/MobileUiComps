import {StyleSheet} from 'react-native';
import {colors} from '@styles';

export default StyleSheet.create({
  header_container: {
    minHeight: 56,
    paddingHorizontal: 20,
    borderBottomColor: colors.color_secondary_lightgray,
    borderBottomWidth: 1.5,
    flexDirection: 'row',
    backgroundColor: colors.color_secondary_white,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  header_title: {
    position: 'absolute',
    alignSelf: 'center',
    left: 0,
    right: 0,
  },
});
