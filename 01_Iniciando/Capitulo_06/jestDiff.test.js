// Ferramenta para visualizar mudanças nos dados. Exporta uma função que
// compara dois valores de qualquer tipo e retorna uma string 'pretty-printed'
// ilustrando a diferença entre os dois argumentos.

const { diff } = require("jest-diff");

const a = { a: { b: { c: 5 } } };
const b = { a: { b: { c: 6 } } };

const resultado = diff(a, b);

// Imprimindo diff
console.log(resultado);
