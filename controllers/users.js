/*
code:
250=error
300=ok
400=null
500=vacio

*/

//File: controllers/tvshows.js
var mongoose = require('mongoose');
var User  = mongoose.model('Users');
var service = require('../controllers/service');

//GET - Return all Userss in the DB
exports.findAllUsers = function(req, res) {
	User.find(function(err, users) {
   		if(err) res.status(500).send({'message':'error','data':err,'code':'250'});

    	console.log('GET /users')
		if(users.length>0){
			res.set('Content-Type', 'application/json');
			res.status(200).jsonp({'message':'User List','length':users.length,'data':users,'code':'300'});
		}else{
			res.send({'message':'The list has no users','data':user,'code':'500'});	
		}
		
	});
};

//GET - Return a User with specified ID
exports.findById = function(req, res) {
	User.findById(req.params.id, function(err, user) {
    	if(err) return res.status(500).send({'message':'error','data':err,'code':'250'});
    	console.log('GET /users/' + req.params.id);
    	console.log(user);
    	if(user!=null){
	    	res.set('Content-Type', 'application/json');
			res.status(200).jsonp({'message':'Data User','data':user,'code':'300'});    		
    	}else{
	    	res.set('Content-Type', 'application/json');
			res.status(200).jsonp({'message':'User does not exists','data':user,'code':'400'});    		    		
    	}	

	
	});
};

//POST - Insert a new user in the DB
exports.addUser = function(req, res) {
	console.log('POST');
	// se castea el json de los permisos 
	var permisos=JSON.parse(req.body.permissions);
    //Encriptamos por medio de una función la contraseña 
   	var passEncriptada = service.encriptar(req.body.email, req.body.password);

	var user = new User({
		username: 	  req.body.username,
		password:  passEncriptada,
		email:   req.body.email,
		type:  req.body.tipo,
		permissions:    permisos,
		active:  true,
	});
	//
	user.save(function(err, user) {
		if(err) return res.status(500).send({'message':'error','data':err,'code':'250'});
		res.set('Content-Type', 'application/json');
    	res.status(200).jsonp({'message':'New User','data':user,'code':'300'});
	});
};

//PUT - Update a register already exists
exports.updateUser = function(req, res) {
	// se castea el json de  los permisos 
	//res.status(200).send('New User :<br><pre></pre>');
	var permisos=JSON.parse(req.body.permissions);
	console.log(req.body);
	User.findById(req.params.id, function(err, user) {
		user.username   	= req.body.username;
		user.password    	= req.body.password;
		user.email 			= req.body.email;
		user.type  			= req.body.tipo;
		user.active 		= true;
		user.permissions   	= permisos;

		user.save(function(err) {
			if(err) return res.status(500).send({'message':'error','data':err,'code':'250'});
			res.set('Content-Type', 'application/json');
      		res.status(200).jsonp({'message':'User Updated','data':user,'code':'300'});
		});
	});

};

//DELETE - Delete a User with specified ID
exports.deleteUser = function(req, res) {
	User.findById(req.params.id, function(err, user) {
		user.remove(function(err) {
			if(err) return res.send(500, err);
			res.set('Content-Type', 'application/json');
      		res.status(200).jsonp({'message':'User Deleted','code':'300'});
		})
	});
};
