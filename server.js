var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var PORT = 3000;
exports.dirname = __dirname;

console.log(__dirname)

// var exphbs = require('express-handlebars');
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

require(__dirname +'/app/routing/html-routes')(app) //used to find routing issues
require(__dirname +'/app/routing/api-routes')(app)

app.listen(PORT, function(){
	console.log('RUNNING');
});


