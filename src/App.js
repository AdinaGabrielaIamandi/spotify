import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarLeft } from "./components/NavbarLeft";
import { Footerbar } from "./components/Footerbar";
import { NavbarTop } from "./components/NavbarTop";
import { HomePage } from "./components/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="conatiner-fluid">
          <div className="row">
            <NavbarLeft />
            <div className="col-12 col-md-9 offset-md-3 mainPage">
              <NavbarTop />
              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footerbar />
      </BrowserRouter>
    </>
  );
}

export default App;
