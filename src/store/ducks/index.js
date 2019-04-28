import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as toastr } from 'react-redux-toastr';
import { reducer as signup } from './signup';
import { reducer as auth } from './auth';
import { reducer as preferences } from './preferences';
import { reducer as meetups } from './meetups';

export default history => combineReducers({
  signup,
  auth,
  preferences,
  meetups,
  toastr,
  router: connectRouter(history),
});
