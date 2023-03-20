// As funções simuladas também podem ser usadas para injetar
// valores de teste em seu código durante um teste:

const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce("x").mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true

// As funções simuladas também são muito eficazes no código que usa um
// estilo de passagem de continuação funcional. O código escrito
// nesse estilo ajuda a evitar a necessidade de stubs complicados
// que recriam o comportamento do componente real que eles representam,
// em favor da injeção de valores diretamente no teste antes de serem usados.

const filterTestFn = jest.fn();

// Faça o retorno fictício `true` para a primeira chamada,
// e `false` para a segunda chamada
filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

const result = [11, 12].filter((num) => filterTestFn(num));

console.log(result);
// > [11]
console.log(filterTestFn.mock.calls[0][0]); // 11
console.log(filterTestFn.mock.calls[1][0]); // 12

// A maioria dos exemplos do mundo real realmente envolve obter
// uma função fictícia em um componente dependente e configurá-la,
// mas a técnica é a mesma. Nesses casos, tente evitar a tentação
// de implementar a lógica dentro de qualquer função que
// não esteja sendo testada diretamente.
