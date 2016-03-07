var express = require('express');
var router = express.Router();
var authCtrl = require('../controllers/auth');


/* POST to users listing */
router.post('/',authCtrl.emailLogin);


module.exports = router;