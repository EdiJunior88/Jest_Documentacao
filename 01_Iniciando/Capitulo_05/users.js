// Vamos supor que temos uma classe que traz usuários da nossa API.
// A classe usa axios para chamar a API, e então retorna o atributo data
// onde contém todos os usuários:

import axios from "axios";

class Users {
  static all() {
    return axios.get("/users.json").then((resp) => resp.data);
  }
}

export default Users;
