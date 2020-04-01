import winston from 'winston';
import config from '../config';


const transports = [];

if (process.env.NODE_ENV !== 'development') {
    // prod
    transports.push(
        new winston.transports.Console({
            handleExceptions: true,
            format: winston.format.combine(
                winston.format.cli(),
                winston.format.splat(),
                winston.format.colorize(),
            ),
        }),
    );

} else {
    // dev
    transports.push(
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            format: winston.format.combine(
                winston.format.cli(),
                winston.format.splat(),
                winston.format.colorize(),
            ),
        }),
    );

}

const loggerInstance = winston.createLogger({
    transports,
    silent: false,
    level: config.logs.level,
    levels: winston.config.npm.levels,
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json(),
        winston.format.colorize(),
    ),
    exitOnError: false,
});

export class MyStream {
    write(text: string): void {
        loggerInstance.info(text.substring(0, text.lastIndexOf('\n')));
    }
}

export default loggerInstance;
