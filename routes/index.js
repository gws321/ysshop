var model = {
        "404"       : require('./model/404'),
        "500"       : require('./model/500'),
        "index"     : require('./model/index'),
        "wechat"    : require('./model/wechat/wechat')
    },
    routes = function(app){

        //路由
        app.use('/',        model.index);
        app.use('/wechat',  model.wechat);


        //错误处理
        app.use(model["404"]);

        if (app.get('env') === 'development')
            app.use(model["500"]);

        app.use(model["500"]);
    };

module.exports = routes;