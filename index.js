const navBar = document.querySelector('.navbar');
const nameBanner = document.querySelector('#namebanner');
const navName = document.querySelector('.navname');
const navLinks = document.querySelector('.navlinks');
const mainPage = document.querySelector('.mainpage');
const slideIns = document.querySelectorAll('.slide-in');
const ggB = document.querySelector('.ggb');
nameBanner.addEventListener('click', showNav);

function debounce(func, wait = 14, immediate = true) {
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

window.addEventListener('scroll', debounce(checkSlide));

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