document.addEventListener('click', checkButton);

let posYSlider = 0;
let posYLocation = 0;

function checkButton(event) {
	
	if (errorRadar(event.target)) {

		return;

	};

	let dataType = event.target.closest('button').dataset.direction;

	switch (dataType) {

		case 'up': 
			slideUp();
		break;

		case 'down': 
			slideDown();
		break;

	};

}

function errorRadar(e) {

	let button = e.closest('button');
	
	if (!button) {

		return true;

	} else if (button.dataset.direction == '') {

		return true;

	};

	return false;

};

function slideUp() {

	if (posYSlider <= 0) {

		return;

	};

	let slider = document.querySelector('.main-window');

	posYSlider -= document.documentElement.clientHeight;

	slider.style.transform = `translateY(-${posYSlider}px)`;  

};

function slideDown() {

	if (posYSlider >= (document.documentElement.clientHeight * document.querySelectorAll('section').length)) {

		return;

	};

	let slider = document.querySelector('.main-window');

	posYSlider += document.documentElement.clientHeight;

	slider.style.transform = `translateY(-${posYSlider}px)`;  

};
