import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

import AuthActions from '../ducks/auth';

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, 'sessions', { email, password });

    localStorage.setItem('@MeetApp:token', response.data.token);
    localStorage.setItem('@MeetApp:user', JSON.stringify(response.data.user[0]));

    yield put(AuthActions.signInSuccess(response.data));
    yield put(push('/preferences'));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha',
        message: 'Verifique seu e-mail e senha!',
      }),
    );
  }
}
