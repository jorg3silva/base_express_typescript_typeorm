import * as mainLoader from './main';
import { startDbConnection } from './db';
import logger from './logger';

/**
 *
 *      Index loader handler
 *
 * @param {any} expressApp
 * @return {Promise<void>}
 */
export default async ({ expressApp  }: any): Promise<any> => {
    logger.log({ message: ' Initializing loaders ...', level: 'verbose' });


    await mainLoader.default({ app: expressApp });
    logger.log({ message: ' ✓ General configs (Routes, Swagger, bodyParser, cors, ErrorHandlers)', level: 'verbose' });

    logger.log({ message: ' Connecting to database ...', level: 'verbose' });
    await startDbConnection();
    logger.log({ message: ' ✓ Database connection', level: 'verbose' });
};
