let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
mySelect = document.querySelector('#mySelect')
let myString = mySelect.innerHTML
for (let index = 0; index < countries.length; index++) {
    myString += `<option value='${countries[index]}'>${countries[index]}</option>` 
  
}
mySelect.innerHTML = myString
document.body.appendChild(mySelect)


mySelect.addEventListener("change", function() {
	alert(mySelect.value);

});
