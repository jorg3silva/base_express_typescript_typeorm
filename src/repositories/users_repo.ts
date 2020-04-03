import { EntityRepository, Repository } from 'typeorm';
import { Users } from '../entity/Users';

/**
 *      User Repo, Queryes & ORM methods to handle data
 *
 * @author Jorge Silva Aguilera
 */
@EntityRepository(Users)
export class UsersRepo extends Repository<Users>{

    /**
     *      Obtain all users
     *
     * @return {Promise<*>}
     */
    getAll = async (): Promise<any> => {
        try {
            return this.find();
        } catch (error) {
            throw error;
        }
    }

    /**
     *      Obtain first by id
     * @param userId
     * @return {Promise<*>}
     */
    getById = async (userId: number): Promise<any> =>  {
        try {
            return this.findOne({ id: userId });
        } catch (error) {
            throw error;
        }
    }


    /**
     *
     *      Create user
     *
     * @param user
     * @return {Promise<void>}
     */
    createNew = async (user: any): Promise<any> =>  {
        try {


        } catch (error) {
            throw error;
        }
    }

    /**
     *
     *      Edit user, only pass id and total.
     *
     * @param editSale => {id, total}
     * @return {Promise<*>}
     */
    edit = async (editSale: any): Promise<any> =>  {
        try {
            const p = new Promise<any>((res: any , rej: any): void => {
                res([editSale]);
            });
            return await p;
        } catch (error) {
            throw error;
        }
    }


    /**
     *
     *      Delete user, only pass id for found it.
     *
     * @param id
     * @return {Promise<*>}
     */
    delete = async (id: number): Promise<any> =>  {
        try {
            const p = new Promise<any>((res: any , rej: any): void => {
                res(true);
            });
            return await p;
        } catch (error) {
            throw error;
        }
    }

}
