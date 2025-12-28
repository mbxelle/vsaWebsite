import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

/**
 * MascotFollower component that follows the cursor.
 * Uses a React Portal to render at the body root, avoiding stacking context issues.
 * Uses requestAnimationFrame and direct DOM manipulation for 60fps movement.
 */
export default function MascotFollower({ src }) {
  const mascotRef = useRef(null);

  useEffect(() => {
    let x = 0;
    let y = 0;
    let rafId = null;

    const updatePosition = () => {
      if (mascotRef.current) {
        // Use translate3d for hardware acceleration and avoid sub-pixel jitter
        // Added !important to ensure it overrides any other styles
        mascotRef.current.style.setProperty(
          "transform",
          `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`,
          "important"
        );
      }
      rafId = null;
    };

    const onMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      
      x = clientX;
      y = clientY;

      if (!rafId) {
        rafId = requestAnimationFrame(updatePosition);
      }
    };

    // Listen to window to catch movements outside specific elements
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("pointermove", onMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Use a Portal to ensure the mascot is outside any overflow:hidden or transform containers
  return createPortal(
    <img
      ref={mascotRef}
      id="banban-portal"
      src={src}
      alt="Banban"
      style={{
        position: "fixed",
        width: "50px",
        height: "auto",
        pointerEvents: "none",
        zIndex: 2147483647, // Maximum possible z-index
        top: 0,
        left: 0,
        visibility: "visible",
        willChange: "transform",
        transition: "none",
        userSelect: "none",
        display: "block",
      }}
    />,
    document.body
  );
}
