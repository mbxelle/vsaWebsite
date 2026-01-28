import { useState, useEffect } from "react";
import MascotFollower from "./components/MascotFollower.jsx";
import Navbar from "./components/NavBar.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import EventsSection from "./components/events/EventSection.jsx";
import Execs from "./components/Execs.jsx";
import Archive from "./components/Archive.jsx";
import Footer from "./components/Footer.jsx";


export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on mount
    checkMobile();

    // Listen for resize events
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <>
      {/* floating mascot - hidden on mobile */}
      {!isMobile && <MascotFollower src="/banban.png" />}

      {/* main site content */}
      <Navbar />
      <Header />
      <About />
      <EventsSection />
      <Execs />
      <Archive />
      <Footer />
    </>
  );
}
