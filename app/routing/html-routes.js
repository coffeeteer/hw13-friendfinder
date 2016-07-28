//A GET Route to display the survey page.
app.get('./public/survey.html', function(req,res) {
    res.render('Hello I\'m here.');//'index', survey[0]);
});

//A default USE route that leads to home.html which displays the home page.
app.get('./public/home.html', function(req,res) {
    res.render('Hello, I\'m home!');//'index', survey[0]);
});
