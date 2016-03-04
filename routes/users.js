var express = require('express');
var router = express.Router();
var GCMPush = require('gcm-push');
var gcm = new GCMPush('AIzaSyBw0dGqTqt45R9edV5zT4o-wGYbc5Rca9U'); 
var UsersCtrl = require('../controllers/users');



/* GET users listing. */
router.get('/',UsersCtrl.findAllUsers);
/* GET by id */
router.get('/:id',UsersCtrl.findById);
/* PUT by id */
router.put('/:id',UsersCtrl.updateUser);
/* POST users listing */
router.post('/',UsersCtrl.addUser);


router.post('/[0-9]+', function(req, res, next) {
	//se deshabilitan las notificaciones 
	//gcm.notifyDevice('APA91bE1tx1W0EO38J64jrhQady1SWTpW68KgMKFstVZo_UInOWNBCvSJ2s04JooT7TCCgIocHlcT-1xDPSWkj35giQGlweZkpr1iyLVag577buhmsRyr3cfvhltkonNKd_5JR4R2DZb', 'notification title', 'my message');
  	res.send('respond with a resource3www');
  	console.log('entro a post');
});


module.exports = router;
