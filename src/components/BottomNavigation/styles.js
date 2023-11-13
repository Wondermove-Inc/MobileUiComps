import {StyleSheet} from 'react-native';
import {colors, fontColors} from '@styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    minHeight: 87,
    borderTopColor: colors.color_secondary_lightgray,
    borderTopWidth: 1,
  },
  item_container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 16,
  },
  on_text: {
    color: fontColors.color_primary_blue,
  },
  off_text: {
    color: colors.color_secondary_sand,
  },
});
