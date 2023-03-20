// Os ganchos de nível superior antes* e depois* se aplicam a todos os testes em um arquivo.
// Os ganchos declarados dentro de um bloco de descrição se aplicam apenas aos testes
// dentro desse bloco de descrição.

// Por exemplo, digamos que nós não temos apenas um banco de dados de cidades,
// mas também um banco de dados de alimentos. Nós podemos fazer uma configuração
// diferente para diferentes testes:

// Applies to all tests in this file
beforeEach(() => {
  return initializeCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

describe("matching cities to foods", () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return initializeFoodDatabase();
  });

  test("Vienna <3 veal", () => {
    expect(isValidCityFoodPair("Vienna", "Wiener Schnitzel")).toBe(true);
  });

  test("San Juan <3 plantains", () => {
    expect(isValidCityFoodPair("San Juan", "Mofongo")).toBe(true);
  });
});

// Observe que o beforeeach de nível superior é executado antes do beforeEach
// dentro do bloco describe. Isso pode ajudar a ilustrar a ordem de execução de todos os hooks.

beforeAll(() => console.log("1 - beforeAll"));
afterAll(() => console.log("1 - afterAll"));
beforeEach(() => console.log("1 - beforeEach"));
afterEach(() => console.log("1 - afterEach"));

test("", () => console.log("1 - test"));

describe("Scoped / Nested block", () => {
  beforeAll(() => console.log("2 - beforeAll"));
  afterAll(() => console.log("2 - afterAll"));
  beforeEach(() => console.log("2 - beforeEach"));
  afterEach(() => console.log("2 - afterEach"));

  test("", () => console.log("2 - test"));
});

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll
