var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var User = sequelize.define('User', {
	username: Sequelize.STRING
});

/*  Create a '/users' route that responds to 
a GET request with all users in the database */

app.get('/users', function(req, res){
	models.User.findAll({
		include: [ User.username ]
	}).then(function(users) {
		res.render(JSON.stringify(users));
	});
});

module.exports = { 
	app: app,
	User: User
};
