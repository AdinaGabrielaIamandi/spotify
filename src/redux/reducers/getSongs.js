import { GET_SONGS, GET_SONGS_ERROR, GET_SONGS_LOADING_ON, GET_SONGS_LOADING_OFF } from "./../actions/index";

const initialState = {
  songs: [],
  hasError: false,
  isLoading: false,
  errorMsg: ""
};

const getSongs = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        songs: action.payload
      };
    case GET_SONGS_ERROR:
      return {
        ...state,
        hasError: true,
        errorMsg: action.payload
      };
    case GET_SONGS_LOADING_ON:
      return {
        ...state,
        isLoading: true
      };
    case GET_SONGS_LOADING_OFF:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default getSongs;
