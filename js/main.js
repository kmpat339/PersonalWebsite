import { setFooterYear } from "./footerYear.js";
import { initTimeLine } from "./timeline.js";

setFooterYear();
initTimeLine();
typewriteTagLine();

function typewriteTagLine() {
  const tagline = document.querySelector(".hero-tagline");
  if (!tagline) return;

  const fullText = tagline.textContent.trim();
  tagline.textContent = "";

  let i = 0;
  const interval = setInterval(() => {
    tagline.textContent += fullText[i];
    i += 1;
    if (i >= fullText.length) clearInterval(interval);
  }, 25); // 25ms per character
}
