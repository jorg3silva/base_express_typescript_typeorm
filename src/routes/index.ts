import { Router, Request, Response } from 'express';
import { router as salesRouter }  from './sales';

export const router = Router();

// Import other routes here
router.use('/sales', salesRouter);


// default route.
router.get('/', (req: Request, res: Response): void => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        message: 'Welcome to express example project API :) ...',
    }));
});
