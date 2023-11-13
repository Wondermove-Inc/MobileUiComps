import {StyleSheet} from 'react-native';
import {colors, fontTypes, fontColors, fontSizes, height} from '@styles';

export default StyleSheet.create({
  input_base: {
    flex: 1,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 4,
    fontFamily: fontTypes.hyundai_sans_text_regular,
    fontSize: fontSizes.size_body,
  },
  input_icon: {
    position: 'absolute',
    marginHorizontal: 16,
  },

  label_error: {
    color: colors.color_secondary_active_red,
    // position: 'absolute',
  },

  light_input_general: {
    borderColor: colors.color_secondary_lightgray,
    backgroundColor: colors.color_secondary_white,
    color: colors.color_secondary_darkgray,
  },
  light_input_typing: {
    borderColor: colors.color_primary_blue,
    backgroundColor: colors.color_secondary_white,
    color: colors.color_secondary_darkgray,
  },
  light_input_danger: {
    borderColor: colors.color_secondary_active_red,
    backgroundColor: colors.color_secondary_white,
    color: colors.color_secondary_darkgray,
  },

  light_input_disabled: {
    borderColor: colors.color_secondary_lightgray,
    backgroundColor: colors.color_secondary_white,
    color: colors.color_secondary_lightgray,
  },

  dark_input_general: {
    borderColor: colors.color_secondary_lightgray,
    backgroundColor: colors.color_secondary_background_white,
    color: colors.color_secondary_white,
  },
  dark_input_typing: {
    borderColor: colors.color_secondary_white,
    backgroundColor: colors.color_secondary_active_white,
    color: colors.color_secondary_white,
  },
  dark_input_danger: {
    borderColor: colors.color_secondary_active_red,
    backgroundColor: colors.color_secondary_active_white,
    color: colors.color_secondary_white,
  },

  dark_input_disabled: {
    borderColor: colors.color_secondary_gray,
    backgroundColor: colors.color_secondary_background_white,
    color: colors.color_secondary_gray,
  },

  light_tint_general: {
    tintColor: colors.color_secondary_gray,
  },
  light_tint_typing: {
    tintColor: colors.color_primary_blue,
  },
  light_tint_danger: {
    tintColor: colors.color_secondary_active_red,
  },
  light_tint_disabled: {
    tintColor: colors.color_secondary_lightgray,
  },

  dark_tint_general: {
    tintColor: colors.color_secondary_lightgray,
  },
  dark_tint_typing: {
    tintColor: colors.color_secondary_white,
  },
  dark_tint_danger: {
    tintColor: colors.color_secondary_active_red,
  },
  dark_tint_disabled: {
    tintColor: colors.color_secondary_gray,
  },

  iconStyle: {
    tintColor: 'black',
  },

  light_label_general: {
    color: fontColors.color_darkgray,
  },
  light_label_typing: {
    color: fontColors.color_primary_blue,
  },
  light_label_danger: {
    color: colors.color_secondary_active_red,
  },
  light_label_disabled: {
    color: fontColors.color_darkgray,
  },

  dark_label_general: {
    color: colors.color_secondary_lightgray,
  },
  dark_label_typing: {
    color: fontColors.color_white,
  },
  dark_label_danger: {
    color: colors.color_secondary_active_red,
  },
  dark_label_disabled: {
    color: fontColors.color_white,
  },

  small_input: {
    height: height.input_small,
  },
  medium_input: {
    height: height.input_medium,
  },
  large_input: {
    height: height.input_large,
  },
  multiline_input: {
    height: height.input_multiline,
    textAlignVertical: 'top',
  },
});
