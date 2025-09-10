
//------------text bubble under event poster (event section javascript)--------------------
document.addEventListener('DOMContentLoaded', () => {
  // Slides (edit your text here for event poster description and info)
  const slides = [
    { q: "Where is the event?", a: "Tecumseh Auditorium, Sept 12, 6–9pm!" },
    { q: "What can I expect?",  a: "Travel through 3 regions of Vietnam with each region having fun games & activities where you can win stamps for your chance to a raffle entry!" },
    { q: "How do I enter the raffle?", a: "Complete 3 region activities, collect stamps in your passport = raffle entry." },
    { q: "Prizes?", a: "LEGO set, matcha kit, skincare bundle, disposable camera, snacks, coffee card." }
  ];

  const bubble = document.querySelector('.info-bubble');
  if (!bubble) return;

  const textEl = bubble.querySelector('.bubble-text');
  const prevBtn = bubble.querySelector('.bubble-prev');
  const nextBtn = bubble.querySelector('.bubble-next');

  let idx = 0;
  const render = () => {
    const s = slides[idx];
    textEl.innerHTML = `<span class="bubble-question">${s.q}</span><br>${s.a}`;
  };

  const next = () => { idx = (idx + 1) % slides.length; render(); };
  const prev = () => { idx = (idx - 1 + slides.length) % slides.length; render(); };

  // --- autoplay + pause on hover ---
  let timer = null;
  const startAuto = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    stopAuto();
    timer = setInterval(next, 3000); // change slide every 3s
  };
  const stopAuto = () => { if (timer) { clearInterval(timer); timer = null; } };

  bubble.addEventListener('mouseenter', stopAuto);
  bubble.addEventListener('mouseleave', startAuto);

  // Buttons
  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  // Init
  render();
  startAuto();
});

//mascot following cursor icon 
const banban = document.getElementById("banban");

document.addEventListener("mousemove", (e) => {
  banban.style.left = e.pageX + "px";
  banban.style.top = e.pageY + "px";
});

document.addEventListener("mousedown", (e) => {
  banban.style.left = e.clientX + "px";
  banban.style.top = e.clientY + "px";
});

