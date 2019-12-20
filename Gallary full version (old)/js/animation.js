function debounce(func) {

	let checkTime = true;

	return function wrraper() {

		if (!checkTime) {

			return;

		};

		func.apply(this, arguments);

		checkTime = false;

		setTimeout(() => {

			checkTime = true;

		}, 800);

	}

}

checkButton = debounce(checkButton);

document.addEventListener('click', checkButton);

let posYSlider = 0;
let posYLocation = 0;
let arrayElemNumber = 0;
let counter = 0;

let scrollDistance;

window.addEventListener('load', loadHeight);

function loadHeight() {

	scrollDistance = (document.querySelector('.name').offsetHeight / document.querySelectorAll('.slider-element').length);

}

function checkButton(event) {
	
	if (errorRadar(event.target)) {

		return;

	};

	let dataType = event.target.closest('button').dataset.direction;

	switch (dataType) {

		case 'up': 
			slideUp();
			swipeUp();
		break;

		case 'down': 
			slideDown();
			swipeDown();
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
	let counter = document.querySelector('.counter');

	let count = counter.innerHTML;
				count = +count

	--count;
	counter.innerHTML = count
	posYSlider -= document.documentElement.clientHeight;

	slider.style.bottom = `${posYSlider}px`;  

};

function slideDown() {

	if (posYSlider >= (document.documentElement.clientHeight * (document.querySelectorAll('.slider-element').length - 1))) {

		return;

	};

	let slider = document.querySelector('.main-window');
	let counter = document.querySelector('.counter');

	let count = counter.innerHTML;
        count = +count

	++count;
	counter.innerHTML = count
	posYSlider += document.documentElement.clientHeight;

	slider.style.bottom = `${posYSlider}px`;  

};

function swipeDown() {
	
	if (counter >= (document.querySelectorAll('.slider-element').length - 1)) {

		return;

	};

	counter += 1;

	let loc = document.querySelector('.name');	

	posYLocation += scrollDistance;

	loc.style.bottom = posYLocation + 'px';
};

function swipeUp() {
	
	if (counter <= 0) {

		return;

	};

	counter -= 1

	let loc = document.querySelector('.name');

	posYLocation -= scrollDistance;

	loc.style.bottom = posYLocation + 'px';
}




