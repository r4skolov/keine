import { Marquee } from 'dynamic-marquee';

const marqueeFunc = () => {
	const images = [
		'images/home/marquee-small/img-1.png',
		'images/home/marquee-small/img-2.png',
		'images/home/marquee-small/img-3.png',
		'images/home/marquee-small/img-5.png',
		'images/home/marquee-small/img-6.png',
		'images/home/marquee-small/img-7.png',
		'images/home/marquee-small/img-1.png',
		'images/home/marquee-small/img-2.png',
		'images/home/marquee-small/img-3.png',
		'images/home/marquee-small/img-5.png',
		'images/home/marquee-small/img-6.png',
		'images/home/marquee-small/img-7.png',
		'images/home/marquee-small/img-1.png',
		'images/home/marquee-small/img-2.png',
		'images/home/marquee-small/img-3.png',
		'images/home/marquee-small/img-5.png',
		'images/home/marquee-small/img-6.png',
		'images/home/marquee-small/img-7.png',
	]; // замените на свои
	// изображения

	const marquee = new Marquee(document.getElementById('marquee'), {
		delayBeforeStart : 500,
		direction        : 'right',
		duplicated       : true, // включите это свойство
		gap              : 20,
		pauseOnHover     : false,
		startVisible     : false,
		recalcResize     : false,
		rate             : 20,
		upDown           : false,
		startOnScreen    : false,
	});

	const control = loop(marquee, images.map((image) => () => `<img src="${image}" />`));
};

export default marqueeFunc;
