const { sumAsync, subtract } = require("./math");

test("sum should add numbers", async () => {
  const result = await sumAsync(10, 5);
  expect(result).toBe(15);
});

test("subtract should subtract numbers", async () => {
  const result = subtract(10, 5);
  expect(result).toBe(5);
});
