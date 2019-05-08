var express = require('express');

var app = express();

app.get('/cars', function(request, response){
	response.render('cars');
})
app.get('/cats', function(request, response){
	response.render('cats');
})
app.get('/cars/new', function(request, response) {
	response.render('car_form');
})

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/static'));

app.listen(8000, function() {
	console.log("listening on port 8000");
})