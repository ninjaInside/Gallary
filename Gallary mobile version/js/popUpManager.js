let dataText = [
	
	`
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
		Eos sequi amet pariatur accusamus, assumenda, iste ut 
		animi dicta sunt error, ab dolore quidem, 
		repellat nostrum. 0
	`,

	`
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
		Eos sequi amet pariatur accusamus, assumenda, iste ut 
		animi dicta sunt error, ab dolore quidem, 
		repellat nostrum. 1
	`,

	`
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
		Eos sequi amet pariatur accusamus, assumenda, iste ut 
		animi dicta sunt error, ab dolore quidem, 
		repellat nostrum. 2
	`,

	`
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
		Eos sequi amet pariatur accusamus, assumenda, iste ut 
		animi dicta sunt error, ab dolore quidem, 
		repellat nostrum. 3
	`		

];

document.addEventListener('click', checkButton);

function checkButton(e) {

	if (e.target.nodeName != 'BUTTON') {

		return;

	} else if (e.target.dataset.type != 'pop') {

		return;

	};

	showPopUp();

}

function showPopUp() {

	let x = document.documentElement.clientWidth / 2;
 	let y = document.documentElement.clientHeight / 2;
 	let elemForText = document.elementFromPoint(x, y); 
 		elemForText = elemForText.closest('section')
 		elemForText = +elemForText.dataset.location;

 	let newElemIconButton = document.createElement('button');
 		newElemIconButton.classList.add('pop-up-button');

 	let newElemSpan = document.createElement('span');
 		newElemSpan.insertAdjacentElement('afterbegin', newElemIconButton);
 		newElemSpan.append(dataText[elemForText]);

  	let newElemDiv = document.createElement('div');
 		newElemDiv.classList.add('pop-up');
 		newElemDiv.insertAdjacentElement('afterbegin', newElemSpan);

 	document.body.insertAdjacentElement('afterbegin', newElemDiv);

 	let closeTextWindow = document.querySelector('.pop-up-button');

 	closeTextWindow.addEventListener('click', closePopUp);
}

function closePopUp(e) {
	
	let popUp = document.querySelector('.pop-up');

	popUp.remove();

	e.target.removeEventListener('click', closePopUp);

}


