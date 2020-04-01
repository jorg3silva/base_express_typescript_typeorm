import * as mainLoader from './main';
import logger from './logger';

/**
 *
 *      Index loader handler
 *
 * @param {any} expressApp
 * @return {Promise<void>}
 */
export default async ({ expressApp  }: any): Promise<any> => {
    logger.info('Initializing loaders');

    await mainLoader.default({ app: expressApp });
    logger.info('Main express config loaded');
};
