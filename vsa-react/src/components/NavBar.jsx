import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const closeMenu = () => setOpen(false);

  return (
    <nav id="navbar" aria-label="Primary">
      {/* logo */}
      <div className="nav_img">
        <img id="vsa_logo" src="/tmvsa_logo2.png" alt="VSA logo" />
      </div>

      {/* spotify player (always visible, all screen sizes) */}
      <div className="nav-spotify">
        <iframe
          src="https://open.spotify.com/embed/playlist/53UpweUL2dbKjnJSHhleow"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="TMVSA Playlist"
        />
      </div>

      {/* desktop nav links (will be hidden on mobile by CSS) */}
      <ul className="nav-links">
        <li><a href="#anchor1">{t("nav.about")}</a></li>
        <li><a href="#anchor2">{t("nav.events")}</a></li>
        <li><a href="#anchor3">{t("nav.execs")}</a></li>
        <li><a href="#anchor4">{t("nav.archive")}</a></li>
        <li>
          <div className="lang-buttons" role="group" aria-label="Language selection">
            <button onClick={() => changeLanguage("en")} className="lang-btn">🇨🇦</button>
            <button onClick={() => changeLanguage("vi")} className="lang-btn">🇻🇳</button>
          </div>
        </li>
      </ul>

      {/* mobile hamburger (only shows on small screens by CSS) */}
      <button
        className="mobile-btn"
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open menu"
        aria-expanded={open}
      >
        ☰
      </button>

      {/* mobile dropdown (anchors + language; spotify stays in navbar) */}
      {open && (
        <div className="mobile-dropdown">
          <div className="mobile-links">
            <a href="#anchor1" onClick={closeMenu}>{t("nav.about")}</a>
            <a href="#anchor2" onClick={closeMenu}>{t("nav.events")}</a>
            <a href="#anchor3" onClick={closeMenu}>{t("nav.execs")}</a>
            <a href="#anchor4" onClick={closeMenu}>{t("nav.archive")}</a>
          </div>

          <div className="lang-buttons" role="group" aria-label="Language selection">
            <button onClick={() => changeLanguage("en")} className="lang-btn">🇨🇦</button>
            <button onClick={() => changeLanguage("vi")} className="lang-btn">🇻🇳</button>
          </div>
        </div>
      )}
    </nav>
  );
}
