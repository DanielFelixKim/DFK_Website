const navBar = document.querySelector('.navbar');
const navName = document.querySelector('.navname');
const navLinks = document.querySelector('.navlinks');
const mainPage = document.querySelector('.mainpage');

$("#dfk-logo").velocity({ scaleY: 0, translateX: 480, translateY: 50}, {duration: 0});

$("#topF").velocity({ opacity: 0}, {duration: 0});
$("#dfk-logo").velocity({ scaleY: 1}, {duration: 1000, delay: 500, easing: [500,20]});
function shiftLine(id, angle, z) {
  x = -z * Math.cos((Math.PI*(180 - angle))/180);
  y = -z * Math.cos((Math.PI*(90 - angle))/180);
  $(id).velocity({ translateX: `${x}`, translateY:`${y}`, opacity: 1}, {duration: 1000,  easing: [500,20], delay: 0});
}

 function showNav(){

	nameBanner.classList.add('hidden');
	navBar.classList.remove('hidden');
	mainPage.classList.remove('hidden');

	setTimeout(() => {
	  navName.classList.add('active');
      navLinks.classList.add('active');
    }, 250);

    setTimeout(() => {
    	mainPage.classList.add('active');
    }, 750);
}

function animateLogo(){
	
	$("#dfk-logo").velocity({ translateX: 0}, {duration: 1000, easing: [300,30]});

	$("#botKFirst").velocity({ rotateZ: 130}, {duration: 1000, easing: [500,20]});
	$("#midF").velocity({ rotateZ: 90}, {duration: 1000, easing: [500,20]});
	$("#topKFirst").velocity({ rotateZ: 50}, {duration: 1000, easing: [500,20]});

	$("#sideF").velocity({ translateX: 480, opacity: 1}, {duration: 1000, easing: [500,20], delay: 1000});
	$("#sideK").velocity({ translateX: 750, opacity: 1}, {duration: 1000, easing: [500,20], delay: 1000});
	shiftLine("#botK", 130, 750);
	shiftLine("#midF", 90, 480);
	$("#topF").velocity({ translateX: 480, opacity:1}, {duration: 1000, easing: [500,20], delay: 1000, queue:false});
	shiftLine("#topK", 50, 750);

	$(".danielName").velocity({ translateX: [-10, -200], opacity: 1}, {duration: 1000, easing: [500,20], delay: 1000});
	$(".felixName").velocity({ translateX: [0, -550], opacity: 1}, {duration: 1000, easing: [500,20], delay: 1000});
	$(".kimName").velocity({ translateX: [0, -830], opacity: 1}, {duration: 1000, easing: [500,20], delay: 1000});
	$("#dfk-logo").velocity({ scaleX: 1}, {duration: 1500, delay: 500, complete: function() {showNav()}});
	
}

 $("#dfk-logo").click(animateLogo);

