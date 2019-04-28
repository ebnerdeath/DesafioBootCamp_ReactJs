import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */
const { Types, Creators } = createActions({
  postPreferencesRequest: ['preferences'],
  postPreferencesSuccess: [],
});

export const PreferencesTypes = Types;
export default Creators;

/* Initial State */
export const INITIAL_STATE = Immutable({
  loading: false,
});

/* Reducers */
export const request = state => state.merge({ loading: true });
export const success = state => state.merge({ loading: false });

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.POST_PREFERENCES_REQUEST]: request,
  [Types.POST_PREFERENCES_SUCCESS]: success,
});
