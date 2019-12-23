let posYWindow;
let posXWindow;
let params;

window.onload = function() {

	posYWindow = document.documentElement.clientHeight / 2 - 200;
	posXWindow = document.documentElement.clientWidth / 2 - 400;
	params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
			width=800px,height=400px,left=${posXWindow},top=${posYWindow}`;

};


document.querySelector('.show-map').addEventListener('click', preloadPopUp);

function preloadPopUp(e) {

	let posXWindow = document.documentElement.clientWidth / 2;
	let numberOfData = document.elementFromPoint(posXWindow, posYWindow);
		dataLocation = numberOfData.dataset.location;

	openPopUp(dataLocation);

};

function openPopUp(locate) {

	window.open(`${locate}`, 'test', params);

};