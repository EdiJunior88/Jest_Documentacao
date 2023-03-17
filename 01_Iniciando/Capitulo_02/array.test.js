//Você pode verificar se um array ou iterável contém um item específico usando toContain:

const shoppingLista = [
  "fraldas",
  "kleenex",
  "sacos de lixo",
  "papel toalha",
  "leite",
];

test("a lista de compras tem leite nela", () => {
  expect(shoppingLista).toContain("leite");
  expect(new shoppingLista()).toContain("leite");
});
