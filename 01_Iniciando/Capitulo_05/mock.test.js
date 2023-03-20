// Todas as funções de simulação (.mock) possuem esta especial propriedade .mock,
// que é onde os dados sobre como a função a qual foi chamada são mantidos.
// A propriedade <code>.mock também pode rastrear o valor do this para cada chamada,
// então é possível inspecionar isso também:

const myMock1 = jest.fn();
const a = new myMock1();
console.log(myMock1.mock.instances);
// > [ <a> ]

const myMock2 = jest.fn();
const b = {};
const bound = myMock2.bind(b);
bound();
console.log(myMock2.mock.contexts);
// > [ <b> ]

//As funções de simulação (mock) são muito úteis nos testes permitindo
// a verificação de como essas funções então sendo chamadas, instanciadas, ou o que retornam:

// A função foi chamada exatamente uma vez
expect(someMockFunction.mock.calls).toHaveLength(1);

// O primeiro argumento da primeira chamada para a função foi 'first arg'
expect(someMockFunction.mock.calls[0][0]).toBe("first arg");

// O segundo argumento da primeira chamada para a função foi 'second arg'
expect(someMockFunction.mock.calls[0][1]).toBe("second arg");

// O valor de retorno da primeira chamada para a função foi 'return value'
expect(someMockFunction.mock.results[0].value).toBe("return value");

// A função foi chamada com um certo contexto `this`: o objeto `element`.
expect(someMockFunction.mock.contexts[0]).toBe(element);

// Esta função foi instanciada exatamente duas vezes
expect(someMockFunction.mock.instances.length).toBe(2);

// O objeto retornado pela primeira instanciação desta função
// tinha uma propriedade `name` cujo valor foi definido como 'test'
expect(someMockFunction.mock.instances[0].name).toBe("test");

// O primeiro argumento da última chamada para a função foi 'test'
expect(someMockFunction.mock.lastCall[0]).toBe("test");
