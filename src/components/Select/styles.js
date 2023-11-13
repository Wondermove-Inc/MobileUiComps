import {StyleSheet} from 'react-native';
import {colors, fontColors} from '@styles';

export default StyleSheet.create({
  list_inner_container: {},
  list_outter_container: {
    height: 180,
    borderWidth: 1.5,
    borderRadius: 4,
    borderColor: colors.color_secondary_lightgray,
    width: '100%',
    backgroundColor: colors.color_secondary_white,
    position: 'absolute',
  },
  selected_index_container: {
    backgroundColor: colors.color_primary_blue,
  },
  selected_index_text: {
    color: fontColors.color_white,
  },
});
