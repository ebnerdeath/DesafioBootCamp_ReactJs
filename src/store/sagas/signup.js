import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

import SignUpActions from '../ducks/signup';

export function* signUp({ user }) {
  try {
    const response = yield call(api.post, 'users', user);

    yield put(SignUpActions.signUpSuccess(response.data));
    yield put(push('/signin'));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha',
        message: 'Falha ao inserir o usuário, tente novamente!',
      }),
    );

    yield put(push('/signin'));
  }
}
