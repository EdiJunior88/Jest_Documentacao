// Ferramenta para validar configurações enviadas por usuários.
// Exporta uma função que recebe dois argumentos:
// a configuração do usuário e um objeto contendo um exemplo de configuração
// e outras opções. O valor de retorno é um objeto com dois atributos:

// hasDeprecationWarnings, um booleano que indica se a configuração enviada
// possui avisos de descontinuação,

// isValid, um booleano que indica se a configuração está correta ou não.

const { validate } = require("jest-validate");

const configPorUsuario = {
  transform: "<rootDir>/node_modules/my-custom-transform",
};

const resultado = validate(configPorUsuario, {
  comment: "Documentação: http//custom-docs.com",
  exampleConfig: { transform: "<rootDir>/node_modules/babel-jest" },
});

console.log(resultado);
