import { translatePage } from "../hooks/useGoogleTranslate.js";

export default function Navbar() {
  return (
    <nav id="navbar" aria-label="Primary">
      <div className="nav_img">
        <img id="vsa_logo" src="/tmvsa_logo2.png" alt="VSA logo" />
      </div>
      <ul>
        <li>
          <a href="#anchor1"> About Us </a>
        </li>
        <li>
          <a href="#anchor2"> Events</a>
        </li>
        <li>
          <a href="#anchor3"> Execs </a>
        </li>
        <li>
          <a href="#anchor4"> Archive </a>
        </li>
        <li>
          <div
            className="lang-buttons"
            role="group"
            aria-label="Language selection"
          >
            <button
              onClick={() => translatePage("en")}
              className="lang-btn"
              type="button"
            >
              🇨🇦
            </button>
            <button
              onClick={() => translatePage("vi")}
              className="lang-btn"
              type="button"
            >
              🇻🇳
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
}
