
// DEPENDENCIES

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');


var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 80; // Sets an initial port. We'll use this later in our listener

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//access to public files
app.use(express.static(__dirname + '/public'));
//using method-override
app.use(methodOverride('_method'));
//setting up handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// ROUTER

require('./routing/api-routes.js')(app); 
require('./routing/html-routes.js')(app);

// LISTENER

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});