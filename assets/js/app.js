//Evento del imput
var form1 = document.getElementsByclassName('form1');
console.log('form1');
form1.addEventListener('click', function showForm() {
	var form2 = this.getElementsByclassName('form2');
	if (form2.classList.contains('hide')) {
		form2.classList.remove('hide');
		form2.classList.add('show');
	} else {
		form2.classList.remove('show');
		form2.classList.add('hide');
	}
})

