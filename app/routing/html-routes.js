var dirname = require('../../server').dirname;
module.exports = function(app) {
//A GET Route to display the survey page.
app.get('./public/survey.html', function(req,res) {
    res.render('Hello I\'m here.');//'index', survey[0]);
});

//A default USE route that leads to home.html which displays the home page.
app.get('/', function(req,res) {

    res.sendFile(dirname + '/app/public/home.html');//'index', survey[0]);
});

app.get('/survey', function(req,res) {

    res.sendFile(dirname + '/app/public/survey.html');//'index', survey[0]);
});


}
//req.body