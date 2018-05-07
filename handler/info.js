/* Info Handlers */
const logger = require('../logger');

module.exports.app_state_handler = (message) => {
	message = message.toString()
	logger.info(`info - app_state_handler - ${message}`)
}

module.exports.set_option_handler = (message) => {
	message = message.toString()
	logger.info(`info - set_option_handler - ${message}`)
}

module.exports.query_handler = (message) => {
	message = message.toString()
	logger.info(`info - query_handler - ${message}`)
}

module.exports.echo_handler = (message) => {
	message = message.toString()
	logger.info(`info - echo_handler - ${message}`)
}
