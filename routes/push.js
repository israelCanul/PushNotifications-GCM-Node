var express = require('express');
var router = express.Router();

var GCMPush = require('gcm-push');
var gcm = new GCMPush('AIzaSyBw0dGqTqt45R9edV5zT4o-wGYbc5Rca9U'); 


/* GET users listing. */
router.get('/', function(req, res, next) {
	gcm.notifyDevice('APA91bE1tx1W0EO38J64jrhQady1SWTpW68KgMKFstVZo_UInOWNBCvSJ2s04JooT7TCCgIocHlcT-1xDPSWkj35giQGlweZkpr1iyLVag577buhmsRyr3cfvhltkonNKd_5JR4R2DZb', 'notification title', 'my message');
  	res.send('respond with a resourceq');
});

module.exports = router;