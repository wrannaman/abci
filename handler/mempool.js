/* Mempool Handlers */
const logger = require('../logger');

module.exports.check_tx = (message) => {
	message = message.toString()
	logger.info(`mempool - check_tx - ${message}`)
}
