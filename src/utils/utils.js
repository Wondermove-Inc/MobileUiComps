import {PERMISSIONS, RESULTS, request, check} from 'react-native-permissions';
import {launchImageLibrary} from 'react-native-image-picker';
import moment from 'moment';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Platform} from 'react-native';

const showPicker = () => {
  const options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  launchImageLibrary(options, response => {
    if (response.didCancel) {
      console.log('cancle');
    } else if (response.errorMessage != null) {
      console.log('error : ', response.errorMessage);
    } else {
      return response?.assets.map(({uri}) => uri);
    }
  });
};

export const PickImage = async () => {
  if (!checkIOS()) {
    check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
      .then(result => {
        if (result == RESULTS.GRANTED) {
          showPicker();
        } else {
          request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
        }
      })
      .catch(error => {
        console.log(error);
      });
  } else if (checkIOS()) {
    check(PERMISSIONS.IOS.PHOTO_LIBRARY)
      .then(result => {
        if (result == RESULTS.GRANTED) {
          showPicker();
        } else {
          request(PERMISSIONS.IOS.PHOTO_LIBRARY);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};

export const getTime = () => {
  const date = new Date();
  const isPM = date.getHours() > 11 ? 'PM' : 'AM';
  const minute =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

  return `${
    isPM == 'PM'
      ? date.getHours() > 12
        ? date.getHours() - 12
        : date.getHours()
      : date.getHours()
  }:${minute} ${isPM}`;
};

export const getCalenderTitle = (month, year) => {
  switch (month) {
    case 0:
      month = 'January';
      break;

    case 1:
      month = 'February';
      break;

    case 2:
      month = 'March';
      break;

    case 3:
      month = 'April';
      break;

    case 4:
      month = 'May';
      break;

    case 5:
      month = 'June';
      break;

    case 6:
      month = 'July';
      break;

    case 7:
      month = 'August';
      break;

    case 8:
      month = 'September';
      break;

    case 9:
      month = 'October';
      break;

    case 10:
      month = 'November';
      break;

    case 11:
      month = 'December';
      break;
  }

  return `${month} ${year}`;
};

export const getToday = () => {
  return moment().format('YYYY-MM-DD');
};

export const autocompleteFilter = (data, text) => {
  return data.filter(
    item =>
      item.title
        .toString()
        .toLowerCase()
        .indexOf(text.toString().toLowerCase()) > -1,
  );
};

export const checkIOS = () => {
  return Platform.OS === 'ios' ? true : false;
};

export const transformDate = day => {
  return `${day.date}/${day.month + 1}/${day.year}`;
};

export const getIPhoneNotchHeight = () => {
  return getStatusBarHeight(true);
};
