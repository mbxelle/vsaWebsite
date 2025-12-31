import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav id="navbar" aria-label="Primary">
      {/* logo */}
      <div className="nav_img">
        <img id="vsa_logo" src="/tmvsa_logo2.png" alt="VSA logo" />
      </div>

      {/* spotify player (center) */}
      <div className="nav-spotify">
        <iframe
          src="https://open.spotify.com/embed/playlist/1zei7OUZhfEQCUX8KM2coy"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="TMVSA Playlist"
        />
      </div>


      {/* nav links */}
      <ul>
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
    </nav>
  );
}
