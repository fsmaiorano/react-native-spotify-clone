import { call, put, select } from 'redux-saga/effects';
import RNSound from 'react-native-sound/sound';
import { Creators as PlayerActions } from 'store/ducks/player';

const Sound = new RNSound();

export function* play() {
  try {
    yield call(Sound.play);
  } catch (error) {
    console.log(error);
  }
}

export function* pause() {
  try {
    yield call(Sound.pause);
  } catch (error) {
    console.log(error);
  }
}

export function* setSong(action) {
  try {
    if (Sound.isLoaded()) yield call(Sound.release);

    yield call(Sound.init, action.payload.song.file);
    yield call(play);
    yield put(PlayerActions.setSongSuccess(action.payload.song, action.payload.list));
  } catch (error) {
    yield put(PlayerActions.setSongFailure('Erro ao iniciar a música'));
  }
}

export function* next() {
  try {
    const player = yield select(state => state.player);
    const currentIndex = player.list.findIndex(song => song.id === player.currentSong.id);
    const nextSong = player.list[currentIndex + 1];

    if (nextSong) {
      yield put(PlayerActions.setSongRequest(nextSong, player.list));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* previous() {
  try {
    const player = yield select(state => state.player);
    const currentIndex = player.list.findIndex(song => song.id === player.currentSong.id);
    const nextSong = player.list[currentIndex - 1];

    if (nextSong) {
      yield put(PlayerActions.setSongRequest(nextSong, player.list));
    }
  } catch (error) {
    console.log(error);
  }
}
