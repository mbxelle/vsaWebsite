import { useEffect, useState, useCallback } from "react";

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

function Archive() {
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
      if (!Array.isArray(data?.items)) throw new Error("Bad payload");
      setItems(data.items);
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
      <h1 id="tmvsa-archive-title">ARCHIVE</h1>
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
            <p>Loading gallery…</p>
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
              <strong>Heads up:</strong> The gallery feed didn’t load.
            </p>
            <ol
              style={{
                textAlign: "left",
                display: "inline-block",
                margin: "8px 0",
                paddingLeft: "18px",
              }}
            >
              <li>
                Ensure the Apps Script is deployed as a{" "}
                <em>Web App</em> with access <em>Anyone</em>.
              </li>
              <li>
                Make the Drive folder/images “Anyone with the link:
                Viewer”.
              </li>
              <li>Verify the APPS_SCRIPT_URL and FOLDER_ID constants.</li>
            </ol>
            <button
              type="button"
              onClick={() => setReloadKey((k) => k + 1)}
              style={{ marginTop: "8px", padding: "8px 12px" }}
            >
              Retry
            </button>
          </div>
        )}

        {/* gallery grid */}
        {!error && Array.isArray(items) && (
          <div id="gallery" className="grid">
            {items.map((item) => (
              <div className="card" key={item.id}>
                <a
                  href={item.full}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={escapeHtml(item.name || "")}
                >
                  <img
                    src={item.thumb}
                    alt={item.caption || item.name || "Gallery image"}
                    loading="lazy"
                  />
                </a>
                {item.caption && (
                  <div className="caption">
                    {escapeHtml(item.caption)}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Archive;
