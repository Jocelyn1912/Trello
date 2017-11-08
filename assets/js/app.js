//Evento del imput
var form1 = document.getElementById('form1');
form1.addEventListener('click', showForm); 

//Función que quita la clase hide a mi formulario para que se haga visible
function showForm (){
	var form2 = document.getElementById('form2');
	if (form2.classList.contains('hide')) {
		form2.classList.remove('hide');
	};
}


