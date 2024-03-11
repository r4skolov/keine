import DropPanel   from './components/DropPanel';
import MainMenu    from './components/MainMenu';
import select      from './components/select';
import accordion   from './components/Accordion';
import menu        from './components/Menu';
import darktheme   from './components/Darktheme';
import map         from './components/Map';
import MicroModal   from './components/MicroModal';

function modal() {
	const settings = {
		openTrigger         : 'data-modal-open',
		closeTrigger        : 'data-modal-close',
		openClass           : 'is-open',
		awaitOpenAnimation  : true,
		awaitCloseAnimation : true,
	};

	MicroModal.init(settings);
	const modalCloseLink = document.querySelector('.js-modal-close');
	if (modalCloseLink) {
		modalCloseLink.addEventListener('click', (e) => {
			e.preventDefault();
			const { id } = e.target.dataset;
			if (id) {
				MicroModal.close(id, settings);
			}
		});
	}
}

// Init
function init() {
	new DropPanel();
	select();
	accordion();
	menu();
	darktheme();
	map();
	modal();

	const copyButton        = document.querySelector('[data-copy="copyButton"]');
	const textToCopyElement = document.querySelector('[data-copy="textToCopy"]');

	if (copyButton && textToCopyElement) {
		const textToCopy = textToCopyElement.innerText;

		copyButton.addEventListener('click', () => {
			const textArea = document.createElement('textarea');
			textArea.value = textToCopy;
			document.body.appendChild(textArea);
			textArea.select();
			document.execCommand('copy');
			document.body.removeChild(textArea);
		});
	}

	function closeAuthorize() {
		const btnClose  = document.querySelector('[data-close="close"]');
		const authorize = document.querySelector('.authorization-mini');

		if (btnClose) {
			btnClose.addEventListener('click', () => {
				authorize.classList.add('active');
			});
		}
	}

	closeAuthorize();
}

(function () {
	init();
}());
