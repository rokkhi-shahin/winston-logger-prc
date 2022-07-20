const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize } = format;


const myFormat = printf(({ level, message, timestamp }) => {
    return `[${level}] ${timestamp} ${message}`;
});

const developmentLogger = () => {
    return createLogger({
        level: 'debug',
        format: combine(
            colorize(),
            timestamp(),
            myFormat
        ),
        // defaultMeta: { service: 'user-service' },
        transports: [
            //
            // - Write all logs with importance level of `error` or less to `error.log`
            // - Write all logs with importance level of `info` or less to `combined.log`
            //
            new transports.Console(),
        ],
    });
}

module.exports = developmentLogger;