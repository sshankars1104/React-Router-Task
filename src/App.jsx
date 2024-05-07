import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/components/Home/Home";
import FullStackDevelopment from "./assets/components/FullStackDevelopment/FullStackDevelopment";
import DataScience from "./assets/components/DataScience/DataScience";
import CyberSecurity from "./assets/components/CyberSecurity/CyberSecurity";
import Career from "./assets/components/Career/Career";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/fullStackDevelopment"
            element={<FullStackDevelopment />}
          />
          <Route path="/dataScience" element={<DataScience />} />
          <Route path="/cyberSecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App