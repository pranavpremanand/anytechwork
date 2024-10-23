import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";

Aos.init({
  once: true,
  duration: 500,
  offset: -50,
});

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/web-development" element={<LandingPage />} />
      <Route path="/app-development" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
