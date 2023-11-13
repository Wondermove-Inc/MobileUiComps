import {StyleSheet} from 'react-native';
import {colors} from '@styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
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

  item_container: {
    padding: 20,
  },

  text_container: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  text: {
    alignSelf: 'center',
  },
});

export default styles;
