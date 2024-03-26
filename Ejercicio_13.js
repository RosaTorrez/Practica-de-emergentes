/*Investiga sobre los métodos de array en JavaScript y escribe
 un ejemplo de cómo utilzar cada uno de los metodos petenecientes a los arreglos.


Los métodos de array en JavaScript son funciones integradas que se pueden llamar
 en arreglos para realizar diversas operaciones, como añadir o eliminar elementos,
  modificar elementos existentes,buscar elementos, etc. Aquí tienes ejemplos de 
  cómo usar algunos de los métodos más comunes como ser:
    push(): Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
    pop(): Elimina el último elemento de un array y devuelve ese elemento.
    shift(): Elimina el primer elemento de un array y devuelve ese elemento.
    unshift(): Añade uno o más elementos al inicio de un array y devuelve la nueva longitud del array.
    indexOf(): Devuelve el índice de la primera ocurrencia de un valor especificado en un
                array, o -1 si el valor no está presente.
     splice(): Cambia el contenido de un array eliminando elementos existentes y/o añadiendo nuevos elementos.
*/
//push
var frutas = ["Manzana", "Banana"];
frutas.push("Naranja");
console.log(frutas); 
//pop
var frutas = ["Manzana", "Banana", "Naranja"];
var ultimoElemento = frutas.pop();
console.log(ultimoElemento); // Salida: "Naranja"
console.log(frutas); 
//shift
var frutas = ["Manzana", "Banana", "Naranja"];
var primerElemento = frutas.shift();
console.log(primerElemento); // Salida: "Manzana"
console.log(frutas); 
//unshift
var frutas = ["Banana", "Naranja"];
frutas.unshift("Manzana");
console.log(frutas); 
//indexOf
var frutas = ["Manzana", "Banana", "Naranja"];
var indice = frutas.indexOf("Banana");
console.log(indice); 
// splice
var frutas = ["Manzana", "Banana", "Naranja", "Kiwi"];
frutas.splice(2, 1, "Mango", "Pera");
console.log(frutas); 