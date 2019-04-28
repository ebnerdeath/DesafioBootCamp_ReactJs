import { all, takeLatest } from 'redux-saga/effects';

import { signUp } from './signup';
import { SignupTypes } from '../ducks/signup';

import { signIn } from './auth';
import { AuthTypes } from '../ducks/auth';

import { postPreferences } from './preferences';
import { PreferencesTypes } from '../ducks/preferences';

import {
  requestSubscript,
  requestNotSubscript,
  requestRecommended,
  requestPerTitle,
  requestPost,
} from './meetup';
import { MeetUpsTypes } from '../ducks/meetups';

export default function* rootSaga() {
  return yield all([
    takeLatest(SignupTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(PreferencesTypes.POST_PREFERENCES_REQUEST, postPreferences),

    takeLatest(MeetUpsTypes.MEET_UPS_REQUEST_SUBSCRIPT, requestSubscript),
    takeLatest(MeetUpsTypes.MEET_UPS_REQUEST_NOT_SUBSCRIPT, requestNotSubscript),
    takeLatest(MeetUpsTypes.MEET_UPS_REQUEST_RECOMMENDED, requestRecommended),
    takeLatest(MeetUpsTypes.MEET_UPS_REQUEST_PER_TITLE, requestPerTitle),
    takeLatest(MeetUpsTypes.MEET_UPS_POST_REQUEST, requestPost),
  ]);
}
