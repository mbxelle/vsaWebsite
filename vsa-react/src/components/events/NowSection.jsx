import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function NowSection() {
  const { t } = useTranslation();

  // CHANGE THIS (true or false) when you have a real "happening now" event and graphic poster
  const HAS_HAPPENING_NOW = false;

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const bubbleRef = useRef(null);

  const SLIDES = [
    { q: t("events.questions.where"), a: t("events.questions.where_ans") },
    { q: t("events.questions.expect"), a: t("events.questions.expect_ans") },
    { q: t("events.questions.raffle"), a: t("events.questions.raffle_ans") },
    { q: t("events.questions.prizes"), a: t("events.questions.prizes_ans") },
  ];

  const next = () => setIndex((i) => (i + 1) % SLIDES.length);
  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    if (!HAS_HAPPENING_NOW) return; // don't run carousel if nothing is live

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const startAuto = () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(next, 3000);
    };

    const stopAuto = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };

    const bubble = bubbleRef.current;
    if (!bubble) return;

    bubble.addEventListener("mouseenter", stopAuto);
    bubble.addEventListener("mouseleave", startAuto);

    startAuto();

    return () => {
      stopAuto();
      if (bubble) {
        bubble.removeEventListener("mouseenter", stopAuto);
        bubble.removeEventListener("mouseleave", startAuto);
      }
    };
  }, [HAS_HAPPENING_NOW]);

  const slide = SLIDES[index];

  // NO HAPPENING NOW MODE 
  if (!HAS_HAPPENING_NOW) {
    return (
      <section className="now-section">
        <h2 id="now-title">{t("events.happening_now")}</h2>
        <p className="now-empty-text">
          Check out recent events on our socials!
        </p>

      </section>
    );
  }

  // HAPPENING NOW MODE 
  return (
  <section className="now-section">
    <h2 id="now-title">{t("events.happening_now")}</h2>

    <p className="tet-event-title">{t("events.tet_event_title")}</p>

    <a
      href="https://eventbrite.com/your-happening-now-link"
      className="event-btn btn-now"
      target="_blank"
      rel="noopener noreferrer"
    >
      {t("events.get_tickets_now")}
    </a>
    {/*NOTE: EVENT POSTER BELOW*/}
     {/*<img src="/event-poster.png" alt="event-poster" />*/}

  {/*NOTE: EVENT FAQ BELOW*/}
     {/*  <div className="info-bubble" ref={bubbleRef}>
        <button className="bubble-prev" type="button" aria-label="Previous" onClick={prev}>
          &lt;
        </button>

        <div className="bubble-text">
          <span className="bubble-question">{slide.q}</span>
          <br />
          {slide.a}
        </div>

        <button className="bubble-next" type="button" aria-label="Next" onClick={next}>
          &gt;
        </button>
      </div>*/}
    </section>
  );
}
