import { useEffect } from "react";

export function useInstagramEmbed() {
  useEffect(() => {
    const s = document.createElement("script");
    s.async = true;
    s.src = "//www.instagram.com/embed.js";
    document.body.appendChild(s);
    return () => {
      document.body.removeChild(s);
    };
  }, []);
}
