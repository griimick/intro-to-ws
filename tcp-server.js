const net = require("net");

const server = net.createServer(socket => {
	console.log("new connectoin");

	socket.write();
	socket.on("data", data => {
		console.log(data.toString());
	});
})

server.listen(8080);