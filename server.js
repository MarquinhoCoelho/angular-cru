
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabasePostgres;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET']
})

server.get('/users', async () => {
    const users = await databasePostgres.listUsers();
    return users;
});


server.get('/users/:nome', async (request) => {
    const nameUser = request.params.nome;
    const userExist = await databasePostgres.getUser(nameUser);
    return userExist;
});

server.post('/users', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createUser(body);
    return reply.status(201).send();
})

server.put('/users/:id', async (request, reply) => {
    const userID = request.params.id;
    const body = request.body;
    await databasePostgres.updateUser(userID, body);

    return reply.status(204).send();
})

server.delete('/users/:id', async (request, reply) => {
    const userID = request.params.id;
    await databasePostgres.deleteUser(userID);

    return reply.status(204).send();
})

server.listen({
    port: 3333
});
