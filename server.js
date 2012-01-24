var fs = require("fs"),
	http = require("http");

// servidor
server = http.createServer(function(reg, res)
{
	fs.readFile("index.html", function(err, data){
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write(data);
		res.end();
	});
});

server.listen("localhost", 8080);

var nowjs = require("now");
var everyone = nowjs.initialize(server);

everyone.now.distributeMessage = function(msg){
	everyone.now.receiveMessage(this.now.name, msg);
}