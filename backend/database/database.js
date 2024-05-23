const mysql = require('mysql2');

console.log('DATABASE_HOST:', process.env.DATABASE_HOST);
console.log('DATABASE_NAME:', process.env.DATABASE_NAME);
console.log('DATABASE_USER:', process.env.DATABASE_USER);
console.log('DATABASE_PASSWORD:', process.env.DATABASE_PASSWORD);

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST || '127.0.0.1',
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
});

connection.connect((error) => {
    if (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        return;
    }
    console.log(`Conectado ao Banco de Dados: ${process.env.DATABASE_NAME}`);
});

module.exports = connection;