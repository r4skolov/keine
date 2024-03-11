const select = () => {
	// Функция для закрытия всех select
	function closeAllSelect() {
		const optionMenus = document.querySelectorAll('.select__wrapper');
		// Перебираем их и удаляем класс active
		optionMenus.forEach((optionMenu) => {
			optionMenu.classList.remove('active');
		});
	}

	// Находим все select
	const optionMenus = document.querySelectorAll('.select__wrapper');
	// Перебираем их
	optionMenus.forEach((optionMenu) => {
		// Находим элементы внутри каждого select
		const selectBtn = optionMenu.querySelector('.select__head');
		const options   = optionMenu.querySelectorAll('.select__item');
		const selected  = optionMenu.querySelector('.select__selected');

		// Добавляем обработчик клика на кнопку select
		if (selectBtn) {
			selectBtn.addEventListener('click', (e) => {
				// Закрываем все остальные select
				closeAllSelect();
				// Открываем текущий select
				e.target.parentNode.classList.add('active');
			});
			// Добавляем обработчик клика на каждый option
			options.forEach((option) => {
				option.addEventListener('click', () => {
					// Получаем выбранный option
					const selectedOptionElement = optionMenu.querySelector('.radio-hidden:checked + label');
					if (selectedOptionElement) {
						const selectedOption = selectedOptionElement.innerHTML;
						// Проверяем, что selectedOption не пустой и существует
						if (selectedOption && selected) {
							// Устанавливаем его в качестве выбранного
							selected.innerHTML = selectedOption;
							// Закрываем текущий select
							optionMenu.classList.remove('active');
						}
					}
				});
			});
		}
	});

	// Добавляем обработчик клика на документ
	document.addEventListener('click', (e) => {
		// Если кликнули не по select или его элементам
		if (!e.target.closest('.select__wrapper')) {
			// Закрываем все select
			closeAllSelect();
		}
	});
};

export default select;
