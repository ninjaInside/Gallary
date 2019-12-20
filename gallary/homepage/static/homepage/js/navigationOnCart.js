let posYWindow = document.documentElement.offsetHeight / 2 + 200;
let posXWindow = document.documentElement.clientWidth / 2 - 400;

let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=800px,height=400px,left=${posXWindow},top=${posYWindow}`;

document.addEventListener('click', pop);

function pop() {

	window.open('https://www.google.com/maps', 'test', params)

}