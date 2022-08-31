let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let mydiv = document.createElement('div');
	mydiv.style.backgroundColor = 'yellow';
	mydiv.innerHTML = "Hello World";
	document.body.appendChild(mydiv);

});