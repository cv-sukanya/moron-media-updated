import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Footer from "./components/Footer";

function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div data-scroll-container>
      <Navbar />
      <main data-scroll-section>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default RootLayout;
