const stands = ["img/jpg/stands/a2expo-stand-1.jpg", "img/jpg/stands/a2expo-stand-2.jpg", "img/jpg/stands/a2expo-stand-3.jpg", "img/jpg/stands/a2expo-stand-4.jpg", "img/jpg/stands/a2expo-stand-5.jpg", "img/jpg/stands/a2expo-stand-6.jpg", "img/jpg/stands/a2expo-stand-7.jpg", "img/jpg/stands/a2expo-stand-8.jpg", "img/jpg/stands/a2expo-stand-9.jpg", "img/jpg/stands/a2expo-stand-10.jpg", "img/jpg/stands/a2expo-stand-11.jpg", "img/jpg/stands/a2expo-stand-12.jpg", "img/jpg/stands/a2expo-stand-13.jpg", "img/jpg/stands/a2expo-stand-14.jpg", "img/jpg/stands/a2expo-stand-15.jpg", "img/jpg/stands/a2expo-stand-16.jpg", "img/jpg/stands/a2expo-stand-17.jpg", "img/jpg/stands/a2expo-stand-18.jpg", "img/jpg/stands/a2expo-stand-19.jpg", "img/jpg/stands/a2expo-stand-20.jpg", "img/jpg/stands/a2expo-stand-21.jpg", "img/jpg/stands/a2expo-stand-22.jpg", "img/jpg/stands/a2expo-stand-23.jpg", "img/jpg/stands/a2expo-stand-24.jpg", "img/jpg/stands/a2expo-stand-25.jpg", "img/jpg/stands/a2expo-stand-26.jpg", "img/jpg/stands/a2expo-stand-27.jpg", "img/jpg/stands/a2expo-stand-28.jpg", "img/jpg/stands/a2expo-stand-29.jpg", "img/jpg/stands/a2expo-stand-30.jpg", "img/jpg/stands/a2expo-stand-31.jpg", "img/jpg/stands/a2expo-stand-32.jpg", "img/jpg/stands/a2expo-stand-33.jpg"];

const mockups = ["img/jpg/mockups/a2expo-stand-1-3D.jpg", "img/jpg/mockups/a2expo-stand-2-3D.jpg", "img/jpg/mockups/a2expo-stand-3-3D.jpg", "img/jpg/mockups/a2expo-stand-4-3D.jpg", "img/jpg/mockups/a2expo-stand-5-3D.jpg", "img/jpg/mockups/a2expo-stand-6-3D.jpg", "img/jpg/mockups/a2expo-stand-7-3D.jpg", "img/jpg/mockups/a2expo-stand-8-3D.jpg"];

let activeChoiseId = 'stands';
const portfolioTop = document.querySelector('.portfolio-top');

const initialChoise = document.querySelector(
	`button[data-tab-id="${activeChoiseId}"]`
);

initialChoise.classList.add('_active');

// Создание HTML
(function () {
	const div = document.createElement('div');
	div.className = 'portfolio-gallery';
	div.classList.add(`portfolio-gallery-stands`);

	for (let i = 0; i < stands.length; i++) {
		const imgElement = document.createElement('div');
		imgElement.className = 'portfolio-gallery-stands-img';
		imgElement.innerHTML = `
				<img src="${stands[i]}" alt="image-${[i]}">
			</div>
		`;

		div.append(imgElement);
	}
	portfolioTop.after(div);
}());

(function () {
	const div = document.createElement('div');
	div.className = 'portfolio-gallery';
	div.classList.add(`portfolio-gallery-mockups`);

	for (let i = 0; i < mockups.length; i++) {
		const imgElement = document.createElement('div');
		imgElement.className = 'portfolio-gallery-mockups-img';
		imgElement.innerHTML = `
				<img src="${mockups[i]}" alt="image-${[i]}">
			</div>
		`;

		div.append(imgElement);
	}
	portfolioTop.after(div);
}());
showChoiseContentById(activeChoiseId);

// -------------------------------------------------

const choises = document.querySelectorAll('.portfolio-choise-element');

for (let i = 0; i < choises.length; i++) {
	const choise = choises[i];
	choise.addEventListener('click', clickHandler);
}

function clickHandler(event) {
	const activeChoise = document.querySelector(
		`button[data-tab-id="${activeChoiseId}"]`
	);

	activeChoise.classList.remove('_active');
	event.target.classList.add('_active');
	activeChoiseId = event.target.dataset.tabId;

	// Скрытие активного HTML, перед созданием нового
	hideActiveChoiseContent();

	// Показ HTML при клике на кнопку
	showChoiseContentById(activeChoiseId);
}

// -------------------------------------------------
// Показ HTML
function showChoiseContentById(choiseId) {

	if (choiseId === 'stands') {
		const galleryStands = document.querySelector('.portfolio-gallery-stands');
		galleryStands.classList.add('_active');
		galleryStands.dataset.activeChoiseContent = 'true';
	}

	if (choiseId === 'mockups') {
		const galleryMockups = document.querySelector('.portfolio-gallery-mockups');
		galleryMockups.classList.add('_active');
		galleryMockups.dataset.activeChoiseContent = 'true';
	}
}

// Удаление HTML
function hideActiveChoiseContent() {
	const activeContent = document.querySelector(
		`[data-active-choise-content="true"]`
	);

	activeContent.classList.remove('_active');
	delete activeContent.dataset.activeChoiseContent;
}