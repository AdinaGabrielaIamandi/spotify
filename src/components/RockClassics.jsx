/* eslint-disable react-hooks/exhaustive-deps */
import { getFetchSongs } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const RockClassics = () => {
  const songs = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  /*   const handleSubmit = async (e) => {
    e.preventDefault();
  }; */

  useEffect(() => {
    dispatch(getFetchSongs("queen"));
  }, []);
  console.log(songs.data);

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
      {songs.map((s) => (
        <div>
          <div className="col text-center" id={s.id}>
            <a href="alt">
              <img className="img-fluid" src={s.album.cover_medium} alt="1" />
            </a>
            <p>
              <a href="alt">
                Album: {} <br />
              </a>
              <a href="alt">Artist: {} </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
