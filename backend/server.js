const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
// const sequelizeConnection = require('./db');

//body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// //router
// app.use(express.static(path.join(__dirname, '/frontend/assets')));

//view handler
app.get("/*", (req,res)=>{
	res.sendFile(path.join(__dirname, "../frontend/index.html"));
})

//listen on port 9999
app.listen('9999', 
	() => {console.log('Listening on port 9999')}
);




