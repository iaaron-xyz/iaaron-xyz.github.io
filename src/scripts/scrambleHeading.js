const SYMBOLS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{};:,.<>?/|";

const randSymbol = () => SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

function animateScramble(el, target) {
  if (el._scrambleTimer) clearInterval(el._scrambleTimer);

  const length = target.length || 1;
  const frameCount = Math.min(90, Math.max(28, Math.round(length * 1.6)));
  let frame = 0;

  el._scrambleTimer = setInterval(() => {
    frame++;
    const settled = Math.floor((frame / frameCount) * length);
    let output = "";
    for (let i = 0; i < length; i++) {
      output += i < settled ? target[i] : randSymbol();
    }
    el.textContent = output;
    if (frame >= frameCount) {
      clearInterval(el._scrambleTimer);
      el._scrambleTimer = null;
      el.textContent = target;
    }
  }, 24);
}

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const titles = Array.from(document.querySelectorAll("[data-scramble]"));

if (
  !prefersReducedMotion &&
  "IntersectionObserver" in window &&
  titles.length
) {
  titles.forEach((el) => {
    const target = (el.dataset.scramble || el.textContent).trim();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) animateScramble(entry.target, target);
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
  });
} else {
  titles.forEach((el) => {
    animateScramble(el, (el.dataset.scramble || el.textContent).trim());
  });
}
