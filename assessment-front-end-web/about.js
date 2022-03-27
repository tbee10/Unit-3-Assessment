console.log("hello world");


//Form submitted alert
function handleSubmit(evt) {
	evt.preventDefault();
	
	window.alert("Form Submitted Successfully");
}
let form = document.querySelector('form#contact');
form.addEventListener('submit', handleSubmit);


//Mouseover text alert
const image = getElementById("cat");

document.getElementById("cat").onmouseover = function (){getAlert()};
function getAlert(){
	alert("You're Purrrfect!")
}