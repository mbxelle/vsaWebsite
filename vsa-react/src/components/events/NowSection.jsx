import { useEffect, useRef, useState } from "react";

const SLIDES = [
  { q: "Where is the event?", a: "Tecumseh Auditorium, Sept 12, 6–9pm!" },
  {
    q: "What can I expect?",
    a: "Travel through 3 regions of Vietnam with each region having fun games & activities where you can win stamps for your chance to a raffle entry!",
  },
  {
    q: "How do I enter the raffle?",
    a: "Complete 3 region activities, collect stamps in your passport = raffle entry.",
  },
  {
    q: "Prizes?",
    a: "LEGO set, matcha kit, skincare bundle, disposable camera, snacks, coffee card.",
  },
];

export default function NowSection() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const bubbleRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % SLIDES.length);
  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
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
  }, []);

  const slide = SLIDES[index];

  return (
    <section className="now-section">
      <h2 id="now-title">Happening now</h2>
      {/* link to get tickets for happening now event */}
      <a
        href="https://eventbrite.com/your-happening-now-link"
        className="event-btn btn-now"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Tickets Now!
      </a>
      <img src="/event-poster.png" alt="event-poster" />
      <div className="info-bubble" ref={bubbleRef}>
        <button
          className="bubble-prev"
          type="button"
          aria-label="Previous"
          onClick={prev}
        >
          &lt;
        </button>
        <div className="bubble-text">
          <span className="bubble-question">{slide.q}</span>
          <br />
          {slide.a}
        </div>
        <button
          className="bubble-next"
          type="button"
          aria-label="Next"
          onClick={next}
        >
          &gt;
        </button>
      </div>
    </section>
  );
}
