"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SECTION_SELECTOR = [
  "main > section:not(.innerHero)",
  "main > article",
  "main > div > section",
].join(", ");

const ITEM_SELECTOR = [
  ".serviceGrid > *",
  ".servicesPageGrid > *",
  ".processList > *",
  ".contactList > *",
  ".paymentUnifiedGrid > *",
  ".documentDetailGrid > *",
].join(", ");

/*
  Scroll reveal for sections and cards.
  Only elements below the first screen are hidden, so the content
  visible on load never flashes. Without JS everything stays visible.
*/
export default function MotionReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const fold = window.innerHeight * 0.92;
    const targets: HTMLElement[] = [];

    const prepare = (el: HTMLElement, delay = 0) => {
      if (el.dataset.revealed) return;
      if (el.getBoundingClientRect().top < fold) return;
      el.dataset.revealed = "pending";
      el.style.setProperty("--reveal-delay", `${delay}ms`);
      el.classList.add("reveal");
      targets.push(el);
    };

    document.querySelectorAll<HTMLElement>(SECTION_SELECTOR).forEach((el) => prepare(el));
    document.querySelectorAll<HTMLElement>(ITEM_SELECTOR).forEach((el) => {
      const index = Array.prototype.indexOf.call(el.parentElement?.children ?? [], el);
      prepare(el, 80 + Math.min(index, 5) * 70);
    });

    const cleanup = (el: HTMLElement) => {
      el.classList.remove("reveal", "isVisible");
      el.style.removeProperty("--reveal-delay");
      el.dataset.revealed = "done";
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          observer.unobserve(el);
          el.classList.add("isVisible");
          el.addEventListener("transitionend", () => cleanup(el), { once: true });
          window.setTimeout(() => cleanup(el), 1400);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      targets.forEach(cleanup);
    };
  }, [pathname]);

  return null;
}
