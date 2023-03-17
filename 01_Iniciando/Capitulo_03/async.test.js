// Como alternativa, você pode usar async e await em seus testes.
// Para escrever um teste assíncrono, basta usar a palavra-chave
// async na frente da função passada para test.

test("os dados são manteiga de amendoim", async () => {
  const dados = await fetchData();
  expect(dados).toBe("manteiga de amendoim");
});

test("o fetch falha com um erro", async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch("erro");
  }
});

// Você pode combinar async e await com .resolves ou .rejects.

test("os dados são manteiga de amendoim", async () => {
  await expect(fetchData()).resolves.toBe("manteiga de amendoim");
});

test("o fetch falha com um erro", async () => {
  await expect(fetchData()).rejects.toMatch("erro");
});

// Nestes casos, async e await são efetivamente apenas uma sintaxe
// mais simples da mesma lógica dos exemplos de uso de promessas.

// Atenção
// Certifique-se de devolver (ou aguardar) a promessa - se você omitir a instrução return/await,
// seu teste será concluído antes que a promessa retornada do fetchData seja resolvida ou rejeitada.

// Se você espera que a promessa seja rejeitada, use o método .catch.
// Se certifique de adicionar expect.assertions
// para verificar que um certo número de afirmações são chamadas. Otherwise,
// a fulfilled promise would not fail the test.

test("o fetch falha com um erro", () => {
  expect.assertions(1);
  return fetchData().catch((e) => expect(e).toMatch("erro"));
});
