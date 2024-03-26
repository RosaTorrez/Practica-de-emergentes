var persona = {
    nombre: "Rosa",
    edad: 30,
    genero: "femenino",
    ocupacion: "ingeniero"
  };
  
  function mostrarInformacion(persona) {
    console.log("Nombre:", persona.nombre);
    console.log("Edad:", persona.edad);
    console.log("Género:", persona.genero);
    console.log("Ocupación:", persona.ocupacion);
  }
  
  mostrarInformacion(persona);