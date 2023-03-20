// Ainda assim, há casos em que é útil ir além da capacidade
// de especificar valores de retorno e substituir totalmente a
// implementação de uma função fictícia. Isso pode ser feito
// com jest.fn ou o método mockImplementationOnce em funções fictícias.

const myMockFn = jest.fn((cb) => cb(null, true));

myMockFn((err, val) => console.log(val));
// > true

// O método mockImplementation é útil quando você precisa definir
// a implementação padrão de uma função fictícia criada a partir de outro módulo:

// foo.js
module.exports = function () {
  // alguma implementação;
};

// test.js
jest.mock("../foo"); // isso acontece automaticamente com automocking
const foo = require("../foo");

// foo é uma função mock
foo.mockImplementation(() => 42);
foo();
// > 42

// Quando você precisar recriar um comportamento complexo
// de uma função fictícia de modo que várias chamadas
// de função produzam resultados diferentes, use o método mockImplementationOnce:

const myMockFn = jest
  .fn()
  .mockImplementationOnce((cb) => cb(null, true))
  .mockImplementationOnce((cb) => cb(null, false));

myMockFn((err, val) => console.log(val));
// > true

myMockFn((err, val) => console.log(val));
// > false

// Quando a função simulada ficar sem implementações
// definidas com mockImplementationOnce, ela executará
// a implementação padrão definida com jest.fn (se estiver definido):

const myMockFn = jest
  .fn(() => "default")
  .mockImplementationOnce(() => "first call")
  .mockImplementationOnce(() => "second call");

console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
// > 'first call', 'second call', 'default', 'default'

// Para os casos em que temos métodos que normalmente são encadeados
// (e, portanto, sempre precisam retornar isso), temos uma API açucarada
// para simplificar isso na forma de uma função .mockReturnThis()
// que também fica em todos os mocks:

const myObj = {
  myMethod: jest.fn().mockReturnThis(),
};

// é o mesmo que

const otherObj = {
  myMethod: jest.fn(function () {
    return this;
  }),
};
