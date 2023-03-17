//Se você quiser testar se uma determinada função lança um erro quando é chamada, use toThrow.

//A função que lança uma exceção precisa ser invocada dentro de uma função de encapsulamento,
//caso contrário, a asserção toThrow falhará.

function compilacaoCodigoAndroid() {
  throw new Error("Você está usando errado o JDK!");
}

test("compilar android como esperado", () => {
  expect(() => compilacaoCodigoAndroid()).toThrow();
  expect(() => compilacaoCodigoAndroid()).toThrowError(Error);

  //Você também pode usar uma cadeia de caracteres
  //que deve estar contida na mensagem de erro ou um regexp
  expect(() => compilacaoCodigoAndroid()).toThrow(
    "Você está usando errado o JDK!"
  );
  expect(() => compilacaoCodigoAndroid()).toThrow(/JDK/);

  //Ou você pode corresponder uma mensagem
  //de erro exata usando um regexp como abaixo
  expect(() => compilacaoCodigoAndroid()).toThrow(
    /^Você está usando errado o JDK$/
  ); //Erro no teste
  expect(() => compilacaoCodigoAndroid()).toThrow(
    /^Você está usando errado o JDK!$/
  ); //Erro no teste
});
