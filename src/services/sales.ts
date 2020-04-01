import { SalesRepo } from '../repositories/sales_repo';


/**
 *      Sales logic service
 *
 * @author Jorge Silva Aguilera
 */
export class SalesService {

    /**
     *      Obtain all sales
     *
     * @return {Promise<*>}
     */
    static getAll = async (): Promise<any> => {
        try {
            return await SalesRepo.getAll();
        } catch (error) {
            throw error;
        }
    }

    /**
     *      Obtain first by id
     * @param saleId
     * @return {Promise<*>}
     */
    static getById = async (saleId: number): Promise<any> => {
        try {
            return await SalesRepo.getById(saleId);
        } catch (error) {
            throw error;
        }
    }

    /**
     *      Create sale
     * @param sale
     * @return {Promise<void>}
     */
    static create = async (sale: any): Promise<any> => {
        try {
            return await SalesRepo.create(sale);
        } catch (error) {
            throw error;
        }
    }


    /**
     *      edit sale
     * @param editSale
     * @return {Promise<void>}
     */
    static edit = async (editSale: any): Promise<any> => {
        try {
            return await SalesRepo.edit(editSale);
        } catch (error) {
            throw error;
        }
    }

    /**
     *      delete sale
     * @param id
     * @return {Promise<void>}
     */
    static delete = async (id: any): Promise<any> => {
        try {
            return await SalesRepo.delete(id);
        } catch (error) {
            throw error;
        }
    }
}

