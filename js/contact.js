var inputs = document.querySelectorAll(".form .sacand .input");
inputs.forEach((ele) => {
    ele.onfocus = function () {
        "use strict";
        this.parentElement.classList.add("toggle");
        ele.oninput = function () {
            "use strict";
            if (ele.value.length == 0) {
                clean(this);
                validat(this, this.getAttribute("data-name"));
                this.parentElement.classList.add("toggle1");
            } else {
                if (this.getAttribute("data-num") == "1") {
                    if (!this.value.includes("@")) {
                        clean(this);
                        validat(this, " '@' should be ");
                        this.parentElement.classList.add("toggle1");
                    } else {
                        clean(this);
                    }
                } else {
                    clean(this);
                }
            }
        };
    };
    ele.onblur = function () {
        "use strict";
        this.parentElement.classList = "";

        if (this.value.length == 0) {
            validat(this, this.getAttribute("data-name"));
            this.parentElement.classList.add("toggle1");
        }
    };
});
function clean(ele5) {
    "use strict";
    if (ele5.parentElement.classList.contains("toggle1")) {
        ele5.parentElement.classList.remove("toggle1");
    }
    var counting = document.body.querySelectorAll(".notification");
    counting.forEach((ele) => {
        if (ele.getAttribute("data-num") == ele5.getAttribute("data-num")) {
            ele.remove();
        }
    });
}

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
