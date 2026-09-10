import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view so the header can highlight
 * the matching nav link.
 *
 * @param {string[]} sectionIds - ids of the <section> elements to observe
 * @returns {string} id of the section closest to the top of the viewport
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        // Trigger around the upper third of the viewport.
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
