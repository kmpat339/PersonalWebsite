import { setFooterYear } from "./footerYear.js";
import { initTimeLine } from "./timeline.js";

setFooterYear();
/* Curious about this. typewriteTagLine(); is called on line 6 but declared on line 8.
I thought you had to declare functions before calling them. I look it up and it does work
since function declarations get hoised but just threw me off reading top to bottom. 
I would suggest its cleaner to put function call after declaration like with imports.
 */
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
