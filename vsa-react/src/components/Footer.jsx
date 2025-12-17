import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <p>{t("footer.copyright")}</p>
      <div className="footer-social" aria-label="Social media">
        <a href="https://www.instagram.com/torontometvsa/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src="/instagram.png" alt="Instagram logo" />
        </a>
        <a href="https://www.facebook.com/TorontoMetVSA/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <img src="/facebook.png" alt="Facebook logo" />
        </a>
        <a href="https://www.tiktok.com/@tmuvsa" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <img src="/tiktok.png" alt="TikTok logo" />
        </a>
        <a href="https://ca.linkedin.com/company/torontometvsa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src="/linkedin.png" alt="LinkedIn logo" />
        </a>
      </div>
    </footer>
  );
}
