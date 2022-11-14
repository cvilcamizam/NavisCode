//Crea un array de 3 pokemons, el tipo de dato a usar será un objeto. Deberá contener nombre, tipoDePokemon.
const pokemons = [
    {
      nombre: 'lapras',
      tipo: 'agua',
    },
    {
      nombre: 'pikachu',
      tipo: 'electrico',
    },
    {
      nombre: 'Charmander',
      tipo: 'fuego',
    },
  ];
//Crea una condición y si el tipo de pokemon es fuego muestra por consola el mensaje ¡Es un pokemon de fuego!.
if (pokemons[0].tipo === 'fuego') {
    console.log('¡Es un pokemon de fuego! 🔥');
  } else if (pokemons[1].tipo === 'fuego') {
    console.log('¡Es un pokemon de fuego! 🔥');
  } else if (pokemons[2].tipo === 'fuego') {
    console.log('¡Es un pokemon de fuego! 🔥');
  }