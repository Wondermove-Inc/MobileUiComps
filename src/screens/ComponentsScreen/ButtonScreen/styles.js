import {StyleSheet} from 'react-native';
import {fontTypes, fontColors, fontSizes} from '@styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  status_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginStart: 10,
  },
  group_container: {
    padding: 20,
    gap: 15,
  },
  item_width: {
    minWidth: 115,
  },
  status_text: {
    fontFamily: fontTypes.hyundai_sans_head_medium,
    fontSize: fontSizes.size_minilabel,
    color: fontColors.color_darkgray,
  },
  item_appearance_text: {
    fontFamily: fontTypes.hyundai_sans_head_medium,
    fontSize: fontSizes.size_minilabel,
    color: fontColors.color_darkgray,
    flex: 1,
    alignSelf: 'center',
  },
  item_appearance_container: {
    minWidth: 115,
    paddingHorizontal: 0,
  },
  left_margin: {
    marginLeft: 20,
  },
  bottom_margin: {
    marginBottom: 15,
  },
  item_size: {
    alignSelf: 'center',
  },
  size_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
});
