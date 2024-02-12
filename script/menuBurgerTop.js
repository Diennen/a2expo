window.onload = function () {
	const header2 = document.querySelector('.header');
	const menuBurger1 = document.querySelector('.menu-burger');

	// Инициализация при загрузке страницы
	changeMenuBurgerTop();

	// Обработчик события скролла
	window.addEventListener('scroll', function () {
		// При скролле обновляем высоту header и устанавливаем отступ для menuBurger
		changeMenuBurgerTop();
	});

	function changeMenuBurgerTop() {

		if (menuBurger1.offsetHeight > 0) {
			// Пересчитываем высоту header
			let headerHeight = header2.offsetHeight;
			// Устанавливаем отступ для menuBurger
			menuBurger1.style.top = `${headerHeight}px`;
		}
	}
};