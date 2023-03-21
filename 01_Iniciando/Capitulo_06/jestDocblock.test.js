// Ferramenta para extrair e analisar os comentários no topo de um arquivo JavaScript.
// Exporta várias funções para manipular os dados dentro do bloco de comentários.

const { parseWithComments } = require("jest-docblock");

const code = `
/**
 * Esse é um exemplo
 * 
 * @flow
 * /

  console.log('Olá Mundo!')
`;

const parsed = parseWithComments(code);

// imprime um objeto com dois atributos: comentários e pragmas.
console.log(parsed);
