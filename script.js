const slider = document.getElementById('tikslide');
const slides = document.querySelectorAll('#tikslide .slide');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

let current = 0;
let interval;

// Save original slide HTML
const originalHTML = Array.from(slides).map(slide => slide.innerHTML);

// TikTok durations in milliseconds (with buffer)
const slideDurations = [12000, 13000, 6000];

function goToSlide(index) {
  current = index;
  slider.style.transform = `translateX(-${current * 340}px)`;
  refreshAllTikToks(); // Refresh only the visible one
}

function refreshAllTikToks() {
  slides.forEach((slide, index) => {
    slide.innerHTML = ''; // Clear all slides
  });

  setTimeout(() => {
    slides[current].innerHTML = originalHTML[current]; // Reload only current slide
    loadTikTokScript(); // Re-trigger embed
  }, 100);
}

function loadTikTokScript() {
  const existing = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
  if (existing) existing.remove();

  const script = document.createElement('script');
  script.src = "https://www.tiktok.com/embed.js";
  script.async = true;
  document.body.appendChild(script);
}

function startRefreshLoop() {
  clearTimeout(interval);
  interval = setTimeout(() => {
    refreshAllTikToks();
    startRefreshLoop(); // loop refresh
  }, slideDurations[current]);
}

// Button handlers
nextBtn.addEventListener('click', () => {
  if (current < slides.length - 1) {
    clearTimeout(interval);
    goToSlide(current + 1);
    startRefreshLoop();
  }
});

prevBtn.addEventListener('click', () => {
  if (current > 0) {
    clearTimeout(interval);
    goToSlide(current - 1);
    startRefreshLoop();
  }
});

// Initialize
goToSlide(0);
startRefreshLoop();

function reloadInstagramEmbed() {
  const wrapper = document.getElementById("insta-slide");
  wrapper.innerHTML = `
    <blockquote class="instagram-media"
      data-instgrm-captioned
      data-instgrm-permalink="https://www.instagram.com/reel/DJHrIPrPVQx/"
      data-instgrm-version="14"
      style="max-width: 340px; min-width: 326px; width: 100%; margin: 12px auto;">
    </blockquote>
  `;

  const oldScript = document.querySelector('script[src="//www.instagram.com/embed.js"]');
  if (oldScript) oldScript.remove();

  const script = document.createElement("script");
  script.src = "//www.instagram.com/embed.js";
  script.async = true;
  document.body.appendChild(script);
}

reloadInstagramEmbed();
setInterval(reloadInstagramEmbed, 20000);
