// RESIZE MISSION BLURB

function resize() {

var img = document.getElementById('gathering');
var gatherHeight = img.height+150;
// console.log(gatherHeight);
$('#mission').css("height", gatherHeight);

 }

resize()

// DOCK NAV

window.onscroll = function () {
    if (pageYOffset >= 1) {
        $('#dock').addClass('docked');


    } else {
 		$('#dock').removeClass('docked');
    }
};

// ACTIVE NAV
$(document).scroll(function() {
	resize()

    var scroll_top = $(document).scrollTop()+50;
    var div_one_top = $('#events').position().top;
    var div_two_top = $('#artists').position().top;
    var div_three_top = $('#mission').position().top;
    var div_four_top = $('#charity').position().top;
    if (scroll_top < div_one_top) {
    	$('.nav-item').removeClass('active-nav')
    }

    else if(scroll_top > div_one_top && scroll_top < div_two_top) {
        //You are now past div one
        $('.nav-item').removeClass('active-nav')
        $("#events-nav").addClass('active-nav');
    } else if( scroll_top > div_two_top && scroll_top < div_three_top) {
        //You are now past div two
        $('.nav-item').removeClass('active-nav')
       $("#artists-nav").addClass('active-nav');
    } else if( scroll_top > div_three_top && scroll_top < div_four_top) {
    	$('.nav-item').removeClass('active-nav')
    	$("#mission-nav").addClass('active-nav');
    }
    else {$('.nav-item').removeClass('active-nav')}

});

// ADD TO CALENDAR

 (function () {
            if (window.addtocalendar)if(typeof window.addtocalendar.start == "function")return;
            if (window.ifaddtocalendar == undefined) { window.ifaddtocalendar = 1;
                var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
                s.type = 'text/javascript';s.charset = 'UTF-8';s.async = true;
                s.src = ('https:' == window.location.protocol ? 'https' : 'http')+'://addtocalendar.com/atc/1.5/atc.min.js';
                var h = d[g]('body')[0];h.appendChild(s); }})();


// SMOOTH SCROLLING

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// HIDE NAV WHILE SCROLLING DOWN
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#dock').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#dock').removeClass('nav-down').addClass('nav-up');
            
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#dock').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}