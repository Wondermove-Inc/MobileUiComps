import {StyleSheet} from 'react-native';
import {colors} from '@styles';

export default StyleSheet.create({
  first_item_container: {
    borderTopColor: colors.color_secondary_lightgray,
    borderTopWidth: 1.5,
  },
  last_item_container: {
    borderBottomColor: colors.color_secondary_lightgray,
    borderBottomWidth: 1.5,
  },
  other_item_container: {
    borderBottomColor: colors.color_secondary_lightgray,
    borderTopColor: colors.color_secondary_lightgray,
    borderBottomWidth: 1.5,
    borderTopWidth: 1.5,
  },
  container_base: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusbar_disabled: {
    width: 8,
    backgroundColor: colors.color_secondary_white,
    minHeight: 42,
    marginRight: 12,
  },
  selected_bar: {
    width: 8,
    backgroundColor: colors.color_primary_blue,
    minHeight: 42,
    marginRight: 12,
  },
  unselected_bar: {
    width: 8,
    backgroundColor: colors.color_secondary_white,
    minHeight: 42,
    marginRight: 12,
  },
  icon_style: {
    marginRight: 12,
    width: 24,
    height: 24,
  },
  icon_selected: {
    tintColor: colors.color_primary_blue,
  },
  icon_unselected: {
    tintColor: colors.color_secondary_gray,
  },
  icon_disabled: {
    tintColor: colors.color_secondary_lightgray,
  },
  text_disabled: {
    color: colors.color_secondary_lightgray,
  },
});
