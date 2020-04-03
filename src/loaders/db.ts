import { createConnection, Connection } from 'typeorm';
import ormconfig from '../../ormconfig';
import logger from './logger';


/**
 *
 *      Open conection with mysql db throught TypeORM
 *
 *
 * @return {Promise<any>}
 * @author Jorge Silva Aguilera
 */
export const startDbConnection = async (): Promise<any> => {

    let connectResponse: Connection;

    try {
        // @ts-ignore
        connectResponse = await createConnection({ ...ormconfig });
        if (connectResponse === undefined) {
            logger.error(`Can't connect to db. Check the credentials. `);
        }
    } catch (error) {
        throw new Error(`Can't connect to db. Check the credentials.  ${error}`);
    }

    return  connectResponse;

};

