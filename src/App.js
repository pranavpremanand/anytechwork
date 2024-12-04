import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { lazy, memo, Suspense, useEffect } from "react";
import NormalizeSlash from "./components/NormalizeSlash";
import WhatsAppIcon from "./components/WhatsAppIcon";
import { LoadingSpinner } from "./components/LoadingSpinner";
import SpinnerContextProvider, { LoadingSpinnerContext } from "./components/SpinnerContext";

const Home = lazy(() => import("./pages/Home"));
const OurServices = lazy(() => import("./pages/OurServices"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const WebDevelopment = lazy(() => import("./pages/ServicesPages/WebDevelopment"));
const ServicePageLayout = lazy(() => import("./components/Website/ServicePageLayout"));
const AppDevelopment = lazy(() => import("./pages/ServicesPages/AppDevelopment"));
const ArtificialIntelligence = lazy(() => import("./pages/ServicesPages/ArtificialIntelligence"));
const BlockChain = lazy(() => import("./pages/ServicesPages/BlockChain"));
const RPA = lazy(() => import("./pages/ServicesPages/RPA"));
const ARAndVR = lazy(() => import("./pages/ServicesPages/ARAndVR"));
const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));

Aos.init({
  once: true,
  duration: 500,
  offset: -50,
});

function App() {
  return (
    <BrowserRouter>
      <SpinnerContextProvider>
        <LoadingSpinnerContext />
        <Suspense fallback={<LoadingSpinner />}>
          <ScrollToTop />
          <NormalizeSlash>
            <WhatsAppIcon />
            <Routes>
              <Route path="*" element={<Navigate to="/" replace />} />
              <Route path="/" element={<Home />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/services" element={<OurServices />} />

              {/* Services Detail Routes with Layout */}
              <Route path="/services" element={<ServicePageLayout />}>
                <Route path="web-development" element={<WebDevelopment />} />
                <Route path="app-development" element={<AppDevelopment />} />
                <Route
                  path="artificial-intelligence"
                  element={<ArtificialIntelligence />}
                />
                <Route path="blockchain" element={<BlockChain />} />
                <Route path="rpa" element={<RPA />} />
                <Route path="ar-vr" element={<ARAndVR />} />
              </Route>

              {/* Generic Routes */}
              <Route
                path="/web-development"
                element={<LandingPage page={"web-development"} />}
              />
              <Route
                path="/app-development"
                element={<LandingPage page={"app-development"} />}
              />
            </Routes>
          </NormalizeSlash>
        </Suspense>
      </SpinnerContextProvider>
    </BrowserRouter>
  );
}

export default memo(App);

// scroll to top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
