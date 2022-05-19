/*=============== LOADER ===============*/

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close');

//Show the Menu if navToggle is present
if(navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	});
}

//Hide Menu if the navClose is present
if(navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	})
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
	const navMenu = document.getElementById('nav-menu');
	navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
	const header = document.getElementById('header');
	if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader);

/*=============== MIXITUP FILTER PRODUCTS ===============*/
let mixerProducts = mixitup('.products__content', {
	selectors: {
		target: '.product__card'
	},
	animation: {
		duration: 300
	}
});

/* Default filter products */ 
mixerProducts.filter('.delicacies');

/* Link active products */ 
let linkProducts = document.querySelectorAll('.products__item');

function activeProducts() {
	linkProducts.forEach(l => l.classList.remove('active-product'));
	this.classList.add('active-product');
}

linkProducts.forEach(l => l.addEventListener('click', activeProducts));

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
