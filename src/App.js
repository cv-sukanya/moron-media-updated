import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./RootLayout.jsx";
import { SmoothScrollProvider } from "./context/SmoothScrollContext";
import About from "./pages/About";
import AceTech from "./pages/AceTech.jsx";
import Artists from "./pages/Artists";
import BonkersCorner from "./pages/BonkersCorner.jsx";
import BrutIndiaTour from "./pages/BrutIndiaTour.jsx";
import Carlsberg from "./pages/Carlsberg.jsx";
import DiljitDocumentary from "./pages/DiljitDocumentary.jsx";
import DiluminatiTour from "./pages/DiluminatiTour";
import Fink from "./pages/Fink.jsx";
import Home from "./pages/Home";
import Interviews from "./pages/Interviews.jsx";
import Lollapalooza from "./pages/Lollapalooza.jsx";
import News from "./pages/News";
import RedLorry from "./pages/RedLorry.jsx";
import WeWomenAsia from "./pages/WeWomenAsia.jsx";
import Work from "./pages/Work";
import Services from "./pages/Services";

// import AOS from "aos";
// import 'aos/dist/aos.css';

// Create a title updater component


export default function App() {

  // Initialize AOS on mount
  // useEffect(() => {
  //   AOS.init({
  //     duration: 800,     // animation duration
  //     once: true,        // only animate once when in view
  //     offset: 100,       // offset (in px) from the original trigger point
  //   });

  //   // Refresh AOS on route change (optional, if using animations in routed components)
  //   AOS.refresh();
  // }, []);
  
  return (
    <SmoothScrollProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work/diluminati-tour" element={<DiluminatiTour />} />
            <Route path="/work/diluminati-documentary" element={<DiljitDocumentary />} />
            <Route path="/work/bonkers-corner" element={<BonkersCorner />} />
            <Route path="/work/brut-india-tour" element={<BrutIndiaTour />} />
            <Route path="/work/interviews" element={<Interviews />} />
            <Route path="/work/we-the-women-asia" element={<WeWomenAsia />} />
            <Route path="/work/ace-tech" element={<AceTech />} />
            <Route path="/work/carlsberg" element={<Carlsberg />} />
            <Route
              path="/work/red-lorry-film-festival"
              element={<RedLorry />}
            />
            <Route path="/work/lollapalooza" element={<Lollapalooza />} />
            <Route path="/work/fink" element={<Fink />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SmoothScrollProvider>

    
  );
}

