/* Consensus Handlers */
const logger = require('../logger');

module.exports.unknown_handler = (message) => {
	message = message.toString()
	logger.info(`unknown_handler - ${message}`)
}

module.exports.init_chain_handler = (message) => {
	message = message.toString()
	logger.info(`init_chain_handler - ${message}`)
}

module.exports.begin_block_handler = (message) => {
	message = message.toString()
	logger.info(`begin_block_handler - ${message}`)
}

module.exports.deliver_tx_handler = (message) => {
	message = message.toString()
	logger.info(`deliver_tx_handler - ${message}`)
}

module.exports.end_block_handler = (message) => {
	message = message.toString()
	logger.info(`end_block_handler - ${message}`)
}

module.exports.commit_handler = (message) => {
	message = message.toString()
	logger.info(`commit_handler - ${message}`)
}
