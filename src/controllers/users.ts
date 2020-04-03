import { Response, Request } from 'express';
import { UsersService } from '../services/users';
import { ResponsesUtil as Responses } from '../util/responses';
import * as HttpStatus from 'http-status-codes';

/***
 *
 *      Controller Users CRUD Example
 *
 * @author Jorge Silva Aguilera
 */
export class UsersController {

    /**
     *
     * List All
     *
     * @param {e.Request} req
     * @param {e.Response} res
     * @return {Promise<e.Response>}
     */
    static getAll = async (req: Request, res: Response): Promise<Response> => {
        const util: Responses = new Responses();
        try {
            const allUsers = await UsersService.getAll();
            if (allUsers.length > 0) {
                util.setSuccess(HttpStatus.OK, 'Users retrieved', allUsers);
            } else {
                util.setSuccess(HttpStatus.OK, 'No Users found');
            }
            return util.send(res);
        } catch (error) {
            util.setError(HttpStatus.INTERNAL_SERVER_ERROR, error);
            return util.send(res);
        }
    }

    /**
     *
     *  get one
     *
     * @param {e.Request} req
     * @param {e.Response} res
     * @return {Promise<e.Response>}
     */
    static getOne = async (req: Request, res: Response): Promise<Response> => {
        const util = new Responses();
        const id = parseInt(req.params.id, 10);

        if (id === undefined) {
            util.setError(HttpStatus.INTERNAL_SERVER_ERROR, 'missing id in request.');
            return util.send(res);
        }

        try {
            const user = await UsersService.getById(id);
            if (user !== null) {
                util.setSuccess(HttpStatus.OK, 'User retrieved', user);
            } else {
                util.setSuccess(HttpStatus.OK, 'User not found');
            }
            return util.send(res);
        } catch (error) {
            util.setError(HttpStatus.INTERNAL_SERVER_ERROR, error);
            return util.send(res);
        }
    }

    /**
     *
     *      Create
     *
     * @param {e.Request} req
     * @param {e.Response} res
     * @return {Promise<e.Response>}
     */
    static create = async (req: Request, res: Response): Promise<Response> => {
        const util = new Responses();
        const body = req.body;

        try {
            const user = await UsersService.create(body);
            if (user instanceof Object) {
                util.setSuccess(HttpStatus.OK, 'User create with success', user);
            } else {
                util.setSuccess(HttpStatus.OK, 'Cant create user');
            }
            return util.send(res);
        } catch (error) {
            util.setError(HttpStatus.INTERNAL_SERVER_ERROR, error);
            return util.send(res);
        }
    }

    /**
     *
     *      Edit
     *
     * @param {e.Request} req
     * @param {e.Response} res
     * @return {Promise<e.Response>}
     */
    static edit = async (req: Request, res: Response): Promise<Response> => {
        const util = new Responses();

        const id = req.params.id;
        const body = req.body;

        if (id === undefined) {
            util.setError(HttpStatus.INTERNAL_SERVER_ERROR, 'missing id in request.');
            return util.send(res);
        }

        try {
            const user = await UsersService.edit({
                id,
                ...body,
            });

            if (user instanceof Object) {
                util.setSuccess(HttpStatus.OK, 'User updated with success', user);
            } else {
                util.setSuccess(HttpStatus.OK, 'Cant update user');
                if (user.SALE_NOT_FOUND !== undefined) {
                    util.setSuccess(HttpStatus.OK, user.SALE_NOT_FOUND);
                }
            }
            return util.send(res);
        } catch (error) {
            util.setError(HttpStatus.INTERNAL_SERVER_ERROR, error);
            return util.send(res);
        }
    }

    /**
     *      delete
     *
     * @param {Request} req
     * @param {Response} res
     * @return {Promise<void>}
     */
    static delete = async (req: Request, res: Response): Promise<Response> => {
        const util = new Responses();
        const id = req.params.id;

        if (id === undefined) {
            util.setError(HttpStatus.INTERNAL_SERVER_ERROR, 'missing id in request.');
            return util.send(res);
        }

        try {
            const resDelete = await UsersService.delete(id);
            if (!! resDelete && resDelete.SALE_NOT_FOUND === undefined) {
                util.setSuccess(HttpStatus.OK, 'User deleted', { deleted: !! resDelete });
            } else {
                util.setSuccess(HttpStatus.OK, 'Cant delete user', { deleted: false });
                if (resDelete.SALE_NOT_FOUND !== undefined) {
                    util.setSuccess(HttpStatus.OK, resDelete.SALE_NOT_FOUND, { deleted: false });
                }
            }
            return util.send(res);
        } catch (error) {
            util.setError(HttpStatus.INTERNAL_SERVER_ERROR, error);
            return util.send(res);
        }
    }

}
