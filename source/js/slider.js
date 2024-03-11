import Swiper, {
	Navigation, Pagination, Thumbs, FreeMode, Autoplay,
} from 'swiper';

// Slider
function slider(el, config) {
	if (!el) return false;
	const slider = el.querySelector('.swiper');
	if (!slider) return false;
	const next       = el.querySelector('.swiper-button-next');
	const prev       = el.querySelector('.swiper-button-prev');
	const pagination = el.querySelector('.swiper-pagination');
	const settings   = {
		modules               : [Navigation, Pagination, Thumbs, FreeMode, Autoplay],
		loop                  : false,
		slidesPerView         : 'auto',
		spaceBetween          : 0,
		preloadImages         : false,
		watchSlidesVisibility : true,
		watchOverflow         : true,
		threshold             : 10,
		observer              : true,
		navigation            : {
			nextEl : next,
			prevEl : prev,
		},
		pagination : {
			el             : pagination,
			type           : 'bullets',
			clickable      : true,
			dynamicBullets : false,
		},
	};

	if (config) {
		Object.assign(settings, config);
	}

	return new Swiper(slider, settings);
}

const sliderArticles = document.querySelectorAll('[data-slider="marquee-small"]');
sliderArticles.forEach((item) => slider(item, {
	spaceBetween   : 0,
	centeredSlides : true,
	speed          : 4000,
	autoplay       : {
		delay : 0,
	},
	loop                 : true,
	slidesPerView        : 'auto',
	allowTouchMove       : false,
	disableOnInteraction : true,
}));

const sliderPartners = document.querySelectorAll('[data-slider="marquee-partners"]');
sliderPartners.forEach((item) => slider(item, {
	spaceBetween   : 0,
	centeredSlides : true,
	speed          : 2300,
	autoplay       : {
		delay : 1,
	},
	loop                 : true,
	slidesPerView        : 'auto',
	allowTouchMove       : false,
	disableOnInteraction : true,
}));

const sliderCurrency = document.querySelectorAll('[data-slider="currency-slider"]');
sliderCurrency.forEach((item) => slider(item, {
	loop                : false,
	watchSlidesProgress : true,
	slidesPerView       : 'auto',
	freeMode            : true,
	breakpoints         : {
		1440 : {
			allowTouchMove : false,
		},
	},
}));

const sliderMetaverse = document.querySelectorAll('[data-slider="metaverse-slider"]');
sliderMetaverse.forEach((item) => slider(item, {
	loop           : false,
	// watchSlidesProgress : true,
	slidesPerView  : 'auto',
	centeredSlides : true,
	breakpoints    : {
		1440 : {
			allowTouchMove : true,
		},
	},
}));

const sliderMerch = document.querySelectorAll('[data-slider="merch-slider"]');
sliderMerch.forEach((item) => slider(item, {
	loop           : false,
	// watchSlidesProgress : true,
	slidesPerView  : 'auto',
	centeredSlides : true,
	breakpoints    : {
		1440 : {
			allowTouchMove : true,
		},
	},
}));
