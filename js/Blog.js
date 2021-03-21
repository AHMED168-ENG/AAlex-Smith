var UppButton = document.body.querySelector(".UppButton");
var navbar = document.body.querySelector(".sizeing .navbar");
window.onscroll = function () {
    if (window.document.documentElement.scrollTop > 250) {
        UppButton.style.opacity = "1";
        UppButton.style.visibility = "visible";
        navbar.classList.add("toggel");
    } else {
        UppButton.style.opacity = "0";
        UppButton.style.visibility = "hidden";
        navbar.classList.remove("toggel");
    }
};
UppButton.onclick = function () {
    "use strict";
    var stoper = setInterval(() => {
        if (window.document.documentElement.scrollTop <= 0) {
            clearInterval(stoper);
        } else {
            window.scrollBy(0, -10);
        }
    }, 5);
};
