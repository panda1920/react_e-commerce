import { takeLatest, put, all, call } from 'redux-saga/effects';

import userActionTypes from './user.types';
import {
  signinSuccess,
  signinFailure,
  signoutSuccess,
  signoutFailure,
  signupSuccess,
  signupFailure,
} from './user.action';

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from '../../firebase/firebaseutils';

export function* userRootSaga() {
  yield all([
    call(onGoogleSigninStart),
    call(onEmailSigninStart),
    call(onCheckUserSession),
    call(onSignoutStart),
    call(onSignupStart),
  ]);
}

export function* onGoogleSigninStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}

export function* signInWithGoogle() {
  try {
    const { user: userAuth } = yield auth.signInWithPopup(googleProvider);
    yield signInWithUserAuth(userAuth);
  }
  catch (error) {
    yield put( signinFailure(error) );
  }
}

export function* onEmailSigninStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, signInWithEmail);
}

export function* signInWithEmail({ payload: {email, password} }) {
  try {
    const { user: userAuth } = yield auth.signInWithEmailAndPassword(email, password);
    yield signInWithUserAuth(userAuth);
  } catch(error) {
    yield put( signinFailure(error) );
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth)
      return;
    yield signInWithUserAuth(userAuth);
  } catch(error) {
    yield put( signinFailure(error) );
  }
}

export function* onSignoutStart() {
  yield takeLatest(userActionTypes.SIGNOUT_START, signout);
}

export function* signout() {
  try {
    yield auth.signOut();
    yield put( signoutSuccess() );
  } catch(error) {
    yield put( signoutFailure(error) );
  }
}

export function* signInWithUserAuth(userAuth) {
  try {
    const userRef = yield createUserProfileDocument(userAuth);
    const userSnapshot = yield userRef.get();
    yield put( signinSuccess({ id: userSnapshot.id, ...userSnapshot.data()}) );
  } catch(error) {
    yield put( signinFailure(error) );
  }
}

export function* onSignupStart() {
  yield takeLatest(userActionTypes.SIGNUP_START, signup);
}

export function* signup({ payload: userInfo }) {
  try {
    const { displayName, email, password } = userInfo;
    const userAuth = yield auth.createUserWithEmailAndPassword(email, password);
    yield createUserProfileDocument(userAuth, { displayName });
    yield put( signupSuccess() );
    yield signInWithUserAuth(userAuth);
  } catch(error) {
    yield put( signupFailure(error) );
  }
}