const pokemonSdk = require("./pokemon-sdk");

function catchThatPokemon(pokeballs, pokemon) {
  // try to use up all the pokeballs
  for (const pokeball of pokeballs) {
    if (pokemonSdk.throwPokeball(pokeball, pokemon)) {
      return `Gotcha! ${pokemon} was caught!`;
    }
  }

  return `${pokemon} fled!`;
}

module.exports = { catchThatPokemon };
