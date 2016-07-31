/*var express = require('express');
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
*/


// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// These routes give our server a "map" of how to respond when users visit or request data 

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
  console.log('App listening on PORT ' + PORT);
})

