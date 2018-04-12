import Immutable from 'seamless-immutable';

export const Types = {
  SET_SONG_REQUEST: 'player/SET_SONG_REQUEST',
  SET_SONG_SUCCESS: 'player/SET_SONG_SUCCESS',
  SET_SONG_FAILURE: 'player/SET_SONG_FAILURE',
  PLAY: 'player/PLAY',
  PAUSE: 'player/PAUSE',
};

const initialState = Immutable({
  currentSong: {},
  loadingId: null,
  error: null,
  paused: false,
});

export default function player(state = initialState, action) {
  switch (action.type) {
    case Types.SET_SONG_REQUEST:
      return { ...state, loadingId: action.payload.song.id };
    case Types.SET_SONG_SUCCESS:
      return {
        ...state,
        list: action.payload.list,
        currentSong: action.payload.song,
        loadingId: null,
        error: null,
      };
    case Types.SET_SONG_FAILURE:
      return { ...state, error: action.payload.error, loadingId: null };
    case Types.PLAY:
      return { ...state, paused: false };
    case Types.PAUSE:
      return { ...state, paused: true };
    default:
      return state;
  }
}

export const Creators = {
  setSongRequest: (song, list) => ({
    type: Types.SET_SONG_REQUEST,
    payload: { song, list },
  }),
  setSongSuccess: (song, list) => ({
    type: Types.SET_SONG_SUCCESS,
    payload: { song, list },
  }),
  setSongFailure: error => ({
    type: Types.SET_SONG_FAILURE,
    payload: { error },
  }),

  play: () => ({
    type: Types.PLAY,
  }),

  pause: () => ({
    type: Types.PAUSE,
  }),
};
