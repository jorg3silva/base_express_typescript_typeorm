import { EntityRepository, Repository, getManager } from 'typeorm';
import { Users } from '../entity/Users';
import logger from '../loaders/logger';

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

            const newUser = this.create();
            newUser.name = user.name;
            newUser.rut = user.rut;

            return this.save(newUser);

        } catch (error) {
            throw error;
        }
    }

    /**
     *
     *      Edit user, only pass id and total.
     *
     * @param editUser => {id, total}
     * @return {Promise<*>}
     */
    edit = async (editUser: any): Promise<any> =>  {
        try {
            const user: Users = await this.getById(editUser.id);
            user.name = editUser.name;
            user.rut = editUser.rut;
            if (editUser.softdelete !== undefined) {
                user.softdelete = editUser.softdelete;
            }
            return this.save(user);
        } catch (error) {
            throw error;
        }
    }


    /**
     *
     * @param id
     * @return {Promise<any>}
     */
    getUserAndRoles = async (id: number): Promise<any> => {
        try {
            const manager = getManager();
            const res = await manager.query(`
                SELECT * FROM users
                left join user_roles ur on ur.id_user = users.id
                where users.id=?
            `,                         [id]);


            logger.inffo('asdasd');

            return res;
        }    catch (e) {
            throw e;
        }
    }

}
