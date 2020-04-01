import { Response, Request } from 'express';
import { SalesService } from '../services/sales';
import { ResponsesUtil as Responses } from '../util/responses';
import * as HttpStatus from 'http-status-codes';

/***
 *
 *      Controller Sales CRUD Example
 *
 * @author Jorge Silva Aguilera
 */
export class SalesController {

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
            const allSales = await SalesService.getAll();
            if (allSales.length > 0) {
                util.setSuccess(HttpStatus.OK, 'Sales retrieved', allSales);
            } else {
                util.setSuccess(HttpStatus.OK, 'No Sales found');
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
            const sale = await SalesService.getById(id);
            if (sale !== null) {
                util.setSuccess(HttpStatus.OK, 'Sale retrieved', sale);
            } else {
                util.setSuccess(HttpStatus.OK, 'Sale not found');
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
            const sale = await SalesService.create(body);
            if (sale instanceof Object) {
                util.setSuccess(HttpStatus.OK, 'Sale create with success', sale);
            } else {
                util.setSuccess(HttpStatus.OK, 'Cant create sale');
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
            const sale = await SalesService.edit({
                id,
                ...body,
            });

            if (sale instanceof Object) {
                util.setSuccess(HttpStatus.OK, 'Sale updated with success', sale);
            } else {
                util.setSuccess(HttpStatus.OK, 'Cant update sale');
                if (sale.SALE_NOT_FOUND !== undefined) {
                    util.setSuccess(HttpStatus.OK, sale.SALE_NOT_FOUND);
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
            const resDelete = await SalesService.delete(id);
            if (!! resDelete && resDelete.SALE_NOT_FOUND === undefined) {
                util.setSuccess(HttpStatus.OK, 'Sale deleteddddd', { deleted: !! resDelete });
            } else {
                util.setSuccess(HttpStatus.OK, 'Cant delete sale', { deleted: false });
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
