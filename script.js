
  const slides = [
    {
      q: "Where is the event?",
      a: "Tecumseh Auditorium, Sept 12, 6–9pm ($7)."
    },
    {
      q: "What can I expect?",
      a: "Travel through 3 regions of Vietnam with games, food & activities!"
    },
    {
      q: "How do I enter the raffle?",
      a: "Complete 3 region activities, collect stamps in your passport = raffle entry."
    },
    {
      q: "Prizes?",
      a: "LEGO set, matcha kit, skincare bundle, disposable camera, snacks, coffee card."
    },
    {
      q: "Dress code?",
      a: "TMVSA = flight attendants • Guests = airport fits ✈️"
    }
  ];

  let idx = 0;
  const text = document.querySelector('.bubble-text');
  const updateSlide = () => {
    text.innerHTML = `<span class="bubble-question">${slides[idx].q}</span><br>${slides[idx].a}`;
  };

  document.querySelector('.bubble-prev').onclick = () => {
    idx = (idx - 1 + slides.length) % slides.length;
    updateSlide();
  };

  document.querySelector('.bubble-next').onclick = () => {
    idx = (idx + 1) % slides.length;
    updateSlide();
  };
