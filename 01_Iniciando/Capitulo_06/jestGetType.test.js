// Módulo que identifica o tipo primitivo de qualquer valor JavaScript.
// Exporta uma função que retorna uma string com o tipo do valor passado como argumento.

const { getType } = require("jest-get-type");

const array = [1, 2, 3];
const nullValue = null;
const undefinedValue = undefined;

// Imprimindo 'array'
console.log(getType(array));

// Imprimindo 'null'
console.log(getType(nullValue));

//Imprimindo 'undefined'
console.log(getType(undefinedValue));
