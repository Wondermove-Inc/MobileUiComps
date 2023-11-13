import {StyleSheet} from 'react-native';
import {colors, fontColors} from '@styles';

export default StyleSheet.create({
  icon_selected: {
    tintColor: colors.color_primary_blue,
  },
  icon_unselected: {
    tintColor: colors.color_secondary_gray,
  },
  statusbar_style: {
    height: 4,
    borderRadius: 4,
    width: '100%',
    marginTop: 8,
  },
  selected_bar: {
    backgroundColor: colors.color_primary_blue,
  },
  unselected_bar: {
    backgroundColor: colors.color_secondary_white,
  },
  item_container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 8,
  },
  container: {
    flexDirection: 'row',
  },
  text_selected: {
    color: fontColors.color_primary_blue,
  },
  text_unselected: {
    color: colors.color_secondary_sand,
  },
  dark_selected_bar: {
    backgroundColor: colors.color_secondary_white,
  },
  dark_unselected_bar: {
    // backgroundColor: colors.color_secondary_white,
  },
  dark_text_selected: {
    color: fontColors.color_white,
  },
  dark_text_unselected: {
    color: fontColors.color_white,
  },
});
