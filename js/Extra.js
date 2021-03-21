/* start part of price */
var arr = ["$72", "$162", "$204"];
var lastArr = [];
var pricNumper = document.querySelectorAll(
    ".pricing .container .row .child > span"
);
var button = document.querySelectorAll(
    ".pricing .container .row .child > button"
);
var li = document.querySelectorAll(".pricing .container > ul li");
li.forEach((ele) => {
    "use strict";
    ele.onclick = function () {
        "use strict";
        this.parentElement.classList.toggle("toggle");
        for (var i = 0; i < li.length; i++) {
            li[i].classList.toggle("toggle");
        }
        if (this.getAttribute("data-type") == "yearly") {
            pricNumper.forEach((ele, i) => {
                lastArr.push(ele.innerHTML);
                ele.innerHTML = arr[i];
            });
        }
        if (this.getAttribute("data-type") == "monthly") {
            pricNumper.forEach((ele, i) => {
                lastArr.push(ele.innerHTML);
                ele.innerHTML = lastArr[i];
            });
        }
    };
});
button.forEach((ele) => {
    ele.onclick = function () {
        "use strict";
        for (ele of button) {
            ele.classList.remove("toggle");
        }
        this.classList.add("toggle");
    };
});
/* end part of pricing */

/* start part of acordion */
var question = document.querySelectorAll(
    ".Accordion .left .main_acordion .question h4"
);
var questionLi = document.querySelectorAll(
    ".Accordion .right .artikl .content ul > li"
);
var questionP = document.querySelectorAll(
    ".Accordion .right .artikl .content p"
);
question.forEach((ele) => {
    ele.onclick = function () {
        "uses stict";
        for (var i = 0; i < question.length; i++) {
            question[i].classList.remove("toggle");
            question[
                i
            ].parentElement.nextElementSibling.firstElementChild.classList.remove(
                "toggel"
            );
        }
        this.classList.add("toggle");
        this.parentElement.nextElementSibling.firstElementChild.classList.add(
            "toggel"
        );
    };
});
questionLi.forEach((ele) => {
    ele.onclick = function () {
        "use strict";
        questionLi.forEach((ele, i) => {
            ele.classList.remove("toggel");
            questionP[i].classList.remove("toggel");
        });
        this.classList.add("toggel");
        questionP[this.getAttribute("data-numper")].classList.add("toggel");
    };
});
/* end part of acordion */

/* start part of to_do_list */
var main_list = document.querySelector(".do_list .main_list");
var enter_task_right = main_list.querySelector(".enter_task .right");
var enter_task_left = main_list.querySelector(".enter_task .left");
var li = enter_task_right.querySelectorAll("div > ul > li");
var content = main_list.querySelector(".content");
var control_Complit = main_list.querySelector(".control .Complit");
var control_Tasks = main_list.querySelector(".control .Tasks");

enter_task_right.children[1].onclick = function () {
    "use strict";
    this.nextElementSibling.classList.toggle("toggle");
};
li.forEach((ele) => {
    ele.onclick = function () {
        "use strict";
        li.forEach((ele) => {
            ele.classList.remove("toggle");
        });

        this.classList.add("toggle");

        enter_task_right.children[0].innerHTML = this.innerHTML;

        var spans = content.querySelectorAll(".task > span");
        if (this.innerHTML == "Complited") {
            spans.forEach((ele) => {
                if (ele.classList.contains("toggle")) {
                } else {
                    ele.classList.toggle("toggle");
                }
            });
            num_complit();
        } else if (this.innerHTML == "uncomplited") {
            spans.forEach((ele) => {
                if (ele.classList.contains("toggle")) {
                    ele.classList.toggle("toggle");
                } else {
                }
            });
            num_complit();
        }
    };
});
/* -------------------------------------------------------------- */
enter_task_left.lastElementChild.onclick = function () {
    "use strict";
    if (enter_task_left.firstElementChild.value == "") {
        if (document.body.querySelectorAll(".notific_list").length > 0) {
        } else {
            noti(enter_task_left, "you shuld enter eny task hir before");
        }
    } else {
        if (content.firstElementChild.classList.contains("no_task")) {
            content.firstElementChild.remove();
        }
        var test = content.querySelectorAll(".task > span");
        var boolen = false;
        test.forEach((ele) => {
            if (ele.innerHTML == enter_task_left.firstElementChild.value) {
                boolen = true;
                noti(enter_task_left, "you souldnt entar same task");
                enter_task_left.firstElementChild.value = "";
            }
        });
        if (boolen == false) {
            var newdiv = document.createElement("div");
            newdiv.classList.add("task");
            newdiv.innerHTML = `<i class="fa fa-trash-o deletico"></i>
        <span class="finish">${enter_task_left.firstElementChild.value}</span>`;
            content.appendChild(newdiv);
            var tasks = content.querySelectorAll(".task");
            enter_task_left.firstElementChild.value = "";
            enter_task_left.firstElementChild.focus();
            num_task();
            num_complit();
        }
    }
};
function num_task() {
    "use strict";
    control_Tasks.firstElementChild.innerHTML = content.querySelectorAll(
        ".task"
    ).length;
}
function num_complit() {
    "use strict";
    control_Complit.firstElementChild.innerHTML = content.querySelectorAll(
        ".task .toggle"
    ).length;
}

document.addEventListener("click", function (e) {
    "use strict";
    if (e.target.classList.contains("deletico")) {
        e.target.parentElement.remove();
        num_task();
        num_complit();
        if (content.children.length == 0) {
            var new_div = document.createElement("div");
            new_div.classList = "no_task";
            new_div.innerHTML = "No Tasks To Show Enter Task";
            content.appendChild(new_div);
        }
    }
    if (e.target.classList.contains("finish")) {
        e.target.classList.toggle("toggle");
        num_complit();
    }
});

function noti(ele, text) {
    "use strict";
    var newdiv = document.createElement("div");
    newdiv.classList = "notific_list";
    newdiv.innerHTML = text;
    document.body.insertBefore(newdiv, document.body.firstElementChild);
    var toper = ele.offsetTop + enter_task_left.offsetHeight;
    var lefter = ele.offsetLeft;
    newdiv.style.left = lefter + "px";
    newdiv.style.top = toper + "px";
    setTimeout(() => {
        document.body.querySelectorAll(".notific_list")[0].remove();
    }, 3000);
}
/* end part of to_do_list */

/* start part of scroll */
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
