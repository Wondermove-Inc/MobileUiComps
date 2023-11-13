import {StyleSheet} from 'react-native';
import {colors, fontColors} from '@styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header_container: {
    flexDirection: 'row',
    minHeight: 56,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: colors.color_secondary_lightgray,
    borderBottomWidth: 1.5,
  },
  back_button_style: {
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  header_title: {
    justifyContent: 'center',
  },
  item_dark_title: {
    color: fontColors.color_white,
  },
  group_container: {
    padding: 20,
  },
  dark_group_container: {
    backgroundColor: colors.color_secondary_darkgray,
    padding: 20,
  },
  item_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  input_style: {
    minWidth: 210,
  },
  dark_item_status_text: {
    color: fontColors.color_white,
  },
});
