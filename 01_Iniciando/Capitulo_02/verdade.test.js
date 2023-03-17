// Em testes às vezes você precisa distinguir entre undefined, null e false, mas às vezes você não quer tratar estes de maneira diferente. Jest contém auxiliares que permitem você ser explícito sobre o que quer.

// toBeNull corresponde a apenas null
// toBeUndefined corresponde a apenas undefined
// toBeDefined é o oposto de toBeUndefined
// toBeTruthy combina com qualquer coisa que uma instrução if trata como verdadeiro
// toBeFalsy combina com qualquer coisa que uma instrução if trata como falso

test("nulo", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeUndefined();
  expect(n).toBeDefined();
  expect(n).toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;
  expect(z).toBeNull();
  expect(z).toBeUndefined();
  expect(z).toBeDefined();
  expect(z).toBeTruthy();
  expect(z).toBeFalsy();
});
