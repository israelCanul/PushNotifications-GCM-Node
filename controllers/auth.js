/*
code:
250=error
300=ok
400=null
500=vacio

*/

var mongoose = require('mongoose');
var User  = mongoose.model('Users');
var service = require('../controllers/service');


exports.emailLogin = function(req, res) {  
    User.findOne({email: req.body.email.toLowerCase()}, function(err, user) {
    	if(err) res.status(500).send({'message':'error','data':err,'code':'250'});

    	if(user!=null){
    		//Encriptamos por medio de una función la contraseña 
   			var passEncriptada = service.encriptar(user.email, req.body.password);

    		if(user.password==passEncriptada){
		    	res.set('Content-Type', 'application/json');
				res.status(200).jsonp({'message':'Data User','data':user,'code':'300',token: service.createToken(user)});    		
    		}else{
	    		res.set('Content-Type', 'application/json');
				res.status(200).jsonp({'message':'Invalid Password','data':null,'code':'250'}); 
    		}

    	}else{
	    	res.set('Content-Type', 'application/json');
			res.status(200).jsonp({'message':'User does not exists','data':user,'code':'400'});    		    		
    	}
        /*return res
            .status(200)
            .send({token: service.createToken(user)});*/
    });
};