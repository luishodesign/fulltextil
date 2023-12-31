// CURRENT YEAR
window.addEventListener('load', function () {
	const year = document.querySelector('#year')
	year.innerHTML = new Date().getFullYear()
})

// NAVBAR DROPDOWN
const dropdownLink = document.querySelector('.menu__dropdown--link')
const dropdownMenu = document.querySelector('.menu__dropdown--pages')

dropdownLink.addEventListener('click', function () {
	dropdownMenu.classList.toggle('close')
})

// NAVBAR MOBILE
const mobile = document.querySelector('.menu__mobile')
const menu = document.querySelector('.menu')

mobile.addEventListener('click', function () {
	menu.classList.toggle('menu__open')
	mobile.classList.toggle('menu__color')
})

// CONTACT LINK
const contactLink = document.querySelector('.contact__link')
const otherLink = document.querySelector('.menu__link')

contactLink.addEventListener('click', function () {
	contactLink.classList.add('link--active')
	otherLink.classList.remove('link--active')
})
