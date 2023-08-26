document.addEventListener("DOMContentLoaded", function () {
	const mobileMenuButton = document.querySelector(".mobile-menu");
	const mobileNav = document.querySelector(".mobile-nav");
	const closeIcon = document.querySelector(".mobile-nav span i");

	mobileMenuButton.addEventListener("click", () => {
		mobileNav.classList.toggle("closed-menu");
		mobileNav.classList.toggle("open-menu");
	});

	closeIcon.addEventListener("click", () => {
		mobileNav.classList.remove("open-menu");
		mobileNav.classList.add("closed-menu");
	});

	const mobileNavLinks = document.querySelectorAll(".mobile-nav ul li a");

	mobileNavLinks.forEach((link) => {
		link.addEventListener("click", () => {
			mobileNav.classList.remove("open-menu");
			mobileNav.classList.add("closed-menu");
		});
	});
});

const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
