import { all, takeLatest } from 'redux-saga/effects';

import { Types as AlbumsTypes } from 'store/ducks/albums';
import { Types as SearchTypes } from 'store/ducks/search';
import { Types as PlayerTypes } from 'store/ducks/player';

import { getAlbums } from './albums';
import { search } from './search';
import { setSong, play, pause, next, previous } from './player';

export default function* rootSaga() {
  return yield all([
    takeLatest(AlbumsTypes.GET_REQUEST, getAlbums),
    takeLatest(SearchTypes.REQUEST, search),
    takeLatest(PlayerTypes.SET_SONG_REQUEST, setSong),
    takeLatest(PlayerTypes.PLAY, play),
    takeLatest(PlayerTypes.PAUSE, pause),
    takeLatest(PlayerTypes.NEXT, next),
    takeLatest(PlayerTypes.PREVIOUS, previous),
  ]);
}
