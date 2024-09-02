import { sql } from './db.js'

sql`
  CREATE TABLE users (
      id text PRIMARY KEY,
      nome character varying(255),
      senha character varying(255),
      perfil character varying(255)
  );
`.then(() => {
  console.log('tabela criada');
})