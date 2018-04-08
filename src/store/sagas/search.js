import api from 'services/api';
import { call, put, select } from 'redux-saga/effects';

import { Creators as SearchActions } from 'store/ducks/search';

export function* search (action) {
  try {
    const response = yield call(api.get, `/songs?q=${action.payload.term}`);
    yield put(SearchActions.searchSuccess(response.data));
  }
  catch (err) {
    yield put(SearchActions.searchFailure('Erro ao carregar dados da API'));
  }
}
