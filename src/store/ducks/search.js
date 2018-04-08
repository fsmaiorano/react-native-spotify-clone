import Immutable from 'seamless-immutable';

export const Types = {
  REQUEST: 'search/REQUEST',
  SUCCESS: 'search/SUCCESS',
  FAILURE: 'search/FAILURE',
};

const initialState = Immutable({
  data: [],
  loading: false,
  error: null,
});

export default function search(state = initialState, action) {
  switch (action.type) {
    case Types.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.SUCCESS:
      return {
        data: action.payload.data,
        loading: false,
        error: null,
      };
    case Types.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}

export const Creators = {
  searchRequest: term => ({
    type: Types.REQUEST,
    payload: { term },
  }),

  searchSuccess: data => ({
    type: Types.SUCCESS,
    payload: {
      data,
    },
  }),

  searchFailure: error => ({
    type: Types.FAILURE,
    payload: {
      error,
    },
  }),
};
