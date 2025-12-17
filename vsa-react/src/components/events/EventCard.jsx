export default function EventCard({
  name,
  desc,
  time,
  month,
  day,
  ticketsUrl,
}) {
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
                Get Tickets
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
