import {StyleSheet} from 'react-native';
import {colors, fontColors} from '@styles';

export default StyleSheet.create({
  tooltip_container: {
    position: 'absolute',
    width: '100%',

    justifyContent: 'center',
  },
  text_container: {
    backgroundColor: colors.color_secondary_darkgray,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginTop: -4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tooltip_text: {
    color: fontColors.color_white,
  },
});
