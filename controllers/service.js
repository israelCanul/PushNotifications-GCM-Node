// services.js
var jwt = require('jwt-simple');  
var moment = require('moment');  
var config = require('./config');
var crypto = require('crypto');

exports.createToken = function(user) {  
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, "days").unix(),
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
};


exports.encriptar= function(user, pass) {
   // usamos el metodo CreateHmac y le pasamos el parametro user y actualizamos el hash con la password
   var hmac = crypto.createHmac('sha256', user).update(pass).digest('hex')
   return hmac
}