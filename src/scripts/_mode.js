function enableLightMode() {
  document.body.setAttribute("data-mode", "light");
  localStorage.setItem("lightmode", "active");
};

function disableLightMode() {
    document.body.setAttribute("data-mode", "dark");
    localStorage.setItem("lightmode", "");
};

export function initModeSwitch() {
  const $theme = document.getElementById("theme-button");

  let lightMode = localStorage.getItem("lightmode");
  lightMode === "active"? enableLightMode(): disableLightMode();

  $theme.addEventListener("click", () => {
    lightMode = localStorage.getItem("lightmode");
    lightMode !== "active" ? enableLightMode() : disableLightMode();
  });
}
