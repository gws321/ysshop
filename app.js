var express         = require('express'),
    path            = require('path'),
    favicon         = require('serve-favicon'),
    logger          = require('morgan'),
    cookieParser    = require('cookie-parser'),
    bodyParser      = require('body-parser'),
    core            = require('core'),
    routes          = require('./routes'),
    app             = express(),
    flow            = core.flow,
    __dirname       = __dirname;

// 模板
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 中间件捆绑
app.use(flow.restype());
app.use(flow.link());
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flow.res(app));

routes(app);

module.exports = app;
