import {StyleSheet} from 'react-native';
import {colors, height, padding} from '@styles';

const styles = StyleSheet.create({
  button_base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    flexDirection: 'row',
    paddingHorizontal: padding.button_horizon,
  },

  tiny_button: {
    minHeight: height.button_tiny,
  },
  small_button: {
    minHeight: height.button_small,
  },
  medium_button: {
    minHeight: height.button_medium,
  },
  large_button: {
    minHeight: height.button_large,
  },
  giant_button: {
    minHeight: height.button_giant,
  },

  button_primary_default: {
    backgroundColor: colors.color_primary_blue,
  },
  button_primary_disabled: {
    backgroundColor: colors.color_secondary_gray,
  },
  button_primary_hover: {
    backgroundColor: colors.color_primary_hover_blue,
  },

  button_sub_default: {
    backgroundColor: colors.color_secondary_skyblue,
  },
  button_sub_disabled: {
    backgroundColor: colors.color_secondary_lightgray,
  },
  button_sub_hover: {
    backgroundColor: colors.color_secondary_hover_skyblue,
  },

  button_line_default: {
    borderColor: colors.color_primary_blue,
    backgroundColor: colors.color_secondary_white,
    borderWidth: 2,
  },
  button_line_disabled: {
    borderColor: colors.color_secondary_gray,
    backgroundColor: colors.color_secondary_white,
    borderWidth: 2,
  },
  button_line_hover: {
    borderColor: colors.color_secondary_gray,
    backgroundColor: colors.color_secondary_white,
    borderWidth: 2,
  },

  button_ghost_default: {
    backgroundColor: null,
  },
  button_ghost_disabled: {
    backgroundColor: null,
  },

  button_ghost_hover: {
    backgroundColor: colors.color_secondary_hover_white,
  },

  text_primary_default: {
    color: colors.color_secondary_white,
  },
  text_primary_disabled: {
    color: colors.color_secondary_white,
  },
  text_primary_hover: {
    color: colors.color_secondary_white,
  },

  text_sub_default: {
    color: colors.color_primary_blue,
  },
  text_sub_disabled: {
    color: colors.color_secondary_sand,
  },
  text_sub_hover: {
    color: colors.color_primary_blue,
  },

  text_line_default: {
    color: colors.color_primary_blue,
  },
  text_line_disabled: {
    color: colors.color_secondary_gray,
  },
  text_line_hover: {
    color: colors.color_primary_hover_blue,
  },

  text_ghost_default: {
    color: colors.color_primary_blue,
  },
  text_ghost_disabled: {
    color: colors.color_secondary_gray,
  },
  text_ghost_hover: {
    color: colors.color_primary_hover_blue,
  },

  left_icon_margin: {
    marginRight: 4,
  },
  right_icon_margin: {
    marginLeft: 4,
  },

  icon_primary_default: {
    tintColor: colors.color_secondary_white,
  },
  icon_primary_disabled: {
    tintColor: colors.color_secondary_white,
  },
  icon_primary_hover: {
    tintColor: colors.color_secondary_white,
  },

  icon_sub_default: {
    tintColor: colors.color_primary_blue,
  },
  icon_sub_disabled: {
    tintColor: colors.color_secondary_sand,
  },
  icon_sub_hover: {
    tintColor: colors.color_primary_blue,
  },

  icon_line_default: {
    tintColor: colors.color_primary_blue,
  },
  icon_line_disabled: {
    tintColor: colors.color_secondary_gray,
  },
  icon_line_hover: {
    tintColor: colors.color_primary_hover_blue,
  },

  icon_ghost_default: {
    tintColor: colors.color_primary_blue,
  },
  icon_ghost_disabled: {
    tintColor: colors.color_secondary_gray,
  },
  icon_ghost_hover: {
    tintColor: colors.color_primary_hover_blue,
  },
});

export default styles;
