import {StyleSheet} from 'react-native';
import {colors, fontColors} from '@styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  item_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  light_container: {
    padding: 20,
  },
  dark_container: {
    padding: 20,
    backgroundColor: colors.color_secondary_darkgray,
  },
  dark_text: {
    color: fontColors.color_white,
  },
});
