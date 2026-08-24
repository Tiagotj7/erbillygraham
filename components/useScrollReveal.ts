"use client";

import { useEffect } from "react";

/**
 * Adds the `animated` class to elements matching the given selectors
 * once they scroll into view, mirroring the original vanilla-JS
 * animateOnScroll() behaviour used across the site's pages.
 */
export default function useScrollReveal(selectors: string[]) {
  useEffect(() => {
    const elements = selectors.flatMap((selector) =>
      Array.from(document.querySelectorAll<HTMLElement>(selector))
    );
    elements.forEach((el) => el.classList.add("animate-on-scroll"));

    const animateOnScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset;

      elements.forEach((element) => {
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;

        if (scrollTop + windowHeight > elementTop + elementHeight / 4) {
          element.classList.add("animated");
        }
      });
    };

    animateOnScroll();
    window.addEventListener("scroll", animateOnScroll);
    return () => window.removeEventListener("scroll", animateOnScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
