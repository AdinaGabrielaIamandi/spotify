/* eslint-disable react-hooks/exhaustive-deps */
import { getFetchSongs } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const PopColture = () => {
  let popArtists = ["maroon5", "coldplay", "onerepublic", "jamesblunt"];
  let popRandomArtists = [];

  let songs = useSelector((state) => state.songs.pop);
  const dispatch = useDispatch();

  /*   const handleSubmit = async (e) => {
    e.preventDefault();
  }; */

  while (popRandomArtists.length < 4) {
    // pushes elements inside the array until it has 4 strings
    let artist = popArtists[Math.floor(Math.random() * popArtists.length)]; // select an element from the array with an index between 0 and 7
    if (!popRandomArtists.includes(artist)) {
      // checks if the artist is not already present in the array
      popRandomArtists.push(artist); // pushes the artist in the array
    }
  }

  /*   handleArtist(rockRandomArtists[j], "#rockSection"); */

  useEffect(() => {
    for (let j = 0; j < popArtists.length; j++) {
      dispatch(getFetchSongs(popRandomArtists[j]));
    }
  }, []);
  console.log("array iniziale", songs);
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
      {songs.map((data) => (
        <div>
          <div className="col text-center" id={data[0].id}>
            <a href="alt">
              <img className="img-fluid" src={data[0].album.cover_medium} alt="1" />
            </a>
            <p>
              <a href="alt">
                Album: {data[0].album.title} <br />
              </a>
              <a href="alt">Artist: {data[0].artist.name} </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
