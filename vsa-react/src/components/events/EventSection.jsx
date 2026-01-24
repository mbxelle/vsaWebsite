import { useTranslation } from "react-i18next";
import EventCard from "./EventCard.jsx";
import NowSection from "./NowSection.jsx";

export default function EventsSection() {
  const { t } = useTranslation();

  return (
    <section className="events-section" aria-labelledby="anchor2">
      {/* top ticker */}
      <div className="news-ticker" aria-label="Announcements">
        <div className="ticker-track">
          <span>{t("events.ticker_announcement")}</span>
        </div>
        <div className="ticker-track">
          <span>{t("events.ticker_follow")}</span>
        </div>
      </div>

      {/* main title */}
      <h3 id="anchor2">{t("events.title")}</h3>

      {/* left column: upcoming */}
      <div className="events">
        <section className="upcoming-section">
          <h2 id="upcoming-title">{t("events.upcoming_title")}</h2>

          <EventCard
            name={t("events.tet.name")}
            desc={t("events.tet.desc")}
            time={t("events.tet.time")}
            month={t("events.tet.month")}
            day="16"
            ticketsUrl=""
          />

          <div className="blur">
            <EventCard
              name={t("events.mid_autumn.name")}
              desc={t("events.mid_autumn.desc")}
              time={t("events.mid_autumn.time")}
              month={t("events.mid_autumn.month")}
              day="1"
            />

            <EventCard
              name={t("events.study_jam.name")}
              desc={t("events.study_jam.desc")}
              time={t("events.study_jam.time")}
              month={t("events.study_jam.month")}
              day="15"
            />
          </div>
        </section>
      </div>

      {/* right column */}
      <NowSection />

      {/* bottom ticker */}
      <div className="news-ticker-bottom" aria-label="Announcements">
        <div className="ticker-track">
          <span>{t("events.ticker_follow")}</span>
        </div>
        <div className="ticker-track">
          <span>{t("events.ticker_follow")}</span>
        </div>
      </div>
    </section>
  );
}
