//Crea un array de 3 pokemons.
const pokemons=["pikachu", "hunter", "dito"];

//Muestra por consola el nombre de cada pokemon.
console.log(pokemons[0]);
console.log(pokemons[1]);
console.log(pokemons[2]);

//Bonus de investigación: ¿Cómo se puede mostrar el nombre de cada pokemon en una línea?
console.log(pokemons[0], pokemons[1], pokemons[2]); //MI SOLUCIÓN
console.log(pokemons.join(' ')); //OTRO EJEMPLO MÁS PRACTICO

//Bonus extra: ¿Cómo se pueda hacer esto con bucles?
for (let i = 0; i < pokemons.length; i++) {
    console.log(pokemons[i]);
  }
  
  for (const pokemon of pokemons) {
    console.log(pokemon);
  }
  
  pokemons.forEach((pokemon) => {
    console.log(pokemon);
  });