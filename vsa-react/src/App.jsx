import MascotFollower from "./components/MascotFollower.jsx";
import Navbar from "./components/NavBar.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import EventsSection from "./components/events/EventSection.jsx";
import Execs from "./components/Execs.jsx";
import Archive from "./components/Archive.jsx";
import Footer from "./components/Footer.jsx";
import { useGoogleTranslate } from "./hooks/useGoogleTranslate.js";

export default function App() {
  useGoogleTranslate();

  return (
    <div>
      <div id="google_translate_element" style={{ display: "none" }}></div>
      <MascotFollower src="/banban.png" />
      <Navbar />
      <Header />
      <About />
      <EventsSection />
      <Execs />
      <Archive />
      <Footer />
    </div>
  );
}
