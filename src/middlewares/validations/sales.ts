import { body, param } from 'express-validator';

export const salesValidationRulesCreate = (): any => {
    return [
        body('usersId')
            .isInt().withMessage('Must be an integer'),
        body('paymentMethodsId')
            .isInt().withMessage('Must be an integer'),
        body('total')
            .isInt().withMessage('Must be an integer').custom((total: number): any => {
                if (total < 0) {
                    throw new Error('Must be greater or equal than 0');
                } else {
                    return true;
                }
            }),
        body('storesId')
            .isInt().withMessage('Must be an integer'),
    ];
};

export const salesValidationRulesEdit = (): any => {
    return [
        param('id')
            .exists().withMessage('This param is required')
            .isInt().withMessage('Must be an integer'),
        body('total')
            .isInt().withMessage('Must be an integer').custom((total: number): any => {
                if (total < 0) {
                    throw new Error('Must be greater or equal than 0');
                } else {
                    return true;
                }
            }),
    ];
};
