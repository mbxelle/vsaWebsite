import { useEffect } from "react";

export function useGoogleTranslate() {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      /* global google */
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "en,vi" },
        "google_translate_element"
      );
    };
    const s = document.createElement("script");
    s.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    s.async = true;
    document.body.appendChild(s);
    return () => {
      document.body.removeChild(s);
      delete window.googleTranslateElementInit;
    };
  }, []);
}

export function translatePage(lang) {
  const select = document.querySelector("#google_translate_element select");
  if (!select) return;
  for (let i = 0; i < select.options.length; i++) {
    if (select.options[i].value.includes(lang)) {
      select.selectedIndex = i;
      select.dispatchEvent(new Event("change"));
      break;
    }
  }
}
