import { useEffect, useRef, useState } from "react";

/**
 * Adds a one-time "reveal on scroll" effect. Attach the returned ref to an
 * element that also has the `reveal` class; `is-visible` is added when it
 * scrolls into view. Respects prefers-reduced-motion (reveals immediately).
 *
 * @param {{ threshold?: number, rootMargin?: string }} [options]
 */
export function useReveal(options = {}) {
  const { threshold = 0.15, rootMargin = "0px 0px -10% 0px" } = options;
  const ref = useRef(null);

  // Start visible when animation can't or shouldn't run.
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    if (typeof IntersectionObserver === "undefined") return true;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visible, threshold, rootMargin]);

  return [ref, visible];
}
