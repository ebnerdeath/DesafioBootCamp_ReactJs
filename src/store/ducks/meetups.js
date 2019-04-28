import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */
const { Types, Creators } = createActions({
  meetUpsRequestSubscript: null,
  meetUpsRequestNotSubscript: null,
  meetUpsRequestRecommended: null,
  meetUpsPostRequest: ['data'],
  meetUpsRequestPerTitle: ['search'],
  meetUpsSuccessSubscript: ['data'],
  meetUpsSuccessNotSubscript: ['data'],
  meetUpsSuccessRecommended: ['data'],
  meetUpsPostSuccess: null,
});

export const MeetUpsTypes = Types;
export default Creators;

/* Initial State */
export const INITIAL_STATE = Immutable({
  loadingSubscript: false,
  loadingNotSubscript: false,
  loadingRecommended: false,
  loading: false,
  dataSubscript: [],
  dataNotSubscript: [],
  dataRecommended: [],
});

/* Reducers */
export const requestSubscript = state => state.merge({ loadingSubscript: true });
export const requestNotSubscript = state => state.merge({ loadingNotSubscript: true });
export const requestRecommended = state => state.merge({ loadingRecommended: true });
export const requestPerTitle = state => state.merge({ loadingRecommended: true });
export const requestPost = state => state.merge({ loading: true });

export const successSubscript = (state, { data }) => state.merge({
  dataSubscript: data,
  loadingSubscript: false,
});

export const successNotSubscript = (state, { data }) => state.merge({
  dataNotSubscript: data,
  loadingNotSubscript: false,
});

export const successRecommended = (state, { data }) => state.merge({
  dataRecommended: data,
  loadingRecommended: false,
});

export const successPost = state => state.merge({ loading: false });

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.MEET_UPS_REQUEST_SUBSCRIPT]: requestSubscript,
  [Types.MEET_UPS_REQUEST_NOT_SUBSCRIPT]: requestNotSubscript,
  [Types.MEET_UPS_REQUEST_RECOMMENDED]: requestRecommended,
  [Types.MEET_UPS_REQUEST_PER_TITLE]: requestPerTitle,
  [Types.MEET_UPS_POST_REQUEST]: requestPost,

  [Types.MEET_UPS_SUCCESS_SUBSCRIPT]: successSubscript,
  [Types.MEET_UPS_SUCCESS_NOT_SUBSCRIPT]: successNotSubscript,
  [Types.MEET_UPS_SUCCESS_RECOMMENDED]: successRecommended,
  [Types.MEET_UPS_POST_SUCCESS]: successPost,
});
