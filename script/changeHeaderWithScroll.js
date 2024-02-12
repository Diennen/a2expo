const header1 = document.querySelector('.header');
const contact1 = document.querySelector('.contact');

let headerHeight = header1.offsetHeight;

window.addEventListener('scroll', scrollHandler);

function scrollHandler() {
	const scrollPosition = window.scrollY;
	const contactExists = contact1 && window.getComputedStyle(contact1).display !== 'none';
	let contactHeight = 0;

	// Проверяем высоту contact только если он существует
	if (contactExists) {
		contactHeight = contact1.offsetHeight;
	}

	if (contactExists) {
		if (scrollPosition > headerHeight + contactHeight) {
			header1.classList.add('_change');
		} else {
			header1.classList.remove('_change');
		}
	} else {
		if (scrollPosition > headerHeight) {
			header1.classList.add('_change');
		} else {
			header1.classList.remove('_change');
		}
	}
}