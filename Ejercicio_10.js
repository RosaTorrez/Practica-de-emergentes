function sumarNumeros(numeros) {
    var suma = 0;
    for (var numero of numeros) {
      suma += numero;
    }
    return suma;
  }
  
  var numeros = [1, 2, 3, 4, 5];
  var resultado = sumarNumeros(numeros);
  console.log("La suma de los números es:", resultado);