var projects = require('../projects.json');
/*
 * GET home page.
 */

exports.view = function(req, res){
  	res.render('index', projects);
  	projects["grid"] = true;
};

exports.viewGrid = function(req, res){
	
	res.render('index.handlebars', projects);
	projects["grid"] = false;
};