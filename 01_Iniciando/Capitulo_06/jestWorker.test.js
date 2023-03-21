// Módulo utilizado para a paralelização de tarefas. Exporta uma classe JestWorker
// que pega o caminho do módulo Node.js e permite chamar os métodos exportados
// do módulo como se fossem métodos de classe, retornando uma promessa que resolve
// quando o método especificado termina sua execução em um processo bifurcado.

//heavy-task.js
module.exports = {
  myHeavyTask: (args) => {
    // tarefa intensiva de CPU de longa execução.
  },
};

//main.js
async function main() {
  const worker = new Worker(require.resolve("./heavy-task.js"));

  // executa 2 tarefas em paralelo com diferentes argumentos
  const results = await Promise.all([
    worker.myHeavyTask({ foo: "bar" }),
    worker.myHeavyTask({ bar: "foo" }),
  ]);

  console.log(results);
}

main();
