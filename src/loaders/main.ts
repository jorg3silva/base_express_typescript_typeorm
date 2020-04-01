import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logger from './logger';
import { router } from '../routes';
import config from '../config';
import path from 'path';
import { serve as swaggerUiServe, setup as swaggerUiSetup } from 'swagger-ui-express';
import * as swaggerDocument  from './../../swagger.json';
// tslint:disable-next-line:no-var-requires
const createError = require('http-errors'); // TODO: check how to import with typescript
import * as HttpStatus from 'http-status-codes';


/**
 *
 *      Main Loader of modules for app
 *
 * @param {any} app
 * @author Jorge Silva Aguilera
 */
export default ({ app }: { app: express.Application }): void => {

    // this method are for check status of service
    app.get('/status', (req: Request, res: Response): void => {
        res.status(200).end();
    });

    // this method are for check status of service
    app.head('/status', (req: Request, res: Response): void => {
        res.status(200).end();
    });

    // The magic package that prevents frontend developers going nuts
    // Alternate description:
    // Enable Cross Origin Resource Sharing to all origins by default
    const options:cors.CorsOptions = {
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
        credentials: true,
        methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
    };

    app.use(cors(options));

    // Some sauce that always add since 2014
    // "Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it."
    // Maybe not needed anymore ?
    app.use(require('method-override')());

    // Middleware that transforms the raw string of req.body into json
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // same for the cookies
    app.use(cookieParser());

    // path handler (for swagger maybe)
    app.use(express.static(path.join(__dirname, 'public')));

    // Swagger
    app.use('/api-docs', swaggerUiServe, swaggerUiSetup(swaggerDocument));

    // Load API routes
    app.use(config.api.prefix, router);

    // catch 404 and forward to error handler
    app.use((req: any, res: any, next: any): void => {
        next(createError(HttpStatus.NOT_FOUND));
    });

    // error handlers
    app.use((err: any, req: Request, res: Response, next: NextFunction): void => {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = process.env.NODE_ENV === 'development' ? err : {};

        if (process.env.NODE_ENV === 'development' && err.status !== HttpStatus.NOT_FOUND) {
            logger.error(err.stack);
        }

        // render the error page
        const errCode = err.status || HttpStatus.INTERNAL_SERVER_ERROR;
        res.status(errCode);
        res.json({
            code: errCode,
            error: errCode === HttpStatus.INTERNAL_SERVER_ERROR &&
                process.env.NODE_ENV === 'development' ? { message: err.message } : err,
        });
    });

};
