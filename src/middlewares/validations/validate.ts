import { ValidationError, validationResult } from 'express-validator';
import { ResponsesUtil as Responses } from '../../util/responses';
import * as HttpStatus from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
export { salesValidationRulesCreate, salesValidationRulesEdit } from './sales';

export const validate = (req: Request, res: Response, next: NextFunction): (Response|void) => {

    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map((err: ValidationError): any => extractedErrors.push({ [err.param]: err.msg }));

    const util = new Responses();
    util.setError(HttpStatus.UNPROCESSABLE_ENTITY, extractedErrors);
    return util.send(res);

};
