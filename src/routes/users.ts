import { Router } from 'express';
import { UsersController } from '../controllers/users';
import * as v from '../middlewares/validations/validate';


export const router = Router();


router.get('/', UsersController.getAll); // list
router.post('/', v.salesValidationRulesCreate(), v.validate , UsersController.create); // create
router.get('/:id', UsersController.getOne); // get one
router.put('/:id', v.salesValidationRulesEdit(), v.validate, UsersController.edit); // edit
router.delete('/:id', UsersController.delete); // delete

