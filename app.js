var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var config = require('config-lite');
var session = require('express-session');

global.dbHelper = require('./dao/dbHelper');
global.db = mongoose.connect("mongodb://127.0.0.1:27017/ibz");

app.use(session({
    secret: 'secret',
    cookie: {
        maxAge: 1000 * 60 * 30
    }
}));

// 设置模板目录
app.set('views', path.join(__dirname, 'public/views'));
// 设置模板引擎为 ejs
app.set('view engine', 'ejs');
// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

// flash 中间件，用来显示通知
app.use(flash());
// 添加模板必需的三个变量
app.use(function (req, res, next) {
    res.locals.user = req.session.user;
    res.locals.success = req.flash('success').toString();
    res.locals.error = req.flash('error').toString();
    next();
});
require('./routes')(app);
app.get('/', function(req, res) {
    res.render('portal/index',{
        title: '爱包装-首页'
    });
});

app.listen(5001, function(){
  console.log('The server is starting on port 5001.')
});
