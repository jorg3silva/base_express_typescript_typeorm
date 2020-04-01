

/**
 *      Sales Repo, Queryes & ORM methods to handle data
 *
 * @author Jorge Silva Aguilera
 */
export class SalesRepo {

    /**
     *      Obtain all sales
     *
     * @return {Promise<*>}
     */
    static getAll = async (): Promise<any> => {
        try {
            const p = new Promise<any>((res: any , rej: any): void => {
                res([{
                    id: 1,
                    name: 'asd',
                }]);
            });
            return await p;
        } catch (error) {
            throw error;
        }
    }

    /**
     *      Obtain first by id
     * @param saleId
     * @return {Promise<*>}
     */
    static getById = async (saleId: number): Promise<any> =>  {
        try {
            const p = new Promise<any>((res: any , rej: any): void => {
                res({
                    id: 1,
                    name: 'asd',
                });
            });
            return await p;
        } catch (error) {
            throw error;
        }
    }


    /**
     *
     *      Create sale
     *
     * @param sale
     * @return {Promise<void>}
     */
    static create = async (sale: any): Promise<any> =>  {
        try {
            const p = new Promise<any>((res: any , rej: any): void => {
                res([sale]);
            });
            return await p;
        } catch (error) {
            throw error;
        }
    }

    /**
     *
     *      Edit sale, only pass id and total.
     *
     * @param editSale => {id, total}
     * @return {Promise<*>}
     */
    static edit = async (editSale: any): Promise<any> =>  {
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
     *      Delete sale, only pass id for found it.
     *
     * @param id
     * @return {Promise<*>}
     */
    static delete = async (id: number): Promise<any> =>  {
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
