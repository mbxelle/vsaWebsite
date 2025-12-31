import MascotFollower from "./components/MascotFollower.jsx";
import Navbar from "./components/NavBar.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import EventsSection from "./components/events/EventSection.jsx";
import Execs from "./components/Execs.jsx";
import Archive from "./components/Archive.jsx";
import Footer from "./components/Footer.jsx";
import SpotifyDock from "./components/SpotifyDock.jsx";

export default function App() {
  return (
    <>
      {/* floating mascot */}
      <MascotFollower src="/banban.png" />

      {/* main site content */}
      <Navbar />
      <Header />
      <About />
      <EventsSection />
      <Execs />
      <Archive />
      <Footer />

      {/* sticky Spotify playlist (stays visible while scrolling) */}
      <SpotifyDock />
    </>
  );
}
