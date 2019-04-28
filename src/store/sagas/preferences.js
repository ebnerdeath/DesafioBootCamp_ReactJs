import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

import PreferencesActions from '../ducks/preferences';

export function* postPreferences({ preferences }) {
  try {
    yield call(api.post, '/user_preferences', preferences);

    yield put(PreferencesActions.postPreferencesSuccess());
    yield put(push('/'));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha',
        message: 'Falha ao inserir as preferências, tente novamente!',
      }),
    );

    yield put(push('/signin'));
  }
}
