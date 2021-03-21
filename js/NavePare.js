var loading = document.querySelector(".loading");
window.onload = function () {
    setTimeout(() => {
        loading.style.display = "none";
        document.body.classList.toggle("toggle");
    }, 300);
};
var pixel = document.querySelector("body .pixel");
var backbox = document.querySelectorAll(".anim");
backbox[0].style.left = "-90px";
backbox[1].style.left = "1000px";
backbox[2].style.left = "1200px";
backbox[3].style.left = "-40px";
backbox[0].style.top = "-90px";
backbox[1].style.top = "-90px";
backbox[2].style.top = "560px";
backbox[3].style.top = "-40px";

var position;
var position1;
document.onmouseenter = function (e) {
    "use strict";
    position = e.clientX;
    position1 = e.clientY;
    console.log("ddd")
};

window.document.onmousemove = function (e) {
    "use strict";

    if (position < e.clientX) {
        for (var i = 0; i < backbox.length; i++) {
            backbox[i].style.left =
                parseFloat(backbox[i].style.left) - 0.2 + "px";
        }

        position = e.clientX;
    } else {
        for (var i = 0; i < backbox.length; i++) {
            backbox[i].style.left =
                parseFloat(backbox[i].style.left) + 0.2 + "px";

            position = e.clientX;
        }
    }
    if (e.clientY > position1) {
        backbox.forEach((ele) => {
            ele.style.top = parseFloat(ele.style.top) - 0.1 + "px";
            position1 = e.clientY;
        });
    } else {
        backbox.forEach((ele) => {
            ele.style.top = parseFloat(ele.style.top) + 0.1 + "px";
            position1 = e.clientY;
        });
    }
    var lefter = e.clientX + 10;
    var toper = e.clientY - 35;
    pixel.style.top = toper + "px";
    pixel.style.left = lefter + "px";
};

/* start nave par */
var LeftNave = document.querySelector(".LeftNave"),
    icon = document.querySelector(".icon"),
    ico = document.querySelector(".app .sizeing .navbar .ico"),
    delet = document.querySelector(".app .sizeing .navbar .delet"),
    same = document.querySelectorAll(
        ".app .sizeing .navbar .right-colom .same"
    );
icon.onclick = function () {
    "use strict";
    LeftNave.classList.toggle("togel");
    this.classList.toggle("togel");
    document.body.classList.toggle("toggle");
};
ico.onclick = function () {
    "use strict";
    this.nextElementSibling.classList.toggle("togel");
};
delet.onclick = function () {
    "use strict";
    ico.nextElementSibling.classList.toggle("togel");
};
for (ele of same) {
    ele.onclick = function () {
        "use strict";
        this.classList.toggle("toggle");
    };
}
/* end nave par */

/* start part of notificatio */
function validat(ele,param1) {
    "use strict";
        var newdiv = document.createElement("div");
        newdiv.innerHTML = param1 + "is requered";
        newdiv.setAttribute("data-num",ele.getAttribute("data-num"))
        newdiv.classList.add("notification");
        document.body.insertBefore(newdiv,document.body.firstElementChild);
        var lefter = ele.parentElement.offsetLeft;
        var toper = ele.parentElement.offsetTop + 6 + ele.offsetHeight;
        newdiv.style.top = toper + "px";
        newdiv.style.left = lefter + "px";
}
/* end part of  notification */