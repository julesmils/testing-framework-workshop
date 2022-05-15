const assert = require("assert");

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

function spyOn(obj, prop) {
  const originalValue = obj[prop];
  obj[prop] = fn();
  obj[prop].mockRestore = () => (obj[prop] = originalValue);
}

test("should catch using the right amount of pokeballs", () => {
  spyOn(pokemonSdk, "throwPokeball");
  pokemonSdk.throwPokeball.mockImplementation(() => true);

  const result = catchThatPokemon(["poke", "great", "ultra"], "PIKACHU");
  assert.strictEqual(result, `Gotcha! PIKACHU was caught!`);
  assert.deepEqual(pokemonSdk.throwPokeball.mock.calls, [["poke", "PIKACHU"]]);

  pokemonSdk.throwPokeball.mockRestore();
});
