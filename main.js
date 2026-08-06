/* KeToan Cloud – shared interactions */
"use strict";

const hasGSAP = Boolean(window.gsap && window.ScrollTrigger);

if (hasGSAP) {
  gsap.registerPlugin(ScrollTrigger);

  const presets = {
    "fade-up": { y: 34, opacity: 0 },
    "fade-down": { y: -28, opacity: 0 },
    "zoom-in": { scale: .92, opacity: 0 },
    "slide-left": { x: 42, opacity: 0 },
    "slide-right": { x: -42, opacity: 0 }
  };

  document.querySelectorAll("[data-gsap]").forEach((element) => {
    const from = presets[element.dataset.gsap] || presets["fade-up"];
    const delay = Number.parseFloat(element.dataset.delay || "0");
    gsap.fromTo(element, from, {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      duration: .72,
      delay,
      ease: "power3.out",
      scrollTrigger: { trigger: element, start: "top 90%", once: true }
    });
  });

  const staggerGroup = (selector, stagger = .08) => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;
    gsap.fromTo(elements, { y: 24, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: .6,
      stagger,
      ease: "power3.out",
      scrollTrigger: { trigger: elements[0].parentElement, start: "top 86%", once: true }
    });
  };

  staggerGroup(".about-card");
  staggerGroup(".feat-card", .06);
  staggerGroup(".tn-card", .06);
  staggerGroup(".news-card", .07);
  staggerGroup(".detail-benefits li", .07);
  staggerGroup(".detail-steps li", .07);
}

/* Counters work with or without animation libraries. */
document.querySelectorAll(".stat-num[data-count]").forEach((element) => {
  const target = Number.parseInt(element.dataset.count, 10);
  const format = (value) => target >= 1000 ? value.toLocaleString("vi-VN") : String(value);

  if (!hasGSAP) {
    element.textContent = format(target);
    return;
  }

  ScrollTrigger.create({
    trigger: element,
    start: "top 90%",
    once: true,
    onEnter() {
      const state = { value: 0 };
      gsap.to(state, {
        value: target,
        duration: 1.35,
        ease: "power2.out",
        onUpdate: () => { element.textContent = format(Math.round(state.value)); }
      });
    }
  });
});

/* Hero chart bars on legacy inner components. */
document.querySelectorAll(".phone-chart .bar").forEach((bar, index) => {
  window.setTimeout(() => {
    bar.style.height = bar.style.getPropertyValue("--h") || "40px";
  }, 520 + index * 70);
});

/* Marquee pause. */
const marquee = document.querySelector(".marquee-track");
if (marquee) {
  marquee.addEventListener("mouseenter", () => { marquee.style.animationPlayState = "paused"; });
  marquee.addEventListener("mouseleave", () => { marquee.style.animationPlayState = "running"; });
}

/* News filter. */
document.querySelectorAll(".filter-btn[data-cat]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn[data-cat]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const category = button.dataset.cat;

    document.querySelectorAll(".news-card").forEach((card) => {
      const visible = !category || category === "all" || card.dataset.cat === category;
      card.style.display = visible ? "flex" : "none";
    });
  });
});

console.info("KeToan Cloud UI loaded");
