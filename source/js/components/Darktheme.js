const darktheme = () => {
	const darkBtn = document.querySelectorAll('[data-darkmode="darkMode"]');
	if (localStorage.getItem('darkMode') === 'true') {
		document.body.classList.add('dark');
	}
	darkBtn.forEach((btn) => {
		btn.addEventListener('click', () => {
			if (document.body.classList.contains('dark')) {
				document.body.classList.remove('dark');
				localStorage.setItem('darkMode', 'false');
			} else {
				document.body.classList.add('dark');
				localStorage.setItem('darkMode', 'true');
			}
		});
	});
};
export default darktheme;
