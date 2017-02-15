let http = require('http');
let express = require('express');
let app = express();
let server = http.createServer(app);

// Default route
app.use('/', (req, res) => {
	res.send('Hello world!');
});

server.listen(process.env.NODE_PORT, () => {
	console.log('Application running on port: ' + process.env.NODE_PORT);
});
