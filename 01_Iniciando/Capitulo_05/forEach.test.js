// Funções de simulação ( mocks em inglês ) permitem que você teste os links entre códigos,
// apagando a implementação real de uma função, capturando chamadas para a função
// (e os parâmetros passados nessas chamadas), capturar instâncias do construtor de funções
// quando instanciado com new, e permitindo configuração em tempo de teste de valores de retorno.

// Existem duas maneiras de simular funções: Seja criando uma função simulada para usar no código
// de teste, ou escrevendo uma simulação manual para sobrescrever uma dependência de modulo.

// Vamos imaginar que estamos testando uma implementação de uma função forEach,
// que invoca uma "callback" para cada item em um array fornecido.

const forEach = require("./forEach");

const mockCallBack = jest.fn((x) => 42 + x);

test("forEach mock function", () => {
  forEach([0, 1], mockCallBack);

  // A função simulada foi chamada duas vezes
  expect(mockCallBack.mock.calls).toHaveLength(2);

  // O primeiro argumento da primeira chamada para a função foi 0
  expect(mockCallBack.mock.calls[0][0]).toBe(0);

  // O primeiro argumento da segunda chamada para a função foi 1
  expect(mockCallBack.mock.calls[1][0]).toBe(1);

  // O valor de retorno da primeira chamada para a função foi 42
  expect(mockCallBack.mock.results[0].value).toBe(42);
});
