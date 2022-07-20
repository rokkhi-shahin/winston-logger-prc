const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize, prettyPrint } = format;


const myFormat = printf(({ level, message, timestamp }) => {
    return `[${level}] ${timestamp} ${message}`;
});

const productionLogger = () => {
    return createLogger({
        level: 'debug',
        format: combine(
            timestamp(),
            format.json()
        ),
        // defaultMeta: { service: 'user-service' },
        transports: [
            //
            // - Write all logs with importance level of `error` or less to `error.log`
            // - Write all logs with importance level of `info` or less to `combined.log`
            //
            new transports.File({ filename: 'server.log' }),
            // new transports.Console(),

        ],
        exceptionHandlers: [
          new transports.File({ filename: 'exceptions.log' }),
          // new transports.Console(),
        ]
    });
}

module.exports = productionLogger;