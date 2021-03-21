/* start part Certificates */
var Certificates = document.querySelector(".Certificates"),
    pairant = Certificates.querySelectorAll(".pairant"),
    overlay = Certificates.querySelector(".overlay");
var serces= ["./img/portofolio 1/1.jpg","./img/portofolio 1/2.jpg"];
var click = 0;
function poper() {
    setTimeout(() => {
        var image = document.createElement("img");
        overlay.firstElementChild.appendChild(image);
        image.src = serces[click]
        overlay.firstElementChild.firstElementChild.classList.add("toggel");
        
    },300);
    overlay.style.opacity = "1";
    overlay.style.visibility = "visible";
    document.body.style.overflow = "hidden";
}

pairant.forEach(ele => {
        ele.onclick = function() {
            click = this.getAttribute("data-numper");
            poper();
        }
    })



overlay.querySelectorAll("i")[1].onclick = function() {
    if(click == 0) {
        click = 1;
    } else {
        click = 0
    }
    overlay.firstElementChild.firstElementChild.remove();
    poper();
}
overlay.querySelectorAll("i")[2].onclick = function() {
    if(click == 1) {
        click = 0;
    } else {
        click = 1
    }
    overlay.firstElementChild.firstElementChild.remove();
    poper();
}
document.addEventListener("click",function(e) {
    if(e.target.classList.contains("overlay") || e.target.classList.contains("close")) {
        overlay.style.opacity = "0";
        overlay.style.visibility = "hidden";
        document.body.style.overflow = "scroll";
        overlay.firstElementChild.firstElementChild.remove();
    }
})
/* end part Certificates */

/* start part skills */
var skills = document.querySelector(".skills");
var colaps = skills.querySelectorAll(".colaps");
function collap(ele,start,end,time) {
    "use strict";
var stoper = setInterval(function() {
    if(start > end) {
        clearInterval(stoper)
    } else {
        ele.lastElementChild.firstElementChild.style.width = start + "%";
        ele.firstElementChild.lastElementChild.innerHTML = start + "%";
        start++;
    }
},time)
}

/* end part skills */

/* start part scroll */
var UppButton = document.body.querySelector(".UppButton");
var navbar = document.body.querySelector(".sizeing .navbar");
var skills = document.querySelector(".skills");

window.onscroll = function() {
    if(window.document.documentElement.scrollTop > 250) {
        UppButton.style.opacity = "1";
        UppButton.style.visibility = "visible";
        navbar.classList.add("toggel")
    } else {
        UppButton.style.opacity = "0";
        UppButton.style.visibility = "hidden";
        navbar.classList.remove("toggel")
    }
    if(window.scrollY >= skills.offsetTop - 300 && window.scrollY < skills.offsetTop - 280){
        collap(colaps[0],0,70,10);
        collap(colaps[1],0,90,10);
        collap(colaps[2],0,50,10);
        collap(colaps[3],0,80,10);
        collap(colaps[4],0,100,10);
        collap(colaps[5],0,88,10);
        collap(colaps[6],0,69,10);
        collap(colaps[7],0,50,10);
    }
}
UppButton.onclick = function () {
    "use strict";
    var stoper = setInterval(() => {
        if(window.document.documentElement.scrollTop <= 0) {
            clearInterval(stoper)
        } else {
            window.scrollBy(0,-10);
        }
    }, 5);
}
/* end part scroll */