import config from './src/config';

module.exports = {
    type: 'mysql',
    host: config.db.host,
    port: config.db.port,
    username: config.db.user,
    password: config.db.pass,
    database: config.db.name,
    synchronize: false,
    logging: false,
    entities: [
        'src/entity/**/*.ts',
    ],
    migrations: [
        'src/migration/**/*.ts',
    ],
    subscribers: [
        'src/subscriber/**/*.ts',
    ],
    cli: {
        entitiesDir: 'src/entity',
        migrationsDir: 'src/db/migration',
        subscribersDir: 'src/subscriber',
    },
};

