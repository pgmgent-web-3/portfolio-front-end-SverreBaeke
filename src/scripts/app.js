const $dialog = document.querySelector("dialog");

function addListenerToButton(btnType, action, dialog = null) {
  const $button = document.querySelector(`[data-btnType=${btnType}]`);
  $button.addEventListener("click", () => {
    if (dialog) {
      dialog[action]();
    } else {
      const isExpanded = $button.getAttribute('aria-expanded') === 'true'; 
      $button.setAttribute("aria-expanded", !isExpanded);
      action();
    }
  });
}

function openNav() {
  document.body.classList.toggle("nav-open");
}

addListenerToButton("dropdown", openNav);

if ($dialog) {
  addListenerToButton("openDialog", "showModal", $dialog);
  addListenerToButton("closeDialog", "close", $dialog);
}
