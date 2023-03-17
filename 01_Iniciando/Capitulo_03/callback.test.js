// Se você não usar promessas, poderá usar retornos de chamada.
// Por exemplo, digamos que fetchData, em vez de retornar uma promessa,
// espera um retorno de chamada, ou seja,
// busca alguns dados e chama callback (null, data) quando ele estiver completo.
// Você deseja testar que este dado retornado seja apenas a string 'manteiga de amendoim'.

// Não faça isso
test("os dados são manteiga de amendoim", () => {
  function callback(erro, dados) {
    if (erro) {
      throw erro;
    }
    expect(dados).toBe("manteiga de amendoim");
  }

  fetchData(callback);
});

// O problema é que o teste será concluído logo que fetchData completa,
// antes de sequer chamar a "callback".

// Há uma forma alternativa de test que corrige isto.
// Em vez de colocar o teste em uma função com um argumento vazio,
// use um único argumento chamado done.
// Jest aguardará até que a "callback" done é chamada antes de terminar o teste.

test("os dados são manteiga de amendoim", (completo) => {
  function callback(erro, dados) {
    if (erro) {
      completo(erro);
      return;
    }
    try {
      expect(dados).toBe("manteiga de amendoim");
      completo();
    } catch (erro) {
      completo(erro);
    }
  }

  fetchData(callback);
});

// Se done() nunca for chamado, o teste irá falhar (com erro de timeout),
// que é o que você quer que aconteça.

// Se a instrução expect falhar, ele lança um erro e done() não é chamado.
// Se queremos ver no log de testes por que falhou,
// precisamos encapsular expect em um bloco try e passar o erro no bloco catch para o done.
// Caso contrário, ficamos com um erro de timeout,
// que não mostra o valor recebido por expect(data).

// Atenção
// Jest lançará um erro, se a mesma função de teste for
// passada um retorno de chamada done() e retornar uma promessa.
// Isso é feito como precaução para evitar vazamentos de memória em seus testes.
