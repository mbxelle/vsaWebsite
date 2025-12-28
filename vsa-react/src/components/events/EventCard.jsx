import { useTranslation } from "react-i18next";

export default function EventCard({
  name,
  desc,
  time,
  month,
  day,
  ticketsUrl,
}) {
  const { t } = useTranslation();

  return (
    <div className="event-widget">
      <div className="event-left">
        <div className="event-description">
          <div className="event-header">
            <span className="event-name">{name}</span>
            {ticketsUrl && (
              <a
                href={ticketsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="event-btn"
              >
                {t("events.get_tickets")}
              </a>
            )}
          </div>
          {desc}
        </div>
        <div className="event-time">{time}</div>
      </div>
      <div className="event-right">
        <div className="event-month">{month}</div>
        <div className="event-day">{day}</div>
      </div>
    </div>
  );
}
