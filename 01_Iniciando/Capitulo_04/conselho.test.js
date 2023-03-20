// Se um teste está falhando, uma das primeiras coisas a verificar deveria ser
// se o teste está falhando quando é o único teste que é executado.
// Para executar apenas um único teste com Jest, altere temporariamente o comando test para test.only:

test.only("este será o único teste executado", () => {
  expect(true).toBe(false);
});

test("este teste não será executado", () => {
  expect("A").toBe("A");
});

// Se você tiver uma teste que muitas vezes falha quando ele é executado
// como parte de um conjunto maior, mas não falha quando você executá-lo sozinho,
// é uma boa aposta que algo de um teste diferente está interferindo com ele.
// Muitas vezes, você pode consertar isso, limpando algum estado compartilhado com beforeEach.
// Se você não tem certeza se algum estado compartilhado está sendo modificado,
// você também pode tentar um beforeEach para emitir um log dos dados.
