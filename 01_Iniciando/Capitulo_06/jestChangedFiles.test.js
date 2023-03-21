// Ferramenta para identificar arquivos modificados em um repositório git/hg.

// Exporta duas funções:

// getChangedFilesForRoots retorna uma promessa que resolve para um objeto
// com os arquivos e repositórios alterados.

// findRepos retorna uma promessa que resolve um conjunto de repositórios
// contidos no caminho especificado.

const { getChangedFilesForRoots } = require("jest-changed-files");

// imprime o conjunto de arquivos modificados desde o último commit no repositório atual
getChangedFilesForRoots(["./"], {
  lastCommit: true,
}).then((resultado) => console.log(resultado.changedFiles));
