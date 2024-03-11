const menu = () => {
	const burgerEl      = document.querySelector('[data-burger]');
	const menu          = document.querySelector('[data-menu]');
	const targetElement = document.querySelector('body');
	const close         = document.querySelector('[data-close]');
	const overlay       = document.querySelector('[data-overlay]');
	const links = document.querySelectorAll('ul.nav__list > li');

	function disableScroll() {
		const pagePosition = window.scrollY;
		targetElement.classList.add('scroll');
		document.body.dataset.position = pagePosition;
	}

	function enableScroll() {
		targetElement.classList.remove('scroll');
		document.body.removeAttribute('data-position');
	}

	burgerEl?.addEventListener('click', () => {
		burgerEl?.classList.toggle('burger--active');
		menu?.classList.add('active');
		overlay?.classList.add('active');
		burgerEl.setAttribute('aria-expanded', 'false');
		burgerEl.setAttribute('aria-label', 'Open menu');
		disableScroll();
	});

	close?.addEventListener('click', () => {
		burgerEl.classList.remove('burger--active');
		menu.classList.remove('active');
		overlay.classList.remove('active');
		enableScroll();
	});

	overlay?.addEventListener('click', (e) => {
		if (e.currentTarget === e.target) {
			menu?.classList.remove('active');
			overlay?.classList.remove('active');
			enableScroll();
		}
	});

	links.forEach((link) => {
		link.addEventListener('click', (event) => {
			burgerEl.classList.remove('burger--active');
			menu.classList.remove('active');
			overlay.classList.remove('active');
			enableScroll();
		});
	});
};

export default menu;
