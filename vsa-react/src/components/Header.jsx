import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <section className="header">
      {/* Join Us Widget */}
      <div
        style={{
          background: "#ffc800",
          borderRadius: "22px",
          padding: "28px 24px",
          width: "340px",
          textAlign: "center",
          boxShadow: "0 10px 20px rgba(0,0,0,.2)",
          border: "3px solid #7E1E12",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            fontSize: "1.7rem",
            marginBottom: "10px",
          }}
        >
          📣
        </div>

        <h3
          style={{
            fontSize: "2.6rem",
            fontWeight: "900",
            lineHeight: "1",
            margin: "0 0 24px 0",
            textTransform: "uppercase",
            color: "#7E1E12",
            letterSpacing: "0.02em",
          }}
        >
          {t("events.join_team_title")}
        </h3>

        <a
          href="https://forms.gle/51DpDbq921EwXCDLA"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#fff47d",
            color: "#7E1E12",
            textDecoration: "none",
            padding: "14px 34px",
            borderRadius: "999px",
            fontWeight: "700",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "1.2rem",
            border: "2px solid #7E1E12",
          }}
        >
          {t("events.join_team_button")}
        </a>
      </div>

      {/* Existing Homepage */}
      <div id="intro">
        <h1>{t("header.title")}</h1>
        <h2>{t("header.subtitle")}</h2>

        <div className="button">
          <a href="#anchor1">{t("header.button")}</a>
        </div>
      </div>

      <div id="image">
        <img src="/vsaTeam.png" alt="VSA team photo" />
      </div>
    </section>
  );
}
