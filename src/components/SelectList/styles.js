import {StyleSheet} from 'react-native';
import {colors} from '@styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modal_view: {
    width: '90%',
    borderColor: colors.color_secondary_active_white,
    borderRadius: 6,
    borderWidth: 1.5,
    backgroundColor: colors.color_secondary_white,
  },
  modal_text: {
    marginBottom: 20,
  },
});
