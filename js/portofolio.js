/* start mixing */
var mixing = document.querySelector(".mixing");
var li = mixing.querySelectorAll("header ul li");
for(element of li) {
    element.onclick = function() {
        li.forEach(ele => {
            ele.style.color = "#aaa";
        })
        this.style.color = "#fff"
    }
}
  /* --------------------------------- */ 
 var overlay = mixing.querySelector(".overlay");
 var youtupe = mixing.querySelectorAll(".row .youtupe");
 var detaild = mixing.querySelectorAll(".row .detaild");
 var image = mixing.querySelectorAll(".row .image");
 var sound = mixing.querySelectorAll(".row .sound");
 var vimeo = mixing.querySelectorAll(".row .vimeo");
 function reset() {
     "use strict";
     document.body.classList.toggle("toggle");
     overlay.classList.toggle("toggle");
     if(!(overlay2.classList.contains("toggle"))) {
        document.body.classList.toggle("toggle");
     }
 }
document.addEventListener("click",function(e) {
    if(e.target.classList.contains("overlay") || e.target.classList.contains("times")) {
        overlay.firstElementChild.firstElementChild.remove();
        reset();
        overlay.querySelectorAll("i")[1].classList.add("toggle");
        overlay.querySelectorAll("i")[2].classList.add("toggle"); 
    }
})
youtupe.forEach(ele => {
    ele.onclick = function() {
        reset();
        var ifram = document.createElement("iframe");
        ifram.src = this.getAttribute("data-src");
        ifram.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        ifram.frameborder = "0";
        overlay.firstElementChild.appendChild(ifram)
    }
})
image.forEach(ele => {
    ele.onclick = function() {
        var img = document.createElement("img");
        img.src = this.firstElementChild.firstElementChild.getAttribute("src");
        overlay.firstElementChild.appendChild(img);
        reset();
    }
})
sound.forEach(ele => {
    ele.onclick = function() {
        var video = document.createElement("video");
        video.src = this.getAttribute("data-src");
        video.autoplay = "play";
        overlay.firstElementChild.appendChild(video);
        reset();
    }
})
vimeo.forEach(ele => {
    ele.onclick = function() {
        var video = document.createElement("video");
        video.src = this.getAttribute("data-src");
        video.autoplay = "play";
        video.controls = true;
        video.loop = true;
        overlay.firstElementChild.appendChild(video);
        reset();
    }
})
detaild.forEach(ele => {
    ele.onclick = function() {
        "use strict";
        num = this.getAttribute("data-index");
        repet();
        overlay2.classList.toggle("toggle");
        overlay2.style.overflow = "hidden";
        document.body.classList.toggle("toggle");
        overlay2.firstElementChild.style.display = "flex";
        setTimeout(() => {
            overlay2.firstElementChild.style.display = "none";
            overlay2.style.overflow = "scroll";
        }, 2000);
    }
})
var overlay2 = document.querySelector(".overlay2");
var overlay2_content = document.querySelectorAll(".overlay2 .content");
var carosal = overlay2.querySelector(".content1 .carosal");
var control = overlay2.querySelector(".control");
var carosalMain = overlay2.querySelector(".content1 .carosal .main");
var carosalLi = overlay2.querySelectorAll(".content1 .carosal > ul > li");
var carosalcontroll = overlay2.querySelectorAll(".content1 .carosal > i");
var content1_imagese = overlay2.querySelector(".content1 .imageer");
var content6_image = overlay2.querySelector(".content6 .div_image");
var content6_image_divs = overlay2.querySelectorAll(".content6 .div_image > div > div > div");
carosalMain.children[0].style.left = "-25%";
carosalMain.children[1].style.left = "0%";
carosalMain.children[2].style.left = "25%";
carosalMain.children[3].style.left = "50%";
carosalMain.children[4].style.left = "75%";

/* start content 1 */
/* start crosal part */
carosalcontroll[0].onclick = function() {
    "use strict";
        for(var i = 0; i < carosalMain.children.length ; i++) {
            carosalMain.children[i].style.left = (parseInt(carosalMain.children[i].style.left) - 25) + "%";
        }
        setTimeout(() => {
            var newchild = carosalMain.firstElementChild.cloneNode("true");
            carosalMain.firstElementChild.remove();
            newchild.style.left="75%"
            carosalMain.appendChild(newchild);
        }, 400);
}
carosalcontroll[1].onclick = function() {
    "use strict";
        for(var i = 0; i < carosalMain.children.length ; i++) {
            carosalMain.children[i].style.left = (parseInt(carosalMain.children[i].style.left) + 25) + "%";
        }
        setTimeout(() => {
            var newchild = carosalMain.lastElementChild.cloneNode("true");
            newchild.style.left = parseInt(carosalMain.firstElementChild.style.left) - 25 + "%";
            carosalMain.insertBefore(newchild,carosalMain.firstElementChild);
            carosalMain.lastElementChild.remove();

        }, 400);

}
/* end crosal part */
/* start image pop up content 1 */
content1_imagese.onclick = function() {
    "use strict";
    overlay.classList.toggle("toggle");
    var newImage = document.createElement("img");
    newImage.src = this.firstElementChild.src;
    overlay.firstElementChild.appendChild(newImage)
}
/* end image pop up content  */
/* end content 1 */ 
 
/* start content 6 */
var index = 0;
function bobup() {
    "use strict";
    var newimg = document.createElement("img");
    newimg.src = content6_image_divs[index].firstElementChild.src;
    overlay.firstElementChild.appendChild(newimg);
    overlay.querySelectorAll("i")[1].classList.remove("toggle");
    overlay.querySelectorAll("i")[2].classList.remove("toggle");      
}
content6_image_divs.forEach(ele => {
    ele.onclick = function() {
        overlay.classList.toggle("toggle");
        index = parseInt(this.getAttribute("data-numper"));
        bobup()
    };
})
overlay.querySelectorAll("i")[1].onclick = function() {
    "use strict";
     if(index == 2) {
         index = 0
     } else {
        index++;
     }
     overlay.firstElementChild.firstElementChild.remove();
     bobup();
}
overlay.querySelectorAll("i")[2].onclick = function() {
    "use strict";
     if(index == 0) {
         index = 2
     } else {
        index--;
     }
     overlay.firstElementChild.firstElementChild.remove();
     bobup();
}
control.children[2].onclick = function() {
    "use strict";
    overlay2.classList.toggle("toggle");
    document.body.classList.toggle("toggle");
    num=0;
    repet();
}
var num = 0;
control.children[0].onclick = function() {
    "use strict";
        control.children[1].style.display = "inline-block";
    if(num == overlay2_content.length -1 ) {
       num = 0
    } else {
        num++;
    }
    repet()
}
control.children[1].onclick = function() {
    "use strict";
        control.children[1].style.display = "inline-block";
    if(num == 0 ) {
       num = 5
    } else {
        num--;
    }
    repet()
}
function repet() {
   "use strict";
   overlay2_content.forEach(ele => {
    if(ele.classList.contains("d-none")) {
        
    }else {
        ele.classList.add("d-none");
        ele.classList.remove("d-block");
    }
})
overlay2_content[num].classList.remove("d-none");
overlay2_content[num].classList.add("d-block");
}

/* end mixing */















var UppButton = document.body.querySelector(".UppButton");
var navbar = document.body.querySelector(".sizeing .navbar");

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