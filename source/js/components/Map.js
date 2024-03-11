const map = () => {
	const mapItems = document.querySelectorAll('.map-list__item[data-city]');
	const mapDots  = document.querySelectorAll('.map-dot[data-city]');
	const dotItems = document.querySelectorAll('.dot-item');

	mapItems.forEach((item) => {
		item.addEventListener('click', function () {
			const { city } = this.dataset;
			mapDots.forEach((dot) => {
				dot.classList.remove('active');
				if (dot.dataset.city === city) {
					dot.classList.add('active');
					dot.style.pointerEvents = 'auto';
				} else {
					dot.style.pointerEvents = 'none';
				}
			});
			mapItems.forEach((item) => {
				item.classList.remove('active');
			});
			this.classList.add('active');

			const isActive = Array.from(mapItems).some((item) => item.classList.contains('active'));
			if (isActive) {
				dotItems.forEach((dotItem) => {
					if (dotItem.classList.contains('active')) {
						dotItem.style.pointerEvents = 'auto';
					} else {
						dotItem.style.pointerEvents = 'none';
					}
				});
			} else {
				mapDots.forEach((dot) => {
					dot.style.pointerEvents = 'auto';
				});
				dotItems.forEach((dotItem) => {
					dotItem.style.pointerEvents = 'auto';
				});
			}
		});
	});

	document.addEventListener('click', (event) => {
		let isClickInside = false;
		mapItems.forEach((item) => {
			if (item.contains(event.target)) {
				isClickInside = true;
			}
		});
		if (!isClickInside) {
			mapDots.forEach((dot) => {
				dot.classList.remove('active');
				dot.style.pointerEvents = 'auto';
			});
			mapItems.forEach((item) => {
				item.classList.remove('active');
			});
			dotItems.forEach((dotItem) => {
				dotItem.classList.remove('active');
				dotItem.style.pointerEvents = 'auto';
			});
		}
	});
};

export default map;
