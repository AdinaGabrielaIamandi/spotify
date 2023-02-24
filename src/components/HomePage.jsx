import { RockClassics } from "./RockClassics";

export const HomePage = () => {
  /*   const hasError = useSelector((state) => state.songs.hasError);
  const hasErrorMessage = useSelector((state) => state.songs.errorMsg);
  const loading = useSelector((state) => state.songs.isLoading); */

  return (
    <>
      <div className="row">
        <div className="col-10">
          <div id="searchResults" style={{ display: "none" }}>
            <h2>Search Results</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <RockClassics />
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
