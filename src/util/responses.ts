import { Response } from 'express';

/**
 *
 *      Handle responses for http requests.
 *
 * @author Jorge Silva Aguilera
 */
export class ResponsesUtil {

    private message: string;
    private data: any;
    private type: string;
    private statusCode: number;

    /**
     *      Constructor
     *
     * @author Jorge Silva Aguilera
     */
    constructor() {
        this.statusCode = null;
        this.type = null;
        this.data = null;
        this.message = null;
    }


    /**
     *
     *      Set structure for success response
     *
     * @param {number} statusCode
     * @param {string} message
     * @param data
     */
    setSuccess(statusCode: number, message: string, data: any = {}): void {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.type = 'success';
    }


    /**
     *
     *
     *      Set structure for error response
     *
     * @param {number} statusCode
     * @param {any} message json or string
     */
    setError(statusCode: number, message: any): void {
        // tslint:disable-next-line:no-console
        console.log(message);
        this.statusCode = statusCode;
        this.message = message;
        this.type = 'error';
    }

    /**
     *
     *      Return express response
     *
     * @param {Response} res
     * @return {Response}
     */
    send(res: Response) : Response {
        const result: any = {
            status: this.type,
            message: this.message,
            data: this.data,
        };

        if (this.type === 'success') {
            return res.status(this.statusCode).json(result);
        }
        return res.status(this.statusCode).json({
            status: this.type,
            message: this.message,
        });
    }
}
