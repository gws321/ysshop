var model = require('core').model;

var error = function(err, req, res, next){

    if(!err.error)
        err = model.error(err);

    res.status(err.error.code || 500);
    req.error = err;
    res.return();
};

module.exports = error;