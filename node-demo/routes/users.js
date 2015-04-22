var express = require('express');
var user  = require('../models/user');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login',function(req,res,next){
    //res.render("user/login",{title:'Login'});
    var model = new user({username:'admin',password:'111111',remark:'asda'});
    model.save(function (err) {
        console.log(err);
    });
});




module.exports = router;
