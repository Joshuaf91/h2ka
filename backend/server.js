//node modules
const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');

//db connection
const sequelizeConnection = require('./db');


//router initilization
const app = express();

//body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//deals with my session
app.use(session({
  secret: 'adoseparG',
  resave: true,
  saveUninitialized: true,
}))

//router
app.use(express.static(path.join(__dirname, '../frontend/assets')));

//Api route handler
app.use("/api",require("./api-router"));

//view route handler
app.get("/*", (req,res)=>{
	res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

//listen on port 9999
app.listen('9999',
	() => {
		console.log('Listening on port 9999')
	}
);
