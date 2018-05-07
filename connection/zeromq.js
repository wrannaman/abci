const zmq = require('zeromq')
const logger = require('../logger')
const { port } = require('../config.json')

const subSock = zmq.socket('sub');
const pubSock = zmq.socket('pub');

subSock.connect(`tcp://0.0.0.0:${port}`);

/* Consensus */
subSock.subscribe('consensus.init_chain');
subSock.subscribe('consensus.begin_block');
subSock.subscribe('consensus.end_block');
subSock.subscribe('consensus.commit');

/* Info */
subSock.subscribe('info.app_state');
subSock.subscribe('info.set_option');
subSock.subscribe('info.query');
subSock.subscribe('info.echo');

/* Mempool */
subSock.subscribe('mempool.check_tx');

logger.info(`ABCI Zeromq connected tcp://0.0.0.0:${port}`)

module.exports = { pubSock, subSock }
