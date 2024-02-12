// Поиск переменных (кнопка открытия, кнопка закрытия, модальное окно)
let menuBurger2 = document.querySelector('.menu-burger');
const buttonOpen = document.querySelector('#open-burger-btn');
const burgerContent = document.querySelector('.menu-burger-content');
// Массив с ссылками
const menuLinks = document.querySelectorAll('.burger-links-element');

// Открытие модального окна
buttonOpen.addEventListener('click', function () {
	menuBurger2.classList.toggle('_active');
	buttonOpen.classList.toggle('_active');
	document.body.classList.toggle('_lock');
})

// Закрытие модального окна при нажатии на Esc
window.addEventListener('keydown', (e) => {
	if (e.key === "Escape") {
		menuBurger2.classList.remove("_active")
		buttonOpen.classList.remove('_active');
		document.body.classList.remove('_lock');
	}
});

// Закрытие модального окна при клике вне его

// 1 способ реализации (сложнее, но можно использовать id)
// Логика на том, что задаётся элемент который включает клик
// и всё остальное срабатывает, если его нету
// Важно задать границу элементов с кликом (в данном случае main.addEventListener,
// вместо document.addEventListener)
menuBurger2.addEventListener('click', (e) => {
	const click = e.composedPath().includes(burgerContent);
	if (!click) {
		menuBurger2.classList.remove('_active');
		buttonOpen.classList.remove('_active');
		document.body.classList.remove('_lock');
	}
})

// 2 способ реализации (легче, но нельзя использовать id)
// main.addEventListener('click', (e) => {
// 	if (e.target.classList.contains('menu__burger__background')) {
// 		burgerContent.classList.remove('_active');
// 		menuBurger.classList.remove('_active');
// 		buttonOpen.classList.remove('_active');
// 		document.body.classList.remove('_lock');
// 	}
// })

// Закрытие меню при клике на ссылку
menuLinks.forEach(link => {
	link.addEventListener('click', () => {
		menuBurger2.classList.remove('_active');
		buttonOpen.classList.remove('_active');
		document.body.classList.remove('_lock');
	})
})