//Evento del input
var form1 = document.getElementById('form1');

//Función que quita la clase oculta al formulario y se la agrega al input
form1.addEventListener('click', function (){
	var form2 = document.getElementById('form2');
	if (form2.classList.contains('hide')) {
		form2.classList.remove('hide');
		form1.classList.add('hide');
	};
})

//Función que le dará el evento al botón guardar
var btn = document.getElementById('btn');
function add(){
	//document.getElementById('form2').classList.add('float');
	document.getElementById('form2').classList.add('hide');
	//Tomando el texto ingresado en el input
	var listName = document.getElementById('listName').value;
	//Limpiando el input
	document.getElementById('listName').value = '';
	//Llamado contenedor html
	var container = document.getElementById('list');
	//Creando el div que contiene el texto
	var containerText = document.createElement('div');
	//Asignando el texto ingresado en el input al nuevo div
	var newListName = document.createTextNode(listName);
	

	//Agregando elementos al DOM
	var containerElement = document.createElement('p');
	containerElement.appendChild(newListName);
	containerText.appendChild(containerElement);
	container.appendChild(containerText);

	//Creando texarea
	var textarea = document.createElement('textarea');
	textarea.setAttribute('placeholder', 'Añadir tarjeta...')
	//Asignando el textarea al DOM
	containerText.appendChild(textarea);

	//Creando botones
	var divButton = document.createElement('div');
	var btnAdd = document.createElement('button');
	var textBtn = document.createTextNode('Añadir');
	var containerIcon = document.createElement('spam');
	//Asignando los botones al DOM
	btnAdd.appendChild(textBtn);
	divButton.appendChild(btnAdd);
	divButton.setAttribute('id', 'btn');
	divButton.appendChild(containerIcon);
	container.appendChild(divButton);
	containerElement.appendChild(btnAdd);


}


