const parallaxImage = document.querySelector('.about-us-img');
const parallaxSpeed = 0.08;

function parallaxHandler() {
	const scrollY = window.scrollY;

	parallaxImage.style.objectPosition = `0 ${(scrollY * parallaxSpeed)}px`;
}

// Создаем новый экземпляр Intersection Observer
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			// Если элемент становится видимым, запускаем функцию параллакса
			document.addEventListener('scroll', parallaxHandler);
		}
	});
});

observer.observe(parallaxImage);




















// const parallaxImage = document.querySelector('.about-us-img');
// const parallaxSpeed = 0.6;

// document.addEventListener('scroll', function () {
// 	const scrollY = window.scrollY;
// 	parallaxImage.style.objectPosition = `50% ${scrollY * parallaxSpeed}px`;
// });