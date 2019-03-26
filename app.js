var express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('homepage');
});

var port = 4000;
app.listen(port, function() {
	console.log(`Example app listening on port ${port}!`);
});
