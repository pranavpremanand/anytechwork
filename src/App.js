import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/web-development" element={<LandingPage />} />
      <Route path="/app-development" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
