import logo from "./logo.svg";
import "./App.css";

/** FIXME: import the following and include them!

import LandingPage from "./components/LandingPage";
import CostSharingForYnab from "./components/CostSharingForYnab";

 */
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import CostSharingForYnab from "./components/CostSharingForYnab";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/cost-sharer" element={<CostSharingForYnab />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </header>
    </div>
  );
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
