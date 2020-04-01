import 'reflect-metadata'; // We need this in order to use @Decorators
import config from './config';
import express from 'express';
import logger, { MyStream as LoggerStream } from './loaders/logger';
import morgan from 'morgan';

async function startServer(): Promise<any> {

    const app = express();

    // This log configuration, must declare forever before the routes. !!
    const loggerStream = new LoggerStream();
    app.use(morgan('dev', { stream: loggerStream }));

    // routes and other stuff declarations
    await require('./loaders').default({ expressApp: app });

    // server run.
    app.listen(config.port, (err: any): void => {
        if (err) {
            logger.error(err);
            process.exit(1);
            return;
        }
        logger.info(`
      #####################################################
       Express API Server listening on port: ${config.port}
      #####################################################
    `);
    });
}

startServer();
