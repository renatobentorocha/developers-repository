import { all, takeLatest } from 'redux-saga/effects';

import { Types as UsersTypes } from '../ducks/Users';
import { addUser, deleteUser } from './Users';

export default function* rootSaga() {
  yield all([takeLatest(UsersTypes.ADD_REQUEST, addUser), 
    takeLatest(UsersTypes.DELETE_REQUEST, deleteUser)]);
}
