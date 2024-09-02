import { sql } from '../db.js'

sql`
  DROP TABLE users;
`.then(() => {
  console.log('tabela deletada');
})