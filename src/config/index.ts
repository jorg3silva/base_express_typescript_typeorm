import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (!envFound) {
    // This error should crash whole process
    throw new Error('⚠️  Couldn\'t find .env file  ⚠️');
}

export default {
    /**
     * Your favorite port
     */
    port: parseInt(process.env.PORT, 10),

    /**
     * That long string from mlab
     */
    databaseHost: process.env.DB_HOST,

    /**
     * Your secret sauce
     */
    jwtSecret: process.env.JWT_SECRET,

    /**
     * Used by winston logger
     */
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },

    /**
     * API configs
     */
    api: {
        prefix: '/example/path/api/v1',
    },

    /**
     * Sendgrid email credentials
     */
    emails: {
        apiKey: 'API key from sengrid',
        domain: 'Domain Name from sendgrid',
        // add others here.
    },
};
