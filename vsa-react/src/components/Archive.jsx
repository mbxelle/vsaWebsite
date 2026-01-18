import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxWCPtQGSPRfGSuRnUTyfVSKStna0UG5Zb0Z4pzZD6Pa2d8MbgrZ_aGVcGUwYa8w0JiMQ/exec";
const FOLDER_ID = "1R2OochR-6fj_UPM0KEDcZtccSLwq7aXj";
const ORDER = "newest"; // newest | oldest | name
const THUMB_SIZE = "w1024";

// small helper copied from script.js (logic only)
function escapeHtml(s = "") {
  return s.replace(/[&<>"']/g, (c) => {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[c];
  });
}

function driveIdFromUrl(url = "") {
  if (!url) return null;

  const m1 = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (m1) return m1[1];

  const m2 = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (m2) return m2[1];

  if (/^[a-zA-Z0-9_-]{20,}$/.test(url)) return url;

  return null;
}

function toPublicImg(url = "", size = "w1024") {
  const id = driveIdFromUrl(url);
  return id ? `https://lh3.googleusercontent.com/d/${id}=${size}` : url;
}

function Archive() {
  const { t } = useTranslation();
  const [items, setItems] = useState(null); // null = loading, [] = loaded no items
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0); // trigger refetch

  const load = useCallback(async () => {
    setError(null);
    setItems(null); // show loading state
    try {
      const url = `${APPS_SCRIPT_URL}?folder=${encodeURIComponent(
        FOLDER_ID
      )}&order=${ORDER}&tsize=${THUMB_SIZE}&t=${Date.now()}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const list = Array.isArray(data?.items)
        ? data.items
        : Array.isArray(data?.images)
        ? data.images
        : null;
      if (!list) throw new Error("Bad payload");
      setItems(list);
    } catch (err) {
      console.error(err);
      setError(err);
      setItems([]);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load, reloadKey]);

  return (
    <section id="anchor4" className="photo-archive">
      <h1 id="tmvsa-archive-title">{t("archive.title")}</h1>
      <div className="archive-scroll">
        {/* loading state */}
        {items === null && !error && (
          <div
            style={{
              gridColumn: "1/-1",
              textAlign: "center",
              padding: "16px",
            }}
          >
            <p>{t("archive.loading")}</p>
          </div>
        )}

        {/* error state */}
        {error && (
          <div
            style={{
              gridColumn: "1/-1",
              textAlign: "center",
              padding: "16px",
            }}
          >
            <p>
              <strong>{t("archive.error_head")}</strong>
            </p>
            <ol
              style={{
                textAlign: "left",
                display: "inline-block",
                margin: "8px 0",
                paddingLeft: "18px",
              }}
            >
              <li>{t("archive.error_step1")}</li>
              <li>{t("archive.error_step2")}</li>
              <li>{t("archive.error_step3")}</li>
            </ol>
            <button
              type="button"
              onClick={() => setReloadKey((k) => k + 1)}
              style={{ marginTop: "8px", padding: "8px 12px" }}
            >
              {t("archive.retry")}
            </button>
          </div>
        )}

        {/* gallery grid */}
        {!error && Array.isArray(items) && (
          <div id="gallery" className="grid">
            {items.map((item) => {
              const fullUrl = toPublicImg(item.full || item.thumb || "", "w2048");
              const thumbUrl = toPublicImg(item.thumb || item.full || "", THUMB_SIZE);

              return (
                <div className="card" key={item.id}>
                  <a
                    href={fullUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={escapeHtml(item.name || "")}
                  >
                    <img
                      src={thumbUrl}
                      alt={item.name || "Gallery image"}
                      loading="lazy"
                      onError={(e) => {
                        const img = e.currentTarget;

                        if (img.dataset.retried !== "1") {
                          img.dataset.retried = "1";
                          setTimeout(() => {
                            img.src = thumbUrl;
                          }, 900);
                          return;
                        }

                        if (img.src !== fullUrl) img.src = fullUrl;
                      }}
                    />
                  </a>

                  {item.caption && (
                    <div className="caption">{escapeHtml(item.caption)}</div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default Archive;
