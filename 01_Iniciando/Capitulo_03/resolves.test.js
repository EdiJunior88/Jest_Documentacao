// Você também pode usar o "matcher" .resolves em sua declaração esperada,
// e Jest irá aguardar a promessa resolver. Se a promessa for rejeitada,
// o teste automaticamente irá falhar.

test("os dados são manteiga de amendoim", () => {
  return expect(fetchData()).resolves.toBe("manteiga de amendoim");
});

// Certifique-se de retornar a afirmação — se você omitir esta instrução de retorno,
// seu teste será concluído antes que a promessa retornada de fetchData seja resolvida
// e then() tenha a chance de executar a callback.

// Se você espera que uma promessa seja rejeitada, use o "matcher" .rejects.
// Ele funciona analogicamente para o "matcher" .resolves. Se a promessa é cumprida,
// o teste automaticamente irá falhar.

test("o fetch falha com um erro", () => {
  return expect(fetchData()).rejects.toMatch("erro");
});

// Nenhuma dessas formas é particularmente superior às outras,
// e você pode misturar e combiná-las através de uma base de código,
// ou até mesmo em um único arquivo.
// Apenas vai depender de qual estilo torna os testes mais simples.
// Só depende do estilo que você sente que torna seus testes mais simples.
