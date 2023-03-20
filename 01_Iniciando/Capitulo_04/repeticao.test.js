// Se você tem algo que precisa ser executado repetidamente antes ou depois para muitos testes,
// você pode usar os hooks beforeEach e afterEach para isso.

// Por exemplo, digamos que vários testes interagem com um banco de dados de cidades.
// Você tem um método initializeCityDatabase() que deve ser chamado antes de cada um destes testes
// e um método clearCityDatabase() que deve ser chamado depois de cada um destes testes.
// Você pode fazer isso com:

beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

// beforeEach e afterEach podem lidar com código assíncrono da mesma forma que testes podem lidar
// com código assíncrono - podem tanto levar um parâmetro done ou retornar uma promessa.
// Por exemplo, se initializeCityDatabase() tiver retornado uma promessa que resolve
// quando o banco de dados foi inicializado, gostaríamos de retornar essa promessa:

beforeEach(() => {
  return initializeCityDatabase();
});
