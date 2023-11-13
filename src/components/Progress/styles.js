import {StyleSheet} from 'react-native';
import {colors} from '@styles';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 19,
    backgroundColor: colors.color_secondary_white,
  },
  base_value: {
    width: '100%',
    height: 16,
    backgroundColor: colors.color_secondary_sand,
    borderRadius: 44,
  },
  result_value: {
    height: 16,
    borderRadius: 44,
    position: 'absolute',
  },
  index_style: {
    width: 12,
    height: 12,
    borderRadius: 12,
  },
});
