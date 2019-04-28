import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import { push } from 'connected-react-router';
import api from '../../services/api';

import MeetUpsActions from '../ducks/meetups';

export function* requestSubscript() {
  const response = yield call(api.get, 'meetupssubscript');

  yield put(MeetUpsActions.meetUpsSuccessSubscript(response.data));
}

export function* requestNotSubscript() {
  const response = yield call(api.get, 'meetupsnotsubscript');

  yield put(MeetUpsActions.meetUpsSuccessNotSubscript(response.data));
}

export function* requestRecommended() {
  const response = yield call(api.get, 'meetupsrecomended');

  yield put(MeetUpsActions.meetUpsSuccessRecommended(response.data));
}

export function* requestPerTitle({ search }) {
  if (search) {
    const responseSubscript = yield call(
      api.get,
      `meetupssubscriptbytitle/${encodeURIComponent(search)}`,
    );

    const response = yield call(api.get, `meetupsbytitle/${encodeURIComponent(search)}`);

    const responseRecommended = yield call(
      api.get,
      `meetupsrecommendedbytitle/${encodeURIComponent(search)}`,
    );

    yield put(MeetUpsActions.meetUpsSuccessSubscript(responseSubscript.data));
    yield put(MeetUpsActions.meetUpsSuccessNotSubscript(response.data));
    yield put(MeetUpsActions.meetUpsSuccessRecommended(responseRecommended.data));
  } else {
    const responseSubscript = yield call(api.get, 'meetupssubscript');
    const responseNotSubscript = yield call(api.get, 'meetupsnotsubscript');
    const responseRecommended = yield call(api.get, 'meetupsrecomended');

    yield put(MeetUpsActions.meetUpsSuccessSubscript(responseSubscript.data));
    yield put(MeetUpsActions.meetUpsSuccessNotSubscript(responseNotSubscript.data));
    yield put(MeetUpsActions.meetUpsSuccessRecommended(responseRecommended.data));
  }
}

export function* requestPost({ data }) {
  try {
    yield call(api.post, 'meetups', data);

    yield put(MeetUpsActions.meetUpsPostSuccess());
    yield put(push('/'));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha',
        message: 'Falha ao inserir o meetup, tente novamente!',
      }),
    );

    // yield put(push('/signin'));
  }
}
