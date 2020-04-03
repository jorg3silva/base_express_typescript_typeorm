import { UsersRepo } from '../repositories/users_repo';
import { getCustomRepository } from 'typeorm';


/**
 *      Users logic service
 *
 * @author Jorge Silva Aguilera
 */
export class UsersService {

    constructor(private usersRepository: UsersRepo) {
    }

    /**
     *      Obtain all users
     *
     * @return {Promise<*>}
     */
    static getAll = async (): Promise<any> => {
        try {
            const userRepo = getCustomRepository(UsersRepo);
            return await userRepo.getAll();
        } catch (error) {
            throw error;
        }
    }

    /**
     *      Obtain first by id
     * @param userId
     * @return {Promise<*>}
     */
    static getById = async (userId: number): Promise<any> => {
        try {
            const userRepo = getCustomRepository(UsersRepo);
            return await userRepo.getById(userId);
        } catch (error) {
            throw error;
        }
    }

    /**
     *      Create user
     * @param user
     * @return {Promise<void>}
     */
    static create = async (user: any): Promise<any> => {
        try {
            const userRepo = getCustomRepository(UsersRepo);
            return await userRepo.createNew();
        } catch (error) {
            throw error;
        }
    }


    /**
     *      edit user
     * @param editSale
     * @return {Promise<void>}
     */
    static edit = async (editSale: any): Promise<any> => {
        try {
            return await UsersRepo.edit(editSale);
        } catch (error) {
            throw error;
        }
    }

    /**
     *      delete user
     * @param id
     * @return {Promise<void>}
     */
    static delete = async (id: any): Promise<any> => {
        try {
            return await UsersRepo.delete(id);
        } catch (error) {
            throw error;
        }
    }
}

