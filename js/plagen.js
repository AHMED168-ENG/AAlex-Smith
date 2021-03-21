$(function () {
"use strict";
   AOS.init();
});


$(function () {
    
      "use strict";
    
        $('html').niceScroll({
            cursorcolor:"#f82249",
            
        });
});
$(function () {
    

});  


$(function () {
    
      "use strict";
    
  var containerEl = document.querySelector('#containermix');
  var mixer = mixitup(containerEl);
  
});
  


$(function () {
      
  wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    };
  
});

$(function () {
  jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            time:2500,
            
        });
    });
});
 $(function () {
    
    var typed = new Typed(".type", {
   strings: ["THE ANNUAL", ],
   backSpeed:90,
   typeSpeed:100,
   loop:false,
   backDelay:3000,
   showCursor:false,
   loopCount:false,
   }); 
    var typed = new Typed(".type-me", {
   strings: ["<span>MARKETING</span> CONFERENCE" ],
   backSpeed:110,
   typeSpeed:100,
   loop:false,
   startDelay:1600,
   showCursor:false
   });

  
}); 
$(function () {
    $('.owl-carousel').owlCarousel({
     loop:true,
     autoplay:true,
     margin:10,
     nav:false,
     mouseDrag:true,
     dotsEach:true,
     dots:true,
     responsive:{
         
           0:{
             items:1
         },768:{
             items:2
         }
         }
 })
 });



































