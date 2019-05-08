var express = require('express');

var app = express();

app.get('/cats', function(request, response){
	response.render('cats');
})
app.get('/cats/:catid(\\d+)', function(request, response) {
	console.log(request.params);
	var cat = {
		id: request.params.catid
	};
	if (cat.id == '1') {
		cat.color = "black";
		cat.name = "Zorro";
		cat.age = 13;
		cat.foods = ["mice","pigeons","crows"]
	}
	else if (cat.id == '2') {
		cat.color = "blonde";
		cat.name = "Danny";
		cat.age = 2;
		cat.foods = ["dry cat food", "wet cat food"];
	}
	else if (cat.id == '3') {
		cat.color = "spotted";
		cat.name = "Felixus Maximus, Bringer of Doom";
		cat.age = "6,529";
		cat.foods = ["human souls", "tears of the innocent", "tuna"];
	}
	response.render('catinfo', {cat: cat});
})

app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(8000, function(){
	console.log('listening on port 8000')
})