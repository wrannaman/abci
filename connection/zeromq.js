const zmq = require('zeromq')
const logger = require('../logger')
const { chain_host, chain_port, abci_port, abci_host } = require('../config.json')

const subSock = zmq.socket('sub');
const pubSock = zmq.socket('pub');

/*
  Zeromq
    subSock needs to connect to the remote publisher.
    pubSock binds this app to a port for subs to connect to.
*/

subSock.connect(`tcp://${chain_host}:${chain_port}`);
pubSock.bindSync(`tcp://${abci_host}:${abci_port}`);

/* Consensus */
subSock.subscribe('consensus.init_chain');
subSock.subscribe('consensus.begin_block');
subSock.subscribe('consensus.deliver_tx');
subSock.subscribe('consensus.end_block');
subSock.subscribe('consensus.commit');

/* Info */
subSock.subscribe('info.app_state');
subSock.subscribe('info.set_option');
subSock.subscribe('info.query');
subSock.subscribe('info.echo');

/* Mempool */
subSock.subscribe('mempool.check_tx');

logger.info(`Zeromq - pub: tcp://${abci_host}:${abci_port} || sub: tcp://${chain_host}:${chain_port}`)

module.exports = { pubSock, subSock }
