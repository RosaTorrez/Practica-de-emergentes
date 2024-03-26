/*Investiga sobre los métodos de cadena en JavaScript y
 escribe un ejemplo de cómo utilzar cada uno de los
  metodos petenecientes a las cadenas.

  Los métodos de cadena en JavaScript son funciones integradas que se pueden llamar en cadenas 
  de texto (instancias de String) para realizar operaciones como búsqueda, extracción, 
  manipulación, etc. Aquí tienes ejemplos de cómo usar algunos de los métodos más comunes:

concat(): Combina dos o más cadenas y devuelve una nueva cadena.
toUpperCase(): Convierte una cadena a mayúsculas.
toLowerCase(): Convierte una cadena a minúsculas.
indexOf(): Devuelve la posición de la primera ocurrencia de un valor especificado en una cadena.
slice(): Extrae una parte de una cadena y devuelve una nueva cadena.
replace(): Reemplaza parte de una cadena con otra cadena.
*/
var str1 = "Hola";
var str2 = "mundo";
var nuevaStr = str1.concat(" ", str2);
console.log(nuevaStr); // Salida: "Hola mundo"

var str = "hola mundo";
var nuevaStr = str.toUpperCase();
console.log(nuevaStr); // Salida: "HOLA MUNDO"

var str = "HOLA MUNDO";
var nuevaStr = str.toLowerCase();
console.log(nuevaStr); // Salida: "hola mundo"

var str = "Hola mundo";
var posicion = str.indexOf("mundo");
console.log(posicion); // Salida: 5

var str = "Hola mundo";
var nuevaStr = str.slice(5);
console.log(nuevaStr); // Salida: "mundo"

var str = "Hola mundo";
var nuevaStr = str.replace("mundo", "a todos");
console.log(nuevaStr); // Salida: "Hola a todos"
