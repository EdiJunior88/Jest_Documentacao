import defaultExport, { bar, foo } from "./foo-bar-baz";

jest.mock("../foo-bar-baz", () => {
  const originalModule = jest.requireActual("../foo-bar-baz");

  // Simule a exportação padrão e a exportação denominada 'foo'
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => "mocked baz"),
    foo: "mocked foo",
  };
});

test("deve fazer uma simulação parcial", () => {
  const defaultExportResult = defaultExport();
  expect(defaultExportResult).toBe("mocked baz");
  expect(defaultExport).toHaveBeenCalled();

  expect(foo).toBe("mocked foo");
  expect(bar()).toBe("bar");
});
