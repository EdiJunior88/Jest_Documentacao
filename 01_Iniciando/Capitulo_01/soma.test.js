const soma = require("./soma");

test("Adicionando 1 + 2 para dar igual a 3", () => {
  expect(soma(1, 2)).toBe(3);
});
