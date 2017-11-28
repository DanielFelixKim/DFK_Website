const navBar = document.querySelector('.navbar');
const navName = document.querySelector('.navname');
const navLinks = document.querySelector('.navlinks');
const mainPage = document.querySelector('.mainpage');
const landingPage = document.querySelector('#landing');
const dLogo = document.querySelector('#dLogo');
var animating = false;

var startLogoX = landingPage.offsetWidth;



//CenterLogo in the middle and appear
$(".start-logo").velocity({ scaleY: 0, translateX: 580, translateY: 0, opacity: 1}, {duration: 0});
$(".start-logo").velocity({ scaleY: 1}, {duration: 1000, delay: 1000, easing: [500,20]});

//Fan out K and F lines
$("#botK").velocity({ rotateZ: 140, scaleY: 1.2}, {duration: 1000, easing: [500,20], delay: 1500});
$("#midF").velocity({ rotateZ: 90}, {duration: 1000, easing: [500,20], delay: 1500});
$("#topK").velocity({ rotateZ: 50, scaleY: 1.2}, {duration: 1000, easing: [500,20], delay: 1500});

//Hide top F 
$("#topF").velocity({ opacity: 0}, {duration: 0});

//Shift rotated K lines
function shiftLine(id, angle, z) {
  x = -z * Math.cos((Math.PI*(180 - angle))/180);
  y = -z * Math.cos((Math.PI*(90 - angle))/180);
  if (id == "#botK" || id == "#topK") {
  	y = y/1.2;
  }
  $(id).velocity({ translateX: x, translateY: y, opacity: 1, scaleY:1.2}, {duration: 1000,  easing: [200,20], delay: 0});
}

console.log(navBar.offsetTop);

//Show Nav after animation
 function showNav(){
	landingPage.classList.add('hidden');
	document.getElementsByTagName("body")[0].setAttribute("style", "margin-top: 70px");
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
	if (animating == true){
		return;
	}
	animating = true;
	//Set up name
	$(".nameLogo").velocity({ translateY: -100});
	$(".danielName").velocity({ translateX:-350});
	$(".felixName").velocity({ translateX: -500});
	$(".kimName").velocity({ translateX: -1000});

	//Move left
	$(".start-logo").velocity({ translateX: 0}, {duration: 1000, easing: [300,30]});
	shiftLine("#midF", 90, 0);
	shiftLine("#botK", 140, 0);
	shiftLine("#topK", 50, 0);

	//Slide out F initials
	$("#sideF").velocity({ translateX: 580, opacity: 1}, {duration: 1000, easing: [200,20], delay: 1000});
	$("#topF").velocity({ translateX: 580, opacity:1}, {duration: 1000, easing: [200,20], delay: 1000, queue:false});
	shiftLine("#midF", 90, 580);

	//Slide out K initials
	$("#sideK").velocity({ translateX: 1000, opacity: 1}, {duration: 1000, easing: [200,20], delay: 1000});
	shiftLine("#botK", 140, 1000);
	shiftLine("#topK", 50, 1000);

	//Scale K
	$("#topK").velocity({ scaleY: 1.2}, {duration: 500, delay: 0});
	$("#botK").velocity({ scaleY: 1.2}, {duration: 500, delay: 0});


	//Slide in names
	$(".danielName").velocity({ translateX:-50, opacity: 1}, {duration: 1000, easing: [200,20], delay: 700});
	$(".felixName").velocity({ translateX: -50, opacity: 1}, {duration: 1000, easing: [200,20], delay: 700});
	$(".kimName").velocity({ translateX: -90, opacity: 1}, {duration: 1000, easing: [200,20], delay: 700});

	
	$("#dfk-logo").velocity({ scaleX: 1}, {duration: 2500, delay: 500, complete: function() {showNav()}});
}

 $("#dfk-logo").click(animateLogo);