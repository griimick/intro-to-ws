const net = require("net");

const server = net.createServer(socket => {
	console.log("new connection from client.\n");

	socket.write('Welcome to my TCP Server...\n');
	socket.on("data", data => {
		console.log(data.toString());
	});
	socket.on("close", err => {
		console.log("client closed connection");
	})
})

server.listen({ port : 8080 });