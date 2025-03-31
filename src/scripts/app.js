function addListenerToButton(btnType, action) {
    const $button = document.querySelector(`[data-btnType=${btnType}]`);
    $button.addEventListener("click", () => {
        action()
    })
};

function openNav () {
    document.body.classList.toggle("nav-open")
};

addListenerToButton("burger", openNav)