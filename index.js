var express = require('express');
var app = express();

var port = process.env.PORT ? process.env.PORT : 1337;

app.all('*', function (req, res){
	res.json(
		200,
		{
			method: req.method,
			path: req.path,
			query: req.query,
			body: req.body
		}
	);
});

app.listen(port);

console.log('Running Fake API Server at http://127.0.0.1:' + port);
