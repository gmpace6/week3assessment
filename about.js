console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been submitted!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);



function compliment(evt1) {
	evt1.preventDefault();
	
	alert('You ARE the tiger');
}


let form1 = document.querySelector('img');

form1.addEventListener('mouseover', compliment);