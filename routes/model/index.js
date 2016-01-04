var express     = require('express'),
    router      = express.Router(),
    core        = require('core'),
    auth        = core.API.auth;


var GET = function(req, res, next){
    var data = {"title": "YS_SHOP", error: null};
    if(req.error){
        data.error = req.error.message;
        req.error = null;
    };


    var x = {
        to : "13311228706@163.com",
        toName: "gws321",
        uid     : 0
    };

    //auth.email(x, function(err){
    //    if(err)
    //        req.error = err;
    //
    //auth.phone({smsMob: 13311228706, keys: 3412, name: 'gws321'}, function(err){
    //    if(err)
    //        req.error = err;
    //});

    res.return('index', data);



};

router.get('/', GET);
router.get('/index', GET);

module.exports = router;