// toBe utiliza Object.is para testar a igualdade exata.
// Se você quiser verificar o valor de um objeto, use toEqual:
// toEqual recursivamente verifica cada campo de um objeto ou array.

test("atribuição de objeto", () => {
  const data = { um: 1 };
  data["dois"] = 2;
  expect(data).toEqual({ um: 1, dois: 2 });
});

//Você também pode testar o oposto de um matcher usando not:

test("adicionando números positivos que não sejam zeros", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
