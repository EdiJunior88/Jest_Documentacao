// Por fim, para tornar menos exigente afirmar como as funções fictícias
// foram chamadas, adicionamos algumas funções de correspondência personalizadas para você:

// A função mock foi chamada pelo menos uma vez
expect(mockFunc).toHaveBeenCalled();

// A função simulada foi chamada pelo menos uma vez com os argumentos especificados
expect(mockFunc).toHaveBeenCalledWith(arg1, arg2);

// A última chamada para a função simulada foi chamada com os argumentos especificados
expect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2);

// Todas as chamadas e o nome do mock são escritos como um snapshot
expect(mockFunc).toMatchSnapshot();

// Esses matchers são açúcar para formas comuns de inspecionar a propriedade .mock.
// Você sempre pode fazer isso manualmente se for mais do seu gosto ou se precisar
// fazer algo mais específico:

// A função mock foi chamada pelo menos uma vez
expect(mockFunc.mock.calls.length).toBeGreaterThan(0);

// A função simulada foi chamada pelo menos uma vez com os argumentos especificados
expect(mockFunc.mock.calls).toContainEqual([arg1, arg2]);

// A última chamada para a função simulada foi chamada com os argumentos especificados
expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([
  arg1,
  arg2,
]);

// O primeiro argumento da última chamada para a função mock foi `42`
// (observe que não há auxiliar de açúcar para essa afirmação específica)
expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(42);

// Um ​​instantâneo verificará se uma simulação foi invocada o mesmo número de vezes,
// na mesma ordem, com os mesmos argumentos. Ele também irá testar o nome da função de simulação.
expect(mockFunc.mock.calls).toEqual([[arg1, arg2]]);
expect(mockFunc.getMockName()).toBe("um nome fictício");
