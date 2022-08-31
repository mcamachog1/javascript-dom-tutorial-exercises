let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let myli = document.createElement('li');
	myli.innerHTML = 'Cuarto elemento';
	document.querySelector('#myList').appendChild(myli);


});

