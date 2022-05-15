# Create your own testing framework

Jest Concepts:

## Assertions

```
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}
```

## Test Block

```
function test(title, callback) {
	try {
		callback();
		console.log(`✅ ${title}`);
	} catch(err) {
		console.log(`❌ ${title}`);
	  console.error(err);
	}
}
```

## Monkey Patching

```
function fn(impl) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return impl(...args)
  }
  mockFn.mock = {calls: []}
  return mockFn
}
```

## Cache Overrides

```
const modulePath = require.resolve('./pokemon-sdk.js')
require.cache[modulePath] = {
  id: modulePath,
  filename: modulePath,
  loaded: true,
  exports: {
    throwPokeball: fn((ball, pokemon) => true)
  }
};
```
