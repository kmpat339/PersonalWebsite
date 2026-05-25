export function initTimeLine() {
  const markers = document.querySelectorAll(".timeline-marker");
  if (markers.length === 0) return;

  const panels = document.querySelectorAll(".timeline-panel");

  markers.forEach((marker) => {
    marker.addEventListener("click", () => {
      const targetId = marker.dataset.target;
      const panel = document.getElementById(targetId);
      if (!panel) return;

      const wasOpen = !panel.hidden;

      panels.forEach((p) => {
        p.hidden = true;
      });
      markers.forEach((m) => {
        m.setAttribute("aria-expanded", "false");
      });

      if (!wasOpen) {
        panel.hidden = false;
        marker.setAttribute("aria-expanded", "true");
      }
    });
  });
}
