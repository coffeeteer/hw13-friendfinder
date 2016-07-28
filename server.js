var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var handlebars = require('handlebars');

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

console.log('RUNNING, like Forest');


// var fs = require('fs');

// app.listen(3000);

// fs.readFile('friends.js', function(err, data) {
// 	if(err) {
// 		console.log(err, 'error');
// 	}else{
// 		console.log('RUNNING, like Forest');
// 	}	
// });
