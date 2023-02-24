export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_SONGS = "GET_SONGS";
export const GET_SONGS_ERROR = "GET_SONGS_ERROR";
export const GET_SONGS_LOADING_ON = "GET_SONGS_LOADING_ON";
export const GET_SONGS_LOADING_OFF = "GET_SONGS_LOADING_OFF";

export const addToFav = (props) => ({
  type: ADD_TO_FAVOURITE,
  payload: props
});

export const removeFromFav = (props) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: props
});
/* let rockArtists = ["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"];
let popArtists = ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"];
let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"]; */

export const getFetchSongs = (props) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_SONGS_LOADING_ON });
      let res = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${props}`);
      if (res.ok) {
        let { data } = await res.json();
        dispatch({ type: GET_SONGS, payload: data });
      } else {
        dispatch({ type: GET_SONGS_ERROR, payload: "Response not ok" });
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: GET_SONGS_ERROR, payload: err.message });
    } finally {
      dispatch({ type: GET_SONGS_LOADING_OFF });
    }
  };
};
