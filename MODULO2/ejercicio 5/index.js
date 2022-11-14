//Dado el siguiente array de personas:
//const personas = [
//     { nombre: 'Juan', edad: 18 },
//     { nombre: 'María', edad: 16 },
//     { nombre: 'Pedro', edad: 20 },
//     { nombre: 'Pablo', edad: 15 },  
//     { nombre: 'Laura', edad: 19 },
//   ];
// Crea una función que reciba un array de personas y devuelva un array con las personas mayores de edad.
// Ojo: Puede que tengas que investigar sobre métodos de array y bucles. 
const personas = [
    { nombre: 'Juan', edad: 18 },
    { nombre: 'María', edad: 16 },
    { nombre: 'Pedro', edad: 20 },
    { nombre: 'Pablo', edad: 15 },  
    { nombre: 'Laura', edad: 19 },
  ];

  function mayoresDeEdad(personas) {
    const mayores = [];
    for (let i = 0; i < personas.length; i++) {
      if (personas[i].edad >= 18) {
        mayores.push(personas[i]);
      }
    }
    return mayores;
  }
  
  console.log(mayoresDeEdad(personas));

  // Usando método de array filter
function mayoresDeEdad2(personas) {
    return personas.filter((persona) => persona.edad >= 18);
  }
  console.log(mayoresDeEdad2(personas));

  // Dime cual es la persona más joven del array.
  // Usando método de array reduce
function masJoven3(personas) {
    return personas.reduce((masJoven, persona) => {
      if (persona.edad < masJoven.edad) {
        return persona;
      }
      return masJoven;
    });
  }
  
  console.log(masJoven3(personas));

  // Dime cual es la persona mayor del array.
  // Usando método de array reduce
function masMayor3(personas) {
    return personas.reduce((masMayor, persona) => {
      if (persona.edad > masMayor.edad) {
        return persona;
      }
      return masMayor;
    });
  }
  
  console.log(masMayor3(personas));
