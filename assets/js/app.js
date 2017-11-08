//Evento del imput
var form1 = document.getElementById('form1');

//Función que quita la clase oculta al formulario y se la agrega al imput
form1.addEventListener('click', function (){
	var form2 = document.getElementById('form2');
	if (form2.classList.contains('hide')) {
		form2.classList.remove('hide');
		form1.classList.add('hide');
	};
})


