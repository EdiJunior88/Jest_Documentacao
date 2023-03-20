// Opcionalmente, você pode fornecer um nome para suas funções fictícias,
// que serão exibidas em vez de 'jest.fn()' na saída do erro de teste.
// Use .mockName() se quiser identificar rapidamente a função fictícia
// relatando um erro em sua saída de teste.

const myMockFn = jest
  .fn()
  .mockReturnValue("default")
  .mockImplementation((scalar) => 42 + scalar)
  .mockName("add42");
