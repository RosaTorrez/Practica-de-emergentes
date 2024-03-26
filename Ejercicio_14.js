/*DOM Manipulation: Este ejercicio consta de las siguientes partes:
    Investiga sobre la manipulación del DOM en JavaScript y escribe un 
        ejemplo de cómo modificar, crear y eliminar elementos del DOM.
    Investiga sobre los eventos en JavaScript y escribe un ejemplo 
        de cómo utilizar un evento en el DOM.
    Investiga sobre el manejo de formularios en JavaScript y escribe 
        un ejemplo de cómo obtener los valores de los campos de un formulario y validarlos.
*/


// Obtener un elemento por su ID
var elemento = document.getElementById("miElemento");
elemento.textContent = "Nuevo contenido";

//Crear un nuevo elemento y agregarlo al DOM:
var nuevoElemento = document.createElement("p");
nuevoElemento.textContent = "Este es un nuevo párrafo";
document.body.appendChild(nuevoElemento);


//Eliminar un elemento del DOM:
var elementoEliminar = document.getElementById("elementoEliminar");
elementoEliminar.parentNode.removeChild(elementoEliminar);


/*Los eventos en JavaScript permiten que el código responda a las
 acciones del usuario o a cambios en el estado del documento. Aquí 
 tienes un ejemplo de cómo utilizar un evento en el DOM:
*/
var boton = document.getElementById("miBoton");
boton.addEventListener("click", function() {
  alert("¡Hiciste clic en el botón!");
});


/*El manejo de formularios en JavaScript implica la obtención de los 
valores de los campos del formulario y su validación. Aquí tienes 
un ejemplo de cómo obtener los valores de los campos de un formulario y validarlos:
*/

var formulario = document.getElementById("miFormulario");
formulario.addEventListener("submit", function(event) {
  event.preventDefault();
  var nombre = document.getElementById("nombre").value;
  if (nombre.trim() === "") {
    alert("Por favor, ingresa tu nombre");
    return;
  }
  formulario.submit();
});