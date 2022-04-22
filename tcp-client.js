const net = require("net");
 
const SERVER_PORT = 8080;
const SERVER_HOST = '127.0.0.1';

const client = new net.Socket();

client.connect({ port: SERVER_PORT, host: SERVER_HOST }, function() {
    console.log('TCP connection established with the server.');
    client.write('Hello server');
});

client.on('data', function(data) {
    console.log(`Message received from the server: \n${data.toString()}`);
    
    client.end();
});

client.on('end', function() {
    console.log('Requested an end to the TCP connection');
});