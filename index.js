const nameBanner = document.querySelector('#namebanner');
const slideIns = Array.from(document.querySelectorAll('.slide-in'));

const ggB = document.querySelector('.ggb');
const projectBox = document.querySelectorAll('project-box');

// Parallax
var lastOffset = 0;
const parallaxSlow = .1
const parallaxFast = .8;


window.addEventListener('scroll', debounce(checkSlide));
window.addEventListener('scroll', parallax);

function debounce(func, wait=12, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function checkSlide() {
  slideIns.forEach(slideIn => {
    // half way through the textbox
    const ggbTop = ggB.offsetTop + navBar.offsetHeight;
    const slideInTop = ggbTop + slideIn.offsetTop;
    const slideInAt = (window.scrollY + window.innerHeight) - slideIn.offsetHeight / 2;
    // bottom of the textbox
	const imageBottom = slideInTop + slideIn.offsetHeight;
    const isHalfShown = slideInAt > slideInTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      slideIn.classList.add('active');
    } else {
      slideIn.classList.remove('active');
    }
  });
}

function parallax(){
	const topWindow = window.scrollY + navBar.offsetHeight;
	const ggbTop = ggB.offsetTop + navBar.offsetHeight;
	const topscrollatGGB = topWindow - ggbTop;
	
	if(topWindow > ggbTop){
		ggB.style.setProperty('background-position', `0 ${lastOffset + topscrollatGGB*parallaxSlow}px`);
	} else{
		return;
	}
}


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - navBar.offsetHeight
    }, 500);
});

