// Recuerdas el ejercicio de los pokemons?
//Ahora vamos a crear una función que reciba un array de pokemons y muestre por consola el nombre de cada pokemon.
const pokemons = [
    {nombre: 'lapras', tipo: 'agua'},
    {nombre: 'pikachu', tipo: 'trueno'},
    {nombre: 'Charmander', tipo: 'fuego'},
  ];
  
  function mostrarPokemons(pokemons) {
    for (const pokemon of pokemons) {
      console.log(pokemon.nombre);
    }
  }
  mostrarPokemons(pokemons);

//También vamos a crear una función que reciba un array de pokemons
//y muestre por consola el nombre de cada pokemon que sea de tipo fuego.
// Usando filter
function mostrarPokemonsFuego2(pokemons) {
    return pokemons.filter((pokemon) => pokemon.tipo === 'fuego');
  }
  console.log(mostrarPokemonsFuego2(pokemons));