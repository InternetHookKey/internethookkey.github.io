var x = document.getElementById("hm-container");

function closeMenu() {
    x = document.getElementById("hm-container");
    if (x.classList.contains("hide")) {
        x.classList.remove("hide");
    } else {
        x.classList.add("hide");
    }
}

window.onload = function() {
    document.getElementById("hm-close").onclick = function CloseHamburgerMenu() {
        closeMenu();
    }
    document.getElementById("hm-btn").onclick = function CloseHamburgerMenu() {
        closeMenu();
    }
}

function keyPress(e) {
    if (e.key === "Escape") {
        // write your logic here.
    }
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        x.classList.remove("hide");

    }
};