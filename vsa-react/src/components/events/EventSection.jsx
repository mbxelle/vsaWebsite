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
            name="Testing testing"
            desc="Play games and collect stamps for your chance to win awesome prizes!"
            time="6pm – 9pm @ Tecumseh Auditorium"
            month="september"
            day="12"
            ticketsUrl="https://www.eventbrite.com/e/orientation-event-tickets-123456789"
          />

          <div className="blur">
            <EventCard
              name="mid-autumn gala"
              desc="Mooncakes, music, and performances!"
              time="6pm – 9pm"
              month="october"
              day="1"
            />
            <EventCard
              name="study jam"
              desc="Quiet space + coffee. Bring friends!"
              time="2pm – 4pm"
              month="october"
              day="15"
            />
          </div>
        </section>
      </div>

      {/* right column: happening now with info bubble functionality */}
      <NowSection />

      {/* bottom ticker */}
      <div className="news-ticker-bottom" aria-label="Announcements">
        <div className="ticker-track">
          <span>Follow us on Instagram @torontometvsa</span>
        </div>
        <div className="ticker-track">
          <span>Follow us on Instagram @torontometvsa</span>
        </div>
      </div>
    </section>
  );
}
