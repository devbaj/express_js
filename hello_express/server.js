var express = require('express');
// console.log("Let's find out what express is", express);

var app = express();
// console.log("Let's find out what app is", app);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response) {
	// console.log("The request object", request);
	// console.log("The response object", response);
	response.render("index");
});

app.post('/users', function(req, res){
	console.log("POST DATA: \n", req.body);
	res.redirect('/');
})

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(8000, function() {
	console.log("listening on port 8000");
})
