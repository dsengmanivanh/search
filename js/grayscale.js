/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});


function onSubmit(){
     console.log("onSubmit");
     return false;
    // var value = document.getElementById("id_acronym_search").value;
    // console.log("onSubmit value=",value);
    // alert("onSubmit value="+value);
}

function onClick(){
   // console.log('onClick');
    var value = document.getElementById("id_acronym_search").value;
    //console.log("onClick value=",value);
}

function onChange(changeVal) {
   // console.log('onChange',changeVal.value);
    var value = document.getElementById("id_acronym_search").value;
    //console.log("oldvalue=",value);

   // var ontest = document.getElementById("beers");

    // var htmlCollection = document.getElementById("id_acronym_search").options;
    // var options = Array.from(htmlCollection)
    // var selected = options.find(function (element) {
    //     return element.selected === true;
    // });
    // console.log("selected=",selected);

    //See notes about 'which' and 'key'
    // if (e.keyCode === 13) {
    //     alert("enter");
    // }
}