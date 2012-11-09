// Set up db and models
var mongoose    = require('mongoose'),
strategyModel = require('../models/StrategyModel');
goalModel = require('../models/StrategyModel');

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
};


exports.strategies = function(req,res){
	console.log('strategies');
	strategyModel.find({}, function(err,searchResult){
		if(err){
			console.log(err);
		}
		res.render('strategies.jade', {title: 'Strategies', strategies: searchResult});
	});
};
exports.strategy = function(req,res){
	strategyModel.find({title: req.params.title}, function(err,searchResult){
		console.log('search');
		console.log(searchResult[0]);
		res.render('strategy.jade', {title: "Strategy: " + req.params.title, strategy: searchResult[0]});
	});
};

exports.postNewGoal = function(req, res){

	//Save new goal
	goal = new goalModel();
	goal.title = req.body.goal;
	goal.save(function (err){
		if(err){
			console.log(err);
		}
		else {
			console.log( "saved goal: " + req.body.goal);
			strategyModel.update({title: req.params.title}, { $push: {goals: req.body.goal} }, function(err){
				if(err){
					console.log("error updating");
				}
				else{
					console.log("Updating complete");
				}
			});
		};



	});
	strategyModel.find({title: req.params.title}, function(err,searchResult){
		console.log('search');
		console.log(searchResult[0]);
		res.render('strategy.jade', {title: "Strategy: " + req.params.title, strategy: searchResult[0]});
	});

};
