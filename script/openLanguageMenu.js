// Открытие, закрыие окна с языками
const changeLng = document.querySelector('#changeLng');
const changeTriangle = document.querySelector('.header-active-language-triangle');
const headerLanguages = document.querySelector('.header-languages-menu');

changeLng.addEventListener('click', showLanguages);
document.addEventListener('click', hideHeaderLanguagesIfClick);
window.addEventListener('keydown', closeLanguagesIfEsc);

function showLanguages() {
	changeTriangle.classList.toggle('_active');
	headerLanguages.classList.toggle('_active');
}

function hideHeaderLanguagesIfClick(e) {
	const click_1 = e.composedPath().includes(headerLanguages);
	const click_2 = e.composedPath().includes(changeLng);
	const menuLangActive = headerLanguages.classList.contains('_active')
		&& changeTriangle.classList.contains('_active');

	if (!click_1 && !click_2 && menuLangActive) {
		headerLanguages.classList.remove('_active');
		changeTriangle.classList.remove('_active');
	}
}

function closeLanguagesIfEsc(e) {
	const menuLangActive = headerLanguages.classList.contains('_active')
		&& changeTriangle.classList.contains('_active');

	if (e.key === "Escape" && menuLangActive) {
		headerLanguages.classList.remove('_active')
		changeTriangle.classList.remove('_active');
	}
}