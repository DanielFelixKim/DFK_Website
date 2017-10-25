const navBar = document.querySelector('.navbar');
const nameBanner = document.querySelector('#namebanner');
const navName = document.querySelector('.navname');
const navLinks = document.querySelector('.navlinks');
const mainPage = document.querySelector('.mainpage');
nameBanner.addEventListener('click', showNav);

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