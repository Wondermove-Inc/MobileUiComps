import React from 'react';
import {Image} from 'react-native';

import PropsType from 'prop-types';

/**
 * @param {String} name - Write the icon name.
 */

const Icon = ({name, ...props}) => {
  let img;

  switch (name) {
    case 'calendar':
      img = require('../assets/image/icon_calendar.png');
      break;

    case 'time':
      img = require('../assets/image/icon_time.png');
      break;

    case 'done':
      img = require('../assets/image/icon_done.png');
      break;

    case 'check':
      img = require('../assets/image/icon_check.png');
      break;

    case 'credit_card':
      img = require('../assets/image/icon_credit_card.png');
      break;

    case 'edit':
      img = require('../assets/image/icon_edit.png');
      break;

    case 'more':
      img = require('../assets/image/icon_more.png');
      break;

    case 'search':
      img = require('../assets/image/icon_search.png');
      break;

    case 'remove':
      img = require('../assets/image/icon_remove.png');
      break;

    case 'close':
      img = require('../assets/image/icon_close.png');
      break;

    case 'image':
      img = require('../assets/image/icon_image.png');
      break;

    case 'file':
      img = require('../assets/image/icon_file.png');
      break;

    case 'place':
      img = require('../assets/image/icon_place.png');
      break;

    case 'people':
      img = require('../assets/image/icon_people.png');
      break;

    case 'camera':
      img = require('../assets/image/icon_camera.png');
      break;

    case 'cart':
      img = require('../assets/image/icon_cart.png');
      break;

    case 'mic':
      img = require('../assets/image/icon_mic.png');
      break;

    case 'send':
      img = require('../assets/image/icon_send.png');
      break;

    case 'heart_empty':
      img = require('../assets/image/icon_heart_empty.png');
      break;

    case 'heart_fill':
      img = require('../assets/image/icon_heart_fill.png');
      break;

    case 'heart_disabled':
      img = require('../assets/image/icon_heart_disabled.png');
      break;

    case 'share':
      img = require('../assets/image/icon_share.png');
      break;

    case 'visibility':
      img = require('../assets/image/icon_visibility.png');
      break;

    case 'visibility_off':
      img = require('../assets/image/icon_visibility_off.png');
      break;

    case 'email':
      img = require('../assets/image/icon_email.png');
      break;

    case 'person':
      img = require('../assets/image/icon_person.png');
      break;

    case 'person_add':
      img = require('../assets/image/icon_person_add.png');
      break;

    case 'facebook':
      img = require('../assets/image/icon_sns_facebook.png');
      break;

    case 'google':
      img = require('../assets/image/icon_sns_google.png');
      break;

    case 'twitter':
      img = require('../assets/image/icon_sns_twitter.png');
      break;

    case 'password':
      img = require('../assets/image/icon_password.png');
      break;

    case 'add':
      img = require('../assets/image/icon_add.png');
      break;

    case 'arrow_forward':
      img = require('../assets/image/icon_arrow_forward.png');
      break;

    case 'arrow_down':
      img = require('../assets/image/icon_arrow_down.png');
      break;

    case 'arrow_up':
      img = require('../assets/image/icon_arrow_up.png');
      break;

    case 'call':
      img = require('../assets/image/icon_call.png');
      break;

    case 'arrow_right':
      img = require('../assets/image/icon_arrow_right.png');
      break;

    case 'star_empty':
      img = require('../assets/image/icon_star_empty.png');
      break;

    case 'layout':
      img = require('../assets/image/icon_layout.png');
      break;

    case 'arrow_left':
      img = require('../assets/image/icon_arrow_left.png');
      break;

    case 'chat':
      img = require('../assets/image/icon_chat.png');
      break;

    case 'bookmark_fill':
      img = require('../assets/image/icon_bookmark_fill.png');
      break;
    case 'bookmark_empty':
      img = require('../assets/image/icon_bookmark_empty.png');
      break;

    case 'bookmark':
      img = require('../assets/image/icon_bookmark.png');
      break;

    case 'library':
      img = require('../assets/image/icon_library.png');
      break;

    case 'documentation':
      img = require('../assets/image/icon_documentation.png');
      break;

    case 'libraries':
      img = require('../assets/image/icon_libraries.png');
      break;

    case 'settings':
      img = require('../assets/image/icon_settings.png');
      break;

    case 'filter_empty':
      img = require('../assets/image/icon_filter_empty.png');
      break;

    case 'filter_fill':
      img = require('../assets/image/icon_filter_fill.png');
      break;

    case 'checkbox_light':
      img = require('../assets/image/icon_checkbox_light.png');
      break;
    case 'checkbox_selected_light':
      img = require('../assets/image/icon_checkbox_selected_light.png');
      break;
    case 'checkbox_selected_disabled_light':
      img = require('../assets/image/icon_checkbox_selected_disabled_light.png');
      break;
    case 'checkbox_unselected_disabled_light':
      img = require('../assets/image/icon_checkbox_unselected_disabled_light.png');
      break;

    case 'checkbox_dark':
      img = require('../assets/image/icon_checkbox_dark.png');
      break;
    case 'checkbox_selected_dark':
      img = require('../assets/image/icon_checkbox_selected_dark.png');
      break;
    case 'checkbox_selected_disabled_dark':
      img = require('../assets/image/icon_checkbox_selected_disabled_dark.png');
      break;
    case 'checkbox_unselected_disabled_dark':
      img = require('../assets/image/icon_checkbox_unselected_disabled_dark.png');
      break;

    case 'radio_unselected_light':
      img = require('../assets/image/icon_radio_unselected_light.png');
      break;
    case 'radio_selected_light':
      img = require('../assets/image/icon_radio_selected_light.png');
      break;
    case 'radio_selected_disabled_light':
      img = require('../assets/image/icon_radio_selected_disabled_light.png');
      break;
    case 'radio_unselected_disabled_light':
      img = require('../assets/image/icon_radio_unselected_disabled_light.png');
      break;

    case 'radio_unselected_dark':
      img = require('../assets/image/icon_radio_unselected_dark.png');
      break;
    case 'radio_selected_dark':
      img = require('../assets/image/icon_radio_selected_dark.png');
      break;
    case 'radio_selected_disabled_dark':
      img = require('../assets/image/icon_radio_selected_disabled_dark.png');
      break;
    case 'radio_unselected_disabled_dark':
      img = require('../assets/image/icon_radio_unselected_disabled_dark.png');
      break;

    case 'toggle_unchecked':
      img = require('../assets/image/icon_toggle_unchecked.png');
      break;
    case 'toggle_checked':
      img = require('../assets/image/icon_toggle_checked.png');
      break;
    case 'toggle_checked_disabled':
      img = require('../assets/image/icon_toggle_checked_disabled.png');
      break;
    case 'toggle_unchecked_disabled':
      img = require('../assets/image/icon_toggle_unchecked_disabled.png');
      break;
  }

  return <Image {...props} source={img} />;
};

Icon.propTypes = {
  name: PropsType.string.isRequired,
};

export default Icon;
