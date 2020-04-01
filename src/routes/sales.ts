import { Router } from 'express';
import { SalesController } from '../controllers/sales';
import * as v from '../middlewares/validations/validate';


export const router = Router();


router.get('/', SalesController.getAll); // list
router.post('/', v.salesValidationRulesCreate(), v.validate , SalesController.create); // create
router.get('/:id', SalesController.getOne); // get one
router.put('/:id', v.salesValidationRulesEdit(), v.validate, SalesController.edit); // edit
router.delete('/:id', SalesController.delete); // delete

