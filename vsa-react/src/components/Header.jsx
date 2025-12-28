import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <section className="header">
      <div id="intro">
        <h1>{t("header.title")}</h1>
        <h2>{t("header.subtitle")}</h2>
        <div className="button">
          <a href="#anchor1">{t("header.button")}</a>
        </div>
      </div>
      <div id="image">
        <img src="/vsaTeam.png" alt="vsa team photo" />
      </div>
    </section>
  );
}
