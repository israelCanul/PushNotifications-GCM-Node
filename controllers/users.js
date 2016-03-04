//File: controllers/tvshows.js
var mongoose = require('mongoose');
var User  = mongoose.model('Users');

//GET - Return all Userss in the DB
exports.findAllUsers = function(req, res) {
	User.find(function(err, users) {
   		if(err) res.send(500, err.message);

    	console.log('GET /users')
		if(users.length>0){
			res.status(200).jsonp(users);
		}else{
			res.send('Sin datos');	
		}
		
	});
	
};

//GET - Return a User with specified ID
exports.findById = function(req, res) {
	User.findById(req.params.id, function(err, user) {
    	if(err) return res.send(500, err);
    	console.log('GET /users/' + req.params.id);
		res.status(200).jsonp(user);
	});
};

//POST - Insert a new user in the DB
exports.addUser = function(req, res) {
	console.log('POST');
	var permisos=JSON.parse(req.body.permissions);
	console.log(permisos);

	var user = new User({
		username: 	  req.body.username,
		contrasena:  req.body.contrasena,
		email:   req.body.email,
		type:  req.body.tipo,
		permissions:    permisos,
		active:  true,
	});
	//
	user.save(function(err, user) {
		if(err) return res.status(500).send(err.message);
    	res.status(200).send('this is a petition by get<pre>' + user+'</pre>');
	});
};

/*//PUT - Update a register already exists
exports.updateTVShow = function(req, res) {
	TVShow.findById(req.params.id, function(err, tvshow) {
		tvshow.title   = req.body.petId;
		tvshow.year    = req.body.year;
		tvshow.country = req.body.country;
		tvshow.poster  = req.body.poster;
		tvshow.seasons = req.body.seasons;
		tvshow.genre   = req.body.genre;
		tvshow.summary = req.body.summary;

		tvshow.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(tvshow);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.deleteTVShow = function(req, res) {
	TVShow.findById(req.params.id, function(err, tvshow) {
		tvshow.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200);
		})
	});
};*/
