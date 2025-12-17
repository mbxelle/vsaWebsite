import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav id="navbar" aria-label="Primary">
      <div className="nav_img">
        <img id="vsa_logo" src="/tmvsa_logo2.png" alt="VSA logo" />
      </div>
      <ul>
        <li>
          <a href="#anchor1"> {t("nav.about")} </a>
        </li>
        <li>
          <a href="#anchor2"> {t("nav.events")}</a>
        </li>
        <li>
          <a href="#anchor3"> {t("nav.execs")} </a>
        </li>
        <li>
          <a href="#anchor4"> {t("nav.archive")} </a>
        </li>
        <li>
          <div
            className="lang-buttons"
            role="group"
            aria-label="Language selection"
          >
            <button
              onClick={() => changeLanguage("en")}
              className="lang-btn"
              type="button"
            >
              🇨🇦
            </button>
            <button
              onClick={() => changeLanguage("vi")}
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
