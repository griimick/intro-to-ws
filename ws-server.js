import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8082 }); // pass in server option if an external server

wss.on('connection', function connection(ws) {
	ws.on('message', function message(data) {
		console.log('received: %s', data);
	});

	ws.send('Welcome to my websocket server.');

	ws.on('close', function close(error) {
		console.log('closed', error);
	});
});