var ERROR = require('core').model.error;

var error = function(req, res, next){
    var err = ERROR(new Error(404));
    next(err);
};

module.exports = error;