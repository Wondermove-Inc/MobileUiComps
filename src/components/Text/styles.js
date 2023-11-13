import {StyleSheet} from 'react-native';
import {fontTypes, fontColors, fontSizes} from '@styles';

export default StyleSheet.create({
  headline_1: {
    fontFamily: fontTypes.hyundai_sans_head_medium,
    fontSize: fontSizes.size_headline_1,
    color: fontColors.color_darkgray,
  },
  headline_2: {
    fontFamily: fontTypes.hyundai_sans_head_medium,
    color: fontColors.color_darkgray,
    fontSize: fontSizes.size_headline_2,
  },
  headline_3: {
    fontFamily: fontTypes.hyundai_sans_head_medium,
    color: fontColors.color_darkgray,
    fontSize: fontSizes.size_headline_3,
  },
  headline_4: {
    fontFamily: fontTypes.hyundai_sans_head_medium,
    color: fontColors.color_darkgray,
    fontSize: fontSizes.size_headline_4,
  },
  bg_type: {
    fontFamily: fontTypes.hyundai_sans_head_medium,
    color: fontColors.color_darkgray,
    fontSize: fontSizes.size_bgtype,
  },
  intro_text: {
    fontFamily: fontTypes.hyundai_sans_head_regular,
    color: fontColors.color_darkgray,
    fontSize: fontSizes.size_introtext,
  },
  body: {
    color: fontColors.color_darkgray,
    fontSize: fontSizes.size_body,
    fontFamily: fontTypes.hyundai_sans_text_regular,
  },
  subtext: {
    color: fontColors.color_darkgray,
    fontSize: fontSizes.size_subtext,
    fontFamily: fontTypes.hyundai_sans_text_regular,
  },
  button: {
    color: fontColors.color_darkgray,
    fontSize: fontSizes.size_button,
    fontFamily: fontTypes.hyundai_sans_head_regular,
  },
  links: {
    color: fontColors.color_primary_blue,
    fontSize: fontSizes.size_links,
    fontFamily: fontTypes.hyundai_sans_head_regular,
    textDecorationLine: 'underline',
  },
  label: {
    color: fontColors.color_darkgray,
    fontSize: fontSizes.size_label,
    fontFamily: fontTypes.hyundai_sans_head_medium,
  },
  mini_label: {
    color: fontColors.color_darkgray,
    fontSize: fontSizes.size_minilabel,
    fontFamily: fontTypes.hyundai_sans_head_medium,
  },
});
