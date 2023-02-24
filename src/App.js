import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarLeft } from "./components/NavbarLeft";
import { Footerbar } from "./components/Footerbar";

function App() {
  return (
    <div className="conatiner-fluid">
      <BrowserRouter>
        <div className="row">
          <NavbarLeft />
          <Routes>
            <Route />
          </Routes>
        </div>
        <Footerbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
