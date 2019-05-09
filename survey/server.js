var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/views'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(session({
	secret: 'Shinomiya Kaguya',
	resave: false,
	saveUninitialized: true,
	cookie: {maxAge: 60000}
}));

app.get('/', function(req,res) {
	res.render('index');
})
app.post('/process', function(req,res){
	console.log(req.body);
	req.session.name = req.body.name;
	req.session.loc = req.body.loc;
	req.session.lang = req.body.lang;
	req.session.comment = req.body.comment;
	res.redirect('/result');
})
app.get('/result', function(req,res){
	res.render('result', {user: req.session});
})

app.listen(8000, function() {
	console.log('listening on port 8000')
})