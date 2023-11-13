import {StyleSheet} from 'react-native';
import {colors} from '@styles';

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.color_secondary_lightsand,
    flexGrow: 1,
  },
  item_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  margin_end: {
    marginEnd: 15,
  },

  category_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1.5,
    backgroundColor: colors.color_secondary_white,
    borderColor: colors.color_secondary_lightgray,
    paddingVertical: 32,
  },
  icon_base: {
    minHeight: 80,
    minWidth: 80,
  },
});
