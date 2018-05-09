/* Consensus Handlers */
const logger = require('../logger');
const { setState, getState } = require('../state')
const crypto = require('crypto');

const { pubSock } = require('../connection/zeromq')

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
	// logger.info(`begin_block_handler - ${message}`)
	message = JSON.parse(message)
	const { height, time, last_block_hash } = message.header
	const { hash } = message;
	setState('hash', hash)
	setState('height', height)
	setState('time', time)
	setState('last_block_hash', last_block_hash)
}

module.exports.deliver_tx_handler = (message) => {
	const md5sum = crypto.createHash('md5');
	message = message.toString()
	logger.info(`deliver_tx_handler - ${message}`)
	message = JSON.parse(message)
	console.log('MESSAGE', message)
	const h = md5sum.update(JSON.stringify(message))
	const hash = md5sum.digest('hex')
	console.log('HASH', hash)
	const deliver_tx_response = {
		code: 0,
		data: {},
		log: '',
		info: {},
		gasWanted: 0,
		gasUsed: 0,
		tags: [{ key: 'value'},],
		fee: 0,
	}
	pubSock.send(['consensus.deliver_tx', JSON.stringify(deliver_tx_response)]);
}

module.exports.end_block_handler = (message) => {
	message = message.toString()
	logger.info(`end_block_handler - ${message}`)
}

module.exports.commit_handler = (message) => {
	message = message.toString()
	logger.info(`commit_handler - ${message}`)
}
