import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async getUser(nome) {
    // const user = await sql`select * from users where nome ilike ${'%' + nome + '%'}`;
    // if (user.length > 0) {
    //     return true;
    // } else {
    //     return false;
    // }
  }

  async listUsers() {
      const users = await sql`select * from users`;
      return users;
  }

  async createUser(user) {
      const id = randomUUID();
      console.log('id', id);
      const nome = user.nome;
      const senha = user.senha;
      const perfil = user.perfil;
      
      await sql`insert into users (id, nome, senha, perfil)
      values (${id}, ${nome}, ${senha}, ${perfil})`
  }

  async updateUser(id, user) {
      const nome = user.nome;
      const senha = user.senha;
      const perfil = user.perfil;

      await sql`update users set 
          nome = ${nome},
          senha = ${senha},
          perfil = ${perfil}
          where id = ${id}
      `;
  }

  async deleteUser(id) {
      await sql`delete from users where id = ${id}`
  }

}


// function saudacao(nome) {
//   return 'Olá, ' + nome + '!';
// }

// console.log(saudacao('João')); // Saída: Olá, João!