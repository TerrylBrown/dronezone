(function() {
	'use strict';

	// Nav toggle
	var body = document.querySelector('body');
	var navToggle = document.querySelector('.nav-toggle');
	var mobileNav = document.querySelector('.mobile-nav');

	navToggle.addEventListener('click', function() {
		if (mobileNav.classList.contains('active')) {
			this.classList.remove('active');
			mobileNav.classList.remove('active');
			body.classList.remove('no-scroll');
		} else {
			this.classList.add('active');
			mobileNav.classList.add('active');
			body.classList.add('no-scroll');
		}
	});

})();