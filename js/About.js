/* end part compleat leeter  */
var info = document.querySelector(".info .text").firstElementChild
    .firstElementChild;
var IndexCaracter = 0;
var IndexStatment = 0;
var arr = ["wep design", "front-end developer", "free lance"];
function addLetter(element, arr, IndexCaracter, IndexStatment) {
    "use strict";
    var reset = setInterval(function () {
        if (IndexCaracter < arr[IndexStatment].length) {
            element.textContent += arr[IndexStatment].charAt(IndexCaracter);
            IndexCaracter++;
        } else {
            clearInterval(reset);
            deletLetter(element, arr, IndexCaracter, IndexStatment);
        }
    }, 200);
}
function deletLetter(element, arr, IndexCaracter, IndexStatment) {
    "use strict";
    var reset = setInterval(function () {
        if (IndexCaracter < 0) {
            if (IndexStatment >= 2) {
                IndexStatment = 0;
                addLetter(info, arr, IndexCaracter, IndexStatment);
            } else {
                IndexStatment++;
                addLetter(info, arr, IndexCaracter, IndexStatment);
            }
            clearInterval(reset);
        } else {
            element.textContent = arr[IndexStatment].slice(0, IndexCaracter);
            IndexCaracter--;
        }
    }, 200);
}
addLetter(info, arr, IndexCaracter, IndexStatment);
/* end  part compleat leeter  */

/* start  part compleat leeter  */
var MyTasks = document.querySelectorAll(".MyTasks .right h4");
function explain() {
    "use strict";
    var crDiv = document.createElement("div");
    crDiv.classList.add("notification");
    document.body.insertBefore(crDiv, document.body.firstElementChild);
    crDiv.innerHTML = this.getAttribute("title");
    this.removeAttribute("title");
    var lefter = this.offsetLeft;
    var toper = this.offsetTop + this.offsetHeight;
    crDiv.style.left = lefter + "px";
    crDiv.style.top = toper + "px";
}
MyTasks.forEach((ele) => {
    ele.onmouseenter = explain;
});
MyTasks.forEach((ele) => {
    ele.onmouseleave = remover;
});
function remover() {
    "use strict";
    this.setAttribute("title", document.body.firstElementChild.innerHTML);
    document.body.firstElementChild.remove();
}

/* end  part compleat leeter  */

/* start part compleat Fun Facts  */

function counter(start, end, time, ele) {
    "use stict";
    var stop = setInterval(() => {
        "use strict";
        if (start > end) {
            clearTimeout(stop);
        } else {
            ele.innerHTML = start;
            start++;
        }
    }, time);
}

/* end part compleat Fun Facts */

/* end part ouer_servaces */
var ouer_servacesStar = document.querySelectorAll(".ouer_servaces .starts");
function start(ele) {
    "use strict";
    for (const iterator of ele.children) {
        iterator.onclick = function () {
            for (var i1 = 0; i1 < ele.children.length; i1++) {
                ele.children[i1].style.color = "#FFFFFF";
            }
            for (
                var i = 0;
                i <= parseInt(this.getAttribute("data-numper"));
                i++
            ) {
                ele.children[i].style.color = "gold";
            }
        };
    }
}
start(ouer_servacesStar[0]);
start(ouer_servacesStar[1]);
start(ouer_servacesStar[2]);

/* end part ouer_servaces */

/* start scroll part */
var UppButton = document.body.querySelector(".UppButton");
var navbar = document.body.querySelector(".sizeing .navbar");
var Client = document.querySelector(".Client");
var span = Client.querySelectorAll("span");
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
    if (
        window.scrollY >= Client.offsetTop - 250 &&
        window.scrollY < Client.offsetTop - 230
    ) {
        counter(0, 350, 10, span[0]);
        counter(0, 250, 30, span[1]);
        counter(0, 450, 20, span[2]);
        counter(0, 150, 10, span[3]);
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
/* end scroll part */
