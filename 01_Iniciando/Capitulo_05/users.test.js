// Agora, para testar este método sem consumir a API (e assim, criando testes lentos e frágeis),
// nós podemos usar a função jest.mock(...) para simular automaticamente o módulo do axios.

// Assim que simulamos o módulo, podemos fornecer uma mockResolvedValue para o .get que retorna
// os dados que queremos que nosso teste afirme contra. Assim, estamos dizendo que queremos
// que o axios.get('/users.json') retorne uma resposta falsa.

import axios from "axios";
import Users from "./users";

jest.mock("axios");

test("deve buscar os usuários", () => {
  const users = [{ name: "Bob" }];
  const resp = { data: users };
  axios.get.mockResolvedValue(resp);

  // ou você poderá usar o código abaixo dependendo do seu caso de uso:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then((data) => expect(data).toEqual(users));
});
