/*var path = require('path');

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
}*/


var peeps = require('../data/friends.js');

var path = require('path');




// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

  // API GET Requests
  // Below code handles when users "visit" a page. 
  // In each of the below cases when a user visits a link 
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table) 
  // ---------------------------------------------------------------------------

  app.get('/api/friends', function(req, res){
    res.json(friendsData);
  });



  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate Javascript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the friendsData array)
  // ---------------------------------------------------------------------------

  app.post('/api/friends', function(req, res){
  
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table 
  var newName = '';
  var image = '';

  // to remember the index of the person who has the best score
  var match = 0;
  // best score - lowest number wins
  var matchScore = 1000;


  for(var i = 0; i < peeps.length; i++) {
  	console.log(peeps[i].name);
  	var tDiff = 0;

  	for(var j = 0; j < 10; j++){
  		//console.log(peeps[i].scores[j]);
  		//console.log(Math.abs(peeps[i].scores[j] - req.body.scores[j]) );

  		tDiff = tDiff + Math.abs(peeps[i].scores[j] - req.body.scores[j]);
  		
  	}
  	console.log('total difference is ' + peeps[i].name + " is " + tDiff);

  	if(tDiff < matchScore) {
  		matchScore = tDiff;
  		match = i;
  	}

  }

  console.log("=========================");
  console.log("the best person is " + peeps[match].name + " with a score of " + matchScore);
  console.log("=========================");

  peeps.push(req.body);
  res.json({
  	
  	name: peeps[match].name, 
  	photo: peeps[match].photo
  	
  	}); // KEY LINE
    

    

  });

}