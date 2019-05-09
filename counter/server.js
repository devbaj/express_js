var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session')

app.use(express.static(__dirname + '/views'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(session({
	secret: 'Sakurajima Mai',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 60000 }
}))

app.get('/', function(req, res){
	if (req.session.count >= 0) {
		req.session.count += 1;
	} else {
		req.session.count = 1;
	}
	res.render("index", { count: req.session.count });
})
app.post('/add2', function(req, res){
	req.session.count += 1;
	res.redirect('/')
})
app.post('/reset', function(req, res){
	req.session.count = 0;
	res.redirect('/');
})

app.listen(8000, function(){
	console.log ('listening on port 8000');
});