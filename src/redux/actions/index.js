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

/* let hipHopRandomArtists = [];
let popRandomArtists = [];
let rockRandomArtists = []; */

let headers = new Headers({
  // sets the headers
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0"
});

export const getFetchSongs = (artistName) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_SONGS_LOADING_ON });
      let res = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`, {
        method: "GET",
        headers
      });
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

/* handleArtist = async (artistName, domQuerySelector) => {
  // artistName = "eminem", "metallica", etc...
  // domQuerySelector = "#rockSection" etc...
  try {
    let response = await fetch(
      'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
        artistName,
      {
        method: 'GET',
        headers,
      }
    ) // gets the information
    if (response.ok) {
      let result = await response.json() // transforms the response to json
      let songInfo = result.data
      let div = document.querySelector(domQuerySelector)
      div.innerHTML += albumCard(songInfo[0]) // create a new album tyle
    } else {
      console.log('error')
    }
  } catch (err) {
    console.log(err)
  }
}
 */
