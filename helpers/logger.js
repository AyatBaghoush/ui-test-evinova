const log4js = require('log4js');
const path = require('path');

// Generate a timestamped filename
const timestamp = new Date().toISOString().replace(/[:.]/g, '-'); // Safe for filenames
const logFileName = path.resolve(`logs/test-${timestamp}.log`);

log4js.configure({
  appenders: {
    console: { type: 'console' },
    file: { type: 'file', filename: logFileName }
  },
  categories: {
    default: { appenders: ['console', 'file'], level: 'debug' }
  }
});

const logger = log4js.getLogger();

module.exports = logger;
