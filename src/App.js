import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import { useEffect } from "react";

Aos.init({
  once: true,
  duration: 500,
  offset: -50,
});

function App() {
  return (
    <>
      <Routes>
        <Route path="/web-development" element={<LandingPage />} />
        <Route path="/app-development" element={<LandingPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;

// scroll to top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
