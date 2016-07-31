var path = require('path');

module.exports = function(app){
	//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
	app.get('/api/friends', function(req,res) {
	    res.render('Hello my friends.');//'index', survey[0]);
	});

	//A POST routes /api/friends. This will be used to handle incoming survey results. 
	//This route will also be used to handle the compatibility logic.
	app.post('/api/friends', function (req, res) {
	  //res.send('POST my friends.');
	  console.log(req.body)
	});
}



module.exports = function(app){

  // HTML GET Requests
//=============================================
//Basic route that sends the user first to the Home Page
	app.get('/', function(req, res){
	  res.sendFile(path.join(__dirname, '/../public/home.html'));
	});
	// sends user to survey HTML
	app.get('/survey', function(req, res){
	  res.sendFile(path.join(__dirname, '/../public/survey.html'));
	});
}