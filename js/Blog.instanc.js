var instanc = document.querySelector(".app .instanc ");

/* start part pop up */
var popUp = instanc.querySelector(".information .popUp");
popUp.firstElementChild.onclick = function () {
    "use strict";
    popUp.lastElementChild.classList.toggle("toggle");
    document.body.classList.toggle("toggle");
    popUp.lastElementChild.firstElementChild.innerHTML = `
    <img src=${this.src}>
    `;
};
document.addEventListener("click", function (e) {
    "use strict";
    if (e.target.classList.contains("show")) {
        popUp.lastElementChild.classList.toggle("toggle");
        document.body.classList.toggle("toggle");
        popUp.lastElementChild.firstElementChild.firstElementChild.remove();
    }
});
/* end part pop up */

/* start part of form */
var information_form = instanc.querySelector(".information form");
information_form.querySelectorAll(".input").forEach((ele) => {
    "use strict";
    ele.firstElementChild.onfocus = function () {
        "use strict";
        this.parentElement.classList.toggle("toggle");
        this.parentElement.lastElementChild.classList.toggle("toggle");
    };
    ele.firstElementChild.onblur = function () {
        "use strict";
        this.parentElement.classList.toggle("toggle");
        this.parentElement.lastElementChild.classList.toggle("toggle");
        if (this.value.length == 0) {
            if (document.body.querySelectorAll(".notification").length < 3) {
                validat(this, this.parentElement.getAttribute("data-text"));
                this.parentElement.classList.add("toggle1");
            }
        } else {
            var numper5 = document.querySelectorAll(".notification");
            this.parentElement.classList.remove("toggle1");
            for (var i = 0; i < numper5.length; i++) {
                if (
                    numper5[i].getAttribute("data-num") ==
                    this.getAttribute("data-num")
                ) {
                    numper5[i].remove();
                }
            }
        }
    };
});

/* end part of form */

/* scroll part */
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
