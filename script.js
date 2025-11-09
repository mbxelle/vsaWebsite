
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

//----------mascot following cursor icon 

(() => {
  const banban = document.getElementById('banban');
  if (!banban) return;

  let x = 0, y = 0, raf = null;

  const paint = () => {
    banban.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    raf = null;
  };

  const onPointerMove = (e) => {
    // works for mouse & touch/pen
    const p = e.touches ? e.touches[0] : e;
    x = p.clientX;
    y = p.clientY;
    if (!raf) raf = requestAnimationFrame(paint);
  };

  // use pointer events if available; fall back to mousemove
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  // support touch-only browsers
  window.addEventListener('touchmove', onPointerMove, { passive: true });

})();
//--------archive photo slides

// Apps Script Web App URL (Deployment URL)
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxWCPtQGSPRfGSuRnUTyfVSKStna0UG5Zb0Z4pzZD6Pa2d8MbgrZ_aGVcGUwYa8w0JiMQ/exec";
// Folder to show
const FOLDER_ID = "1R2OochR-6fj_UPM0KEDcZtccSLwq7aXj";

// DOM hooks
const gallery = document.getElementById("gallery");
// Request options
const ORDER = "newest";   // newest | oldest | name
const THUMB_SIZE = "w1024"; // change to match your grid column width for sharper thumbs

// Build the feed URL (cache-busted)
const FEED_URL = () =>
  `${APPS_SCRIPT_URL}?folder=${encodeURIComponent(FOLDER_ID)}&order=${ORDER}&tsize=${THUMB_SIZE}&t=${Date.now()}`;

/** Load images from Apps Script and render grid */
/** Load images from Apps Script and render grid (static, no zoom) */
async function load() {
  try {
    gallery.innerHTML = ""; // no count text now

    const res = await fetch(FEED_URL());
    if (!res.ok) throw new Error(`Feed error: ${res.status}`);

    const data = await res.json();
    if (data.error) throw new Error(data.message || "Unknown feed error");

    const images = data.images || [];

    if (!images.length) {
      gallery.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:16px;">
          <p>No images in this folder yet.</p>
        </div>`;
      return;
    }

    // Build grid with static cards (no anchors, no data-pswp)
    gallery.innerHTML = images.map(img => `
      <div class="card">
        <img src="${img.thumb}" loading="lazy" alt="${escapeHtml(img.name)}"
             onerror="this.onerror=null;this.src='data:image/gif;base64,R0lGODlhAQABAAAAACw='">
      </div>
    `).join("");

  } catch (err) {
    console.error(err);
    gallery.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:16px;">
        <p><strong>Heads up:</strong> The gallery feed didn’t load.</p>
        <ol style="text-align:left;display:inline-block;margin:8px 0;padding-left:18px;">
          <li>Ensure the Apps Script is deployed as a <em>Web App</em> with access <em>Anyone</em>.</li>
          <li>Make the Drive folder/images “Anyone with the link: Viewer”.</li>
          <li>Verify the APPS_SCRIPT_URL and FOLDER_ID constants.</li>
        </ol>
        <button id="retry" style="margin-top:8px;padding:8px 12px;">Retry</button>
      </div>`;
    document.getElementById("retry")?.addEventListener("click", load);
  }
}


/** Escape HTML for safe captions/alt text */
function escapeHtml(s = "") {
  return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

load();

