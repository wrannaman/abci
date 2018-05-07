const net = require('net');

const error = require('./error')
const logger = require('./logger')
const { abci_port } = require('./config.json')

var client = new net.Socket();
client.connect(abci_port, '127.0.0.1', function() {
	console.log('Connected');
	client.write('info');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});

logger.info(`ABCI client.`)
