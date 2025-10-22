// src/utils.js

// Build a map of every image under src/assets (once at build/start)
const images = import.meta.glob("./assets/**/*.{png,jpg,jpeg,svg,gif,webp}", {
  eager: true,
  import: "default",
});

/**
 * getImageUrl("nav/menuIcon.png") → resolved URL
 * getImageUrl("skills/html.png")  → resolved URL
 */
export function getImageUrl(path) {
  // Normalize to Vite’s keys: they start with "./assets/…"
  const key = `./assets/${path}`;
  const hit = images[key];
  if (!hit) {
    // Helpful console to find typos / wrong extensions / wrong folder
    console.error("[getImageUrl] Missing asset:", key);
    console.info("Available example keys:", Object.keys(images).slice(0, 10));
    return "";
  }
  return hit; // this is already the final URL
}
