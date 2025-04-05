function enableLightMode() {
  document.body.setAttribute("data-mode", "light");
  localStorage.setItem("lightmode", "active");
};

function disableLightMode() {
    document.body.setAttribute("data-mode", "dark");
    localStorage.setItem("lightmode", "");
};

export function initModeSwitch() {
  const $modeButton = document.getElementById("mode-button");

  let lightMode = localStorage.getItem("lightmode");
  lightMode === "active"? enableLightMode(): disableLightMode();

  $modeButton.addEventListener("click", () => {
    lightMode = localStorage.getItem("lightmode");
    lightMode !== "active" ? enableLightMode() : disableLightMode();
  });
}
