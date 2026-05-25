export function setFooterYear() {
  const yearEl = document.querySelector(".footer-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
