// Exporta uma função que converte qualquer valor JavaScript em uma string legível por humanos.
// Oferece suporte a todos os tipos de JavaScript integrados e permite a extensão para tipos
// específicos de aplicativos por meio de plug-ins definidos pelo usuário.

const { format: prettyFormat } = require("pretty-format");

const valor = { object: {} };
valor.referenciaCircular = valor;
valor[Symbol("foo")] = "foo";
valor.map = new Map([["prop", "value"]]);
valor.array = [-0, Infinity, NaN];

console.log(prettyFormat(valor));
