const navicon = document.querySelector(".Hamburger");
const navham = document.querySelector(".navbar");
navicon.addEventListener('click', () => {
	navham.classList.toggle('active');
	navicon.classList.toggle('is-active');
})
