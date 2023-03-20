// Em alguns casos, você só precisa executar ou configurar algo uma vez, no início de um arquivo.
// Isto pode ser especialmente incômodo quando a instalação é assíncrona, portanto,
// não pode fazer isso "inline".
// Jest fornece os hooks beforeAll e afterAll para lidar com essa situação.

// Por exemplo, se initializeCityDatabase() e clearCityDatabase() retornassem promessas
// e o banco de dados da cidade pudesse ser reutilizado entre os testes,
// poderíamos alterar nosso código de teste para:

beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});
