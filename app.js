//Initialize requirements
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var routes = require("./routes/routes");

//Set app equial to express function( At least I think so)

var app = express();

//Set port
app.set('port' , process.env.PORT || 3000);

//Set static path

app.use(express.static(path.join(__dirname , '/public')));

//Set view engine

app.set('view engine', 'pug');
//Set body parser

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//Set routes

app.get('/' , routes.home);

app.get('/login' , routes.login);


app.get('/user' , routes.userLogin);


app.post('/user_login' , function(req, res) {
  console.log('Username: ' + req.body.username);
  res.end(JSON.stringify(req.body.username));
  res.redirect(302 , '/user');
});

app.get('/*' , routes.notFound);

//App set port && listen to it

app.listen(app.get('port') , function() {
  console.log("Server Running on http://localhost:" + app.get('port'));
});
