/* Info Handlers */
const logger = require('../logger');
const { pubSock } = require("../connection/zeromq");
const { getState } = require('../state')

module.exports.app_state_handler = (message) => {
	message = message.toString()
	// logger.info(`info - app_state_handler - ${message}`)
	const state = getState()
	const { app_hash, height } = state;
	pubSock.send(['info.app_state', JSON.stringify({ app_hash, height })]);
}

module.exports.set_option_handler = (message) => {
	message = message.toString()
	// logger.info(`info - set_option_handler - ${message}`)
}

module.exports.query_handler = (message) => {
	message = message.toString()
	// logger.info(`info - query_handler - ${message}`)
}

module.exports.echo_handler = (message) => {
	message = message.toString()
	// logger.info(`info - echo_handler - ${message}`)
}
