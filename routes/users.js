var express = require('express');
var router = express.Router();
var GCMPush = require('gcm-push');
var gcm = new GCMPush('AIzaSyBw0dGqTqt45R9edV5zT4o-wGYbc5Rca9U'); 
var UsersCtrl = require('../controllers/users');
var middleware = require('../controllers/middleware');


/* GET users listing. */
router.get('/',middleware.ensureAuthenticated,UsersCtrl.findAllUsers);
/* GET by id */
router.get('/:id',UsersCtrl.findById);
/* PUT by id */
router.put('/:id',UsersCtrl.updateUser);
/* DELETE by id */
router.delete('/:id',UsersCtrl.deleteUser);
/* POST to users listing */
router.post('/',UsersCtrl.addUser);







module.exports = router;
