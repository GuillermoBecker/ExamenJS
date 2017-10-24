let productos;
let datos;
let total = 0;
$(document).ready(function(){
	$.get('/js/data.json', function(data){
	productos = data;
	for (let i = 0; i < productos.length; i++) {
		console.log("hola")
		let tableBody, marca, nombre, modelo, precio, button, texto, textoBtn, tableRow;
		tableBody = document.getElementById("productos").querySelectorAll("tbody")[0];
		tableRow = document.createElement('tr');
		nombre = document.createElement('td');
		marca = document.createElement('td');
		modelo = document.createElement('td');
		precio = document.createElement('td');
		button = document.createElement('button')
		button.appendChild(document.createTextNode('Comprar'));

		nombre.appendChild(document.createTextNode(productos[i].nombre));
		marca.appendChild(document.createTextNode(productos[i].marca));
		modelo.appendChild(document.createTextNode(productos[i].modelo));
		precio.appendChild(document.createTextNode(productos[i].precio));
		button.setAttribute("id",productos[i].id);
		tableRow.appendChild(nombre);
		tableRow.appendChild(marca);
		tableRow.appendChild(modelo);
		tableRow.appendChild(precio);
		tableRow.appendChild(button);
		tableBody.appendChild(tableRow);
		
		button.addEventListener("click", function(evt){
			agregarCarrito(evt.target.id - 1);
			agregarTotal(productos[i].precio);
		});

	}

	});
});

function agregarCarrito(id){
	let carrito, marca, nombre, modelo, precio, button, texto, textoBtn, tableRow;
	document.getElementById("carrito");
	tableBody = document.getElementById("carrito").querySelectorAll("tbody")[0];
		tableRow = document.createElement('tr');
		nombre = document.createElement('td');
		marca = document.createElement('td');
		modelo = document.createElement('td');
		precio = document.createElement('td');
		button = document.createElement('button')
		button.appendChild(document.createTextNode('X'));

		nombre.appendChild(document.createTextNode(productos[id].nombre+ " " + productos[id].modelo));
		tableRow.appendChild(nombre);
		tableRow.appendChild(button);
		tableBody.appendChild(tableRow);
		console.log(productos[id].precio < 3000 && productos[id].precio > 1500);
		if( productos[id].precio >= 3000 ){
			nombre.classList.add("red");
		}
		if( productos[id].precio < 3000 && productos[id].precio > 1500 ){
			nombre.classList.add("yellow");
		}
		if( productos[id].precio <= 1500 ){
			nombre.classList.add("green");
		}


		button.addEventListener("click", function(evt){
			agregarTotal(-productos[id].precio);
			evt.target.parentNode.parentNode.removeChild(evt.target.parentNode);
		});


};

function agregarTotal(id){
	total += id;
	document.getElementById("precio").innerHTML = "";
	document.getElementById("precio").innerHTML = total;
};