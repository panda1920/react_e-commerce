import userActionTypes from './user.types';

export function setCurrentUser(user) {
  return { type: userActionTypes.SET_CURRENT_USER, payload: user };
}

export function googleSigninStart() {
  return {
    type: userActionTypes.GOOGLE_SIGNIN_START,
  };
}

export function emailSigninStart(userInfo) {
  return {
    type: userActionTypes.EMAIL_SIGNIN_START,
    payload: userInfo,
  };
}

export function signinSuccess(user) {
  return {
    type: userActionTypes.SIGNIN_SUCCESS,
    payload: user,
  };
}

export function signinFailure(error) {
  return {
    type: userActionTypes.SIGNIN_FAILURE,
    payload: error,
  };
}

export function checkUserSession() {
  return {
    type: userActionTypes.CHECK_USER_SESSION
  };
}

export function signoutStart() {
  return {
    type: userActionTypes.SIGNOUT_START,
  };
}

export function signoutSuccess() {
  return {
    type: userActionTypes.SIGNOUT_SUCCESS,
  };
}

export function signoutFailure(error) {
  return {
    type: userActionTypes.SIGNOUT_FAILURE,
    payload: error,
  };
}

export function signupStart(userInfo) {
  return {
    type: userActionTypes.SIGNUP_START,
    payload: userInfo
  };
}

export function signupSuccess() {
  return {
    type: userActionTypes.SIGNUP_SUCCESS,
  };
}

export function signupFailure(error) {
  return {
    type: userActionTypes.SIGNUP_FAILURE,
    payload: error,
  };
}