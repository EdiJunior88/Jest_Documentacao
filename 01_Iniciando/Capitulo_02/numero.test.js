//A maioria das formas de comparar números têm "matcher" equivalentes.

test("dois mais dois", () => {
  const valor = 2 + 2;
  expect(valor).toBeGreaterThan(3);
  expect(valor).toBeGreaterThanOrEqual(3.5);
  expect(valor).toBeLessThan(5);
  expect(valor).toBeLessThanOrEqual(4.5);

  //toBe e toEqual são equivalentes para números
  expect(valor).toBe(4);
  expect(valor).toEqual(4);
});

// Para igualdade de ponto flutuante, use toBeCloseTo em vez de toEqual,
// porque você não quer um teste dependa de um pequeno erro de arredondamento.
test("adicionando números de ponto flutuante", () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);  Isso não vai funcionar por causa de um erro de arredondamento
  expect(value).toBeCloseTo(0.3);  //Isso funciona
});
