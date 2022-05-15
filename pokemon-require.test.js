const assert = require("assert");

const modulePath = require.resolve("./pokemon-sdk.js");
require.cache[modulePath] = {
  id: modulePath,
  filename: modulePath,
  loaded: true,
  exports: {
    throwPokeball: fn((ball, pokemon) => true),
  },
};

const pokemonSdk = require("./pokemon-sdk.js");
const { catchThatPokemon } = require("./pokemon.js");

function fn(impl = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };
  mockFn.mock = { calls: [] };
  mockFn.mockImplementation = (newImpl) => (impl = newImpl);
  return mockFn;
}
test("should catch with the right number of pokeballs", () => {
  const result = catchThatPokemon(["poke", "great", "ultra"], "PIKACHU");
  assert.strictEqual(result, `Gotcha! PIKACHU was caught!`);
  assert.deepEqual(pokemonSdk.throwPokeball.mock.calls, [["poke", "PIKACHU"]]);

  delete require.cache[modulePath];
});
