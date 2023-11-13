import {StyleSheet} from 'react-native';
import {colors} from '@styles';

export default StyleSheet.create({
  list_container: {
    position: 'absolute',
    maxHeight: 178,
    width: '100%',
    borderWidth: 1.5,
    borderColor: colors.color_secondary_lightgray,
    marginTop: 6,
    borderRadius: 4,
    backgroundColor: colors.color_secondary_white,
  },
  item_text: {
    color: colors.color_secondary_darkgray,
  },
  item_container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});
