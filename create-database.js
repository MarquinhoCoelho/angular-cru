import { sql } from './db.js'

sql`
  CREATE DATABASE IF NOT EXISTS estudos;
`.then(() => {
  console.log('Banco de dados criado');
})