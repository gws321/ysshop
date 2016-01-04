var core        = require('core'),
    model       = core.model,
    utils       = core.utils,
    config      = core.config;

var GET = function(req, res, next){


    var wechatAuth  = new wechat(req.query),
        error       = model.error(new Error(1002001));

    wechatAuth = wechatAuth.init();

    if(wechatAuth)
        wechatAuth = req.query.echostr;
    else{
        req.error = wechatAuth = error;
        utils.log.error(wechatAuth);
    };

    res.send(wechatAuth);

};

var wechat = function(options){
    this.signature  = options.signature;
    this.timestamp  = options.timestamp;
    this.nonce      = options.nonce;
    this.echostr    = options.echostr;
    this.token      = config.wechat.Token;
};


wechat.prototype = {
    init : function(){

        var that = this,
            sgin = [that.token, that.timestamp, that.nonce];

        if(!that.nonce || !that.timestamp || !that.token || !that.echostr)
            return false;

        sgin = this.dictionary(sgin).join("");
        sgin = utils.sha1(sgin);

        return this.contrast(sgin);

    },
    dictionary : function(arr){
        arr = utils.dictionary(arr);
        return arr;
    },
    contrast : function(sgin){
        console.log(sgin)
        return sgin === this.signature;
    }
};

module.exports = GET;