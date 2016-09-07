var express = require('express');
var app = express();


app.get('/api/hello', function(req, res) {

res.send({title:'Hello World!'});




});

//serves the html  (http-server)
app.use(express.static('build'));

app.listen(8080, function() {
	console.log('Listening on port 8080!');
});