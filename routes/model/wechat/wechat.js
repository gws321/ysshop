var express = require('express'),
    router  = express.Router(),
    GET     = {
        auth    : require('./auth'),
        index   : require('./index')
    };

router.get('/', GET.index);
router.get('/index', GET.index);
router.get('/auth', GET.auth);

module.exports = router;