import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */
const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */
export const INITIAL_STATE = Immutable({
  signedIn: !!localStorage.getItem('@MeetApp:token'),
  token: localStorage.getItem('@MeetApp:token') || null,
  loading: false,
  user: JSON.parse(localStorage.getItem('@MeetApp:user')),
});

/* Reducers */
export const request = state => state.merge({ loading: true });
export const success = (state, data) => state.merge({
  signedIn: true,
  token: data.token,
  user: data.token.user[0],
  loading: false,
});

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
});
