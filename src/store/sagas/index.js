import { all, takeLatest } from 'redux-saga/effects';

import { Types as UsersTypes } from '../ducks/Users';
import { addUser } from './Users';

export default function* rootSaga() {
  yield all([takeLatest(UsersTypes.ADD_REQUEST, addUser)]);
}
