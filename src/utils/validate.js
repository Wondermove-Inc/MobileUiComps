export const verifyEmail = email => {
  let regExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regExp.test(email);
};

export const checkName = name => {
  let regExp = /^[a-zA-z]+$/;

  if (name.length < 2) {
    return false;
  }
  return regExp.test(name);
};

export const checkDate = date => {
  let regExp = RegExp(/^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[012])(19|20)\d\d$/);

  return regExp.test(date);
};

export const verifyPassword = password => {
  let regExp = RegExp(
    /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{6,16}$/,
  );
  return regExp.test(password);
};

export const verifyPhone = phoneNumber => {
  let regExp = /^01([0|1|6|7|8|9])([0-9]{4})([0-9]{4})$/;

  return regExp.test(phoneNumber);
};

export const checkSMScode = smsCode => {
  let regExp = /^([0-9]{6})$/;

  return regExp.test(smsCode);
};

export const checkCVV = cvv => {
  let regExp = /^([0-9]{3})$/;

  if (regExp.test(cvv)) {
    return true;
  } else {
    return false;
  }
};

export const checkCardNum = number => {
  let regExp = /^([0-9]{12})$/;

  if (regExp.test(number)) {
    return true;
  } else {
    return false;
  }
};
