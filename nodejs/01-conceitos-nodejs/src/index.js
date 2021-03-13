const express = require('express');

const app = express();

app.use(express.json());

app.get('/courses', (request, response) => {
    const { query } = request;
    console.log(query);
    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post('/courses', (request, response) => {
    const { body } = request;
    console.log(body)
    return response.json({message: 'Hello World Ignite!'});
});

app.put('/courses/:id', (request, response) => {
    const { params } = request;
    console.log(params);
    return response.json({message: 'Hello World Ignite!'});
});

app.patch('/courses/:id', (request, response) => {
    return response.json({message: 'Hello World Ignite!'});
});

app.delete('/courses/:id', (request, response) => {
    return response.json({message: 'Hello World Ignite!'});
});

app.listen(3333);