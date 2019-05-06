import { call, put, select } from 'redux-saga/effects';
import { throws } from 'assert';
import api from '../../services/api';
import { Creators as UsersActions } from '../ducks/Users';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`);

    const isDuplicated = yield select(state => state.users.data.find(user => user.id === data.id));

    if (isDuplicated) throws();

    const userData = {
      id: data.id,
      login: data.login,
      name: data.name,
      avatar: data.avatar_url,
      cordinates: action.payload.cordinates,
    };

    yield put(UsersActions.addUserSuccess(userData));
  } catch (error) {
    yield put(UsersActions.addUserFailure('Erro ao adicionar usuário'));
  }
}
