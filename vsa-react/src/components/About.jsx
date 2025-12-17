import { useInstagramEmbed } from "../hooks/useInstagramEmbed.js";

function AboutSection() {
  return (
    <section className="about" aria-labelledby="anchor1">
      <h1 id="anchor1">about us</h1>
      <div className="about-message">
        <p>
          We’re a student-led community dedicated to celebrating and sharing
          Vietnamese culture through events, food, language, and friendships.
          Whether you’re Vietnamese or just curious, everyone is welcome to
          learn, connect, and have fun with us! Stay tuned for our events!
        </p>
      </div>
      <div className="social-icons">
        <a
          href="https://www.instagram.com/torontometvsa/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img src="/instagram.png" alt="Instagram logo" />
        </a>
        <a
          href="https://www.facebook.com/TorontoMetVSA/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <img src="/facebook.png" alt="Facebook logo" />
        </a>
        <a
          href="https://www.tiktok.com/@tmuvsa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <img src="/tiktok.png" alt="TikTok logo" />
        </a>
        <a
          href="https://ca.linkedin.com/company/torontometvsa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img src="/linkedin.png" alt="LinkedIn logo" />
        </a>
      </div>
      <div className="about-instagram" aria-label="Instagram feed">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DGZuh2OOxRB/"
          data-instgrm-version="14"
        />
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/reel/DGkBnB4ONEp/"
          data-instgrm-version="14"
        />
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/reel/DFY6st3PrvS/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
        />
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/reel/DGyqei4PkhM/?utm_source=ig_embed&utm_campaign=loading"
          data-instgrm-version="14"
        />
      </div>
    </section>
  );
}

export default function About() {
  useInstagramEmbed();
  return <AboutSection />;
}
