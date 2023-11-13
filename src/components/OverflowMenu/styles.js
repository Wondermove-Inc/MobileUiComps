import {StyleSheet} from 'react-native';
import {colors} from '@styles';

export default StyleSheet.create({
  other_item: {
    borderTopColor: colors.color_secondary_lightgray,
    borderBottomColor: colors.color_secondary_lightgray,
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
  },
  item_base: {
    padding: 16,
    flexDirection: 'row',
  },
  menu_container: {
    position: 'absolute',
    borderColor: colors.color_secondary_lightgray,
    borderWidth: 1,
    width: '100%',
    backgroundColor: colors.color_secondary_white,
    justifyContent: 'center',
  },
  icon_style: {
    marginRight: 10,
  },
  icon_disabled_off: {
    tintColor: colors.color_primary_blue,
  },
  icon_disabled_on: {
    tintColor: colors.color_secondary_lightgray,
  },
  text_disabled_on: {
    color: colors.color_secondary_lightgray,
  },
});
