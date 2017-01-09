// RESIZE MISSION BLURB

function resize() {

var img = document.getElementById('gathering');
var gatherHeight = img.height+86;
// console.log(gatherHeight);
$('#mission').css("height", gatherHeight);

 }

resize()

// DOCK NAV

window.onscroll = function () {
    if (pageYOffset >= 1) {
        $('#dock').addClass('docked');
        $('#banner').css("margin-top","50px");
        // $("#contact-nav").addClass('active');

    } else {
 		$('#dock').removeClass('docked');
 		$('#banner').css("margin-top","0px");
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

