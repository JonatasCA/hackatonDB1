// require('dotenv/config');
// const express = require('express');
// const server = express();
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const mysql = require('mysql2');
// const porta = 3000;



// // Middleware
// server.use(bodyParser.json());


// const api = process.env.API_URL;

// // http://localhost:3000/api/v1/products

// server.get('/', (request, response) => {
//     response
//     .setHeader('content-type', 'text/html; charset=utf-8')
//     .status(200)
//     .send(`As rotas disponíveis são ${api}/produtos!`);
// });

// server.get('/test', function (request, response, next)  {
//     connection.query(
//         'SELECT * FROM Teste',
//         (error, result, field) => {
//             if(error) {
//                 console.log(error);
//                 response.status(400).send('Erro ao se conectar ao banco de dados.');
//                 return;
//             }

//             response.status(200).send(result);
//         },
//     )
// });

// server.get(`${api}/products`, (request, response) => {
//     const product = {
//         id: 1,
//         name: 'tênis',
//         description: 'Bla Bla Bla',
//         price: 50,
//         image: 'some_url'
//     }
//     response.send(product);
// });

// server.post(`${api}/products`, (request, response) => {
//     const newProduct = request.body;
//     console.log(newProduct);
//     response.send(newProduct);
// });

// server.listen(porta, () => {
//     console.log('Servidor iniciado: http://localhost:' + porta);
// });