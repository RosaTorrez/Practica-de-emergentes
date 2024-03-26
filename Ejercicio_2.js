var variableExterna = "Soy una variable externa";
function miFuncion() {
  var variableInterna = "Soy una variable interna";
  console.log("Dentro de la función:");
  console.log(variableInterna);
  console.log(variableExterna); 
}
console.log("Fuera de la función:");
console.log(variableExterna);
miFuncion(); 