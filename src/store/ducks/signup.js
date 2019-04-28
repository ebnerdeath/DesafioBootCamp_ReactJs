import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */
const { Types, Creators } = createActions({
  signUpRequest: ['user'],
  signUpSuccess: ['user'],
});

export const SignupTypes = Types;
export default Creators;

/* Initial State */
export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
});

/* Reducers */
export const request = state => state.merge({ loading: true });
export const success = (state, { user }) => state.merge({ loading: false, data: user });

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_UP_REQUEST]: request,
  [Types.SIGN_UP_SUCCESS]: success,
});
