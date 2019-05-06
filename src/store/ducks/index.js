import { combineReducers } from 'redux';

import users from './Users';
import modal from './modal';

export default combineReducers({
  users,
  modal,
});
