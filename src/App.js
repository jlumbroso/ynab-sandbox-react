import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import CostSharingForYnab from "./components/CostSharingForYnab";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cost-sharer" element={<CostSharingForYnab />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
