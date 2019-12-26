let x = document.documentElement.clientWidth / 2;
let y = document.documentElement.clientHeight / 2;

document.addEventListener('DOMContentLoaded', hidePopUp);
document.addEventListener('click', closePopUp);

function hidePopUp() {
	
	let arrayForImg = document.querySelectorAll('.pop-up');

	for (let elem of arrayForImg) {

		elem.style.display = 'none';

	}

};

let showPopUpButton = document.querySelector('#show-text');

showPopUpButton.addEventListener('click', showPopUp);

function showPopUp() {
	
	let index = document.elementFromPoint(x, y);
		index = index.dataset.index;
		index = +index;

	let currentPopUp = document.querySelectorAll('.pop-up');
		currentPopUp = currentPopUp[--index];

	currentPopUp.style.display = 'flex';

};

function closePopUp(e) {

	if (e.target.nodeName != 'BUTTON') return;
	if (e.target.dataset.type != 'close') return;

	let target = e.target.closest('div');

	target.style.display = 'none';

}
