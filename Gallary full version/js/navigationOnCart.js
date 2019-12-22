let massiveWithURL = [

		'https://www.1zoom.me/big2/49/179561-melisenta.jpg',
		'https://img3.akspic.ru/image/106662-priroda-dikaya_mestnost-ozero_luiza-gora-morennoe_ozero-1920x1080.jpg',
		'https://www.nastol.com.ua/pic/201502/1024x768/nastol.com.ua-130464.jpg',
		'https://storge.pic2.me/upload/820/582da5866a5d8.jpg',
		'https://storge.pic2.me/upload/871/58850f512911e.jpg',

	]

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
		numberOfData = numberOfData.dataset.counter;
		numberOfData = +numberOfData;

	openPopUp(numberOfData);

};

function openPopUp(count) {

	let url = massiveWithURL[--count];

	window.open(`${url}`, 'test', params);

};