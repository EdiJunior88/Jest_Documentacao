//Você pode verificar strings contra expressões regulares com toMatch:

test('não existe "Eu" em time', () => {
  expect("Time").not.toMatch(/Eu/);
});

test('mas existe "pare" em Cristiano', () => {
  expect("Cristiano").toMatch(/pare/);
});
