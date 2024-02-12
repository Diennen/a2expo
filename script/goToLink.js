// Плавный скролл

// Массив с ссылками, которые ведут на элемент страницы,
// а не на другой сайт
const anchors = document.querySelectorAll('a[href*="#"]')

// Выделяется каждый элемент anchors
anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		// Убирается стандартное поведение у элмента
		event.preventDefault();

		// Достаётся id ссылки без '#'
		const linkID = anchor.getAttribute('href').substring(1);

		// Задаются параметры перехода к элементу по id
		document.getElementById(linkID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})