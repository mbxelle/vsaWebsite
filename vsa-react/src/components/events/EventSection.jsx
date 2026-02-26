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

          
          <div className="blur">
          <EventCard
            name={t("events.widget1.name")}
            desc={t("events.widget1.desc")}
            time={t("events.widget1.time")}
            month={t("events.widget1.month")}
            day={t("events.widget1.day")}
            ticketsUrl=""
          />

          
            <EventCard
              name={t("events.widget2.name")}
              desc={t("events.widget2.desc")}
              time={t("events.widget2.time")}
              month={t("events.widget2.month")}
              day="25"
            />

            <EventCard
              name={t("events.widget3.name")}
              desc={t("events.widget3.desc")}
              time={t("events.widget3..time")}
              month={t("events.widget3.month")}
              day="12"
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
