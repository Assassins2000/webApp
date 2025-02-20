const { Sequelize } = require('sequelize');

require('dotenv').config();

const dbConfig = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE
};

console.log(dbConfig)


const sequelize = new Sequelize({
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    dialect: 'postgres'
});

module.exports = sequelize;