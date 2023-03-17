// É comum em JavaScript executar código de forma assíncrona.
// Quando você tiver o código que é executado de forma assíncrona,
// Jest precisa saber quando o código que está testando for concluído,
// antes que possa passar para outro teste. Jest tem várias maneiras de lidar com isso.

// Promises
// Retorne uma promise do seu teste, e o Jest vai esperar essa promise ser resolvida.
// Se a promessa for rejeitada, o teste irá falhar.

// Por exemplo, digamos que fetchData retorna uma promessa
// que é esperada ser resolvida na string 'peanut butter'.

test("os dados são manteiga de amendoim", () => {
  return fetchData().then((dados) => {
    expect(dados).toBe("manteiga de amendoim");
  });
});
