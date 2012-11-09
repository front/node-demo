// Set up db and models
var mongoose    = require('mongoose'),
strategyModel = require('../models/StrategyModel');

// Connect to DB
mongoose.connect('mongodb://localhost/members');



 exports.index = function(req, res){
 	res.render('index', { title: 'Create new strategy' });
 };

 exports.post = function(req,res){
 	strategy = new strategyModel();
 	strategy.title = req.body.title;
 	strategy.vision = req.body.vision;
 	console.log(strategy);

 	strategy.save(function (err){
 		if(err){
 			console.log(err);
 		}
 		else {
 			console.log( "saved strategy");
 		}
 	});

 	res.render('index.jade', { title: 'My strategies'});
 }


 exports.strategies = function(req,res){
 	console.log('strategies');
 	strategyModel.find({}, function(err,searchResult){
 		if(err){
 			console.log(err);
 		}
 		res.render('strategies.jade', {title: 'Strategies', strategies: searchResult})
 	});
 }

