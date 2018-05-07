
const error = require('./error')
const logger = require('./logger')
const { zeromq } = require('./connection')
const { consensus, info, mempool } = require('./handler');

const {
	init_chain_handler,
	begin_block_handler,
	deliver_tx_handler,
	end_block_handler,
	commit_handler,
	unknown_handler
} = consensus

const {
	app_state_handler,
	set_option_handler,
	query_handler,
	echo_handler
} = info

const { check_tx } = mempool;

const subSock = zeromq.subSock;
const pubSock = zeromq.pubSock;

/*
	Consensus Connection
		InitChain, BeginBlock, DeliverTx, EndBlock, Commit

		These calls are DAG => ABCI
*/
subSock.on('message', function(topic, message) {
	topic = topic.toString()
	switch (topic) {
		/* Consensus */
		case 'consensus.init_chain':
			return init_chain_handler(message)
			break;
		case 'consensus.begin_block':
			return begin_block_handler(message)
			break;

		case 'consensus.deliver_tx':
			return deliver_tx_handler(message)
			break;

		case 'consensus.end_block':
			return end_block_handler(message)
			break;

		case 'consensus.commit':
			return commit_handler(message)
			break;


		/* Info */
		case 'info.app_state':
			return app_state_handler(message)
			break;
		case 'info.set_option':
			return set_option_handler(message)
			break;

		case 'info.query':
			return query_handler(message)
			break;

		case 'info.echo':
			return echo_handler(message)
			break;

		/* Mempool */
		case 'mempool.check_tx':
			return echo_handler(message)
			break;


		default:
			return unknown_handler(message)
	}
});
