import { all, takeLatest } from 'redux-saga/effects';

import { Types as AlbumsTypes } from 'store/ducks/albums';
import { getAlbums } from './albums';

export default function* rootSaga() {
  return yield all([
    takeLatest(AlbumsTypes.GET_REQUEST, getAlbums),
  ]);
}
