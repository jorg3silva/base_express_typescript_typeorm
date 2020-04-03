import { Router } from 'express';
import { UsersController } from '../controllers/users';
import * as v from '../middlewares/validations/validate';


export const router = Router();


router.get('/', UsersController.getAll); // list
router.post('/', UsersController.create); // create
router.get('/:id', UsersController.getOne); // get one
router.put('/:id', UsersController.edit); // edit
router.delete('/:id', UsersController.delete); // delete
router.get('/roles/:id', UsersController.getUserAndRoles); // delete

// with validations
// router.post('/', v.salesValidationRulesCreate(), v.validate , UsersController.create); // create

