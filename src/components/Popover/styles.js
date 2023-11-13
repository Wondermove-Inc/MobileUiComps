import {StyleSheet} from 'react-native';
import {colors} from '@styles';

export default StyleSheet.create({
  pop_container: {
    position: 'absolute',
    alignSelf: 'center',
    padding: 10,
    borderColor: colors.color_secondary_lightgray,
    borderWidth: 1,
    borderRadius: 4,
    zIndex: 1,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: colors.color_secondary_white,
  },
});
