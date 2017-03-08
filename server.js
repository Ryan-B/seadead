var express = require('express');
var app = express();
var port = process.env.PORT || 1991;
var server = app.listen(port, function(){
	console.log("Hello at 1991");
});

//Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// set up a static file server that points to the "client" directory
app.use(express.static(__dirname+'/static'));

// Mongoose
require('./server/config/mongoose.js');
// HTTP Routes
require('./server/config/routes.js')(app);