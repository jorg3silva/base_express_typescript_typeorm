// tslint:disable-next-line:no-var-requires
require('dotenv').config();

const config = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: 'mysql',
        operatorsAliases: 0,
    },
    test: {
        username: 'root',
        password: null,
        database: 'database_test',
        host: '127.0.0.1',
        dialect: 'mysql',
        operatorsAliases: 0,
    },
    production: {
        username: process.env.DB_PROD_USER,
        password: process.env.DB_PROD_PASS,
        database: process.env.DB_PROD_NAME,
        host: process.env.DB_PROD_HOST,
        dialect: 'mysql',
        operatorsAliases: 0,
    },
};

module.exports = config;
