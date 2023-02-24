import { useEffect } from "react";
import { SingleSongComp } from "./SingleSongComp";
import { getFetchSongs } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export const HomePage = () => {
  const hasError = useSelector((state) => state.songs.hasError);
  const hasErrorMessage = useSelector((state) => state.songs.errorMsg);
  const loading = useSelector((state) => state.songs.isLoading);
  const jobs = useSelector((state) => state.songs.jobs);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getFetchSongs("queen"));
  };

  return (
    <>
      <div className="row">
        <div className="col-10">
          <div id="searchResults" style={{ display: "none" }}>
            <h2>Search Results</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              onSubmit={handleSubmit}
            ></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
              <SingleSongComp />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            ></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
