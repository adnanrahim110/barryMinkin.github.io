$(document).ready(function(){
	"use strict";

	//  Scroll To Top 
	$(window).on('scroll',function () {
		if ($(this).scrollTop() > 300) {
			$('.return-to-top').fadeIn();
		} else {
			$('.return-to-top').fadeOut();
		}
	});
	$('.return-to-top').on('click',function(){
			$('html, body').animate({
			scrollTop: 0
		}, 1500);
		return false;
	});

	var navitem = document.getElementById("navbarSupportedContent");
	var btns = navitem.getElementsByClassName("nav-item");

	// Loop through the buttons and add the active class to the current/clicked button
	for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
	}
});

/* script.js */
let lastScrollTop = 0;
let rotationTopImage = 0;
let rotationBackImage = 0;
const maxRotation = 30;

window.addEventListener('scroll', function() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    let topImage = document.getElementById('top-image');
    let backImage = document.getElementById('back-image');

    if (st === 0) {
        // Reset rotation when at the top of the page
        rotationTopImage = 0;
        rotationBackImage = 0;
    } else if (st > lastScrollTop) {
        // Scrolling down
        if (rotationTopImage < maxRotation) {
            rotationTopImage += 0.3; // Rotate top image clockwise
        }
        if (rotationBackImage > -maxRotation) {
            rotationBackImage -= 0.3; // Rotate back image counterclockwise
        }
    } else if (st < lastScrollTop) {
        // Scrolling up
        if (rotationTopImage > 0) {
            rotationTopImage -= 0.3; // Rotate top image counterclockwise
        }
        if (rotationBackImage < 0) {
            rotationBackImage += 0.3; // Rotate back image clockwise
        }
    }

    topImage.style.transform = `rotate(${rotationTopImage}deg)`;
    backImage.style.transform = `rotate(${rotationBackImage}deg)`;

    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);


