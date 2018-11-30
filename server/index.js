//1,引入express
const express = require('express');
const app = express();
//设置模板路径
const path = require('path');
//设置视图地址
app.set('views', path.join(__dirname, '/views'));
//设置ejs引擎
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);
//静态文件设置
app.use(express.static('public'));
//post请求参数获取设置
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//设置cookie-session
const cookie = require("cookie-parser");
app.use(cookie());

const session = require("express-session");
app.use(session({
    secret: "12345",
    name: 'user',
    cookie: { maxAge: 24 * 60 * 60 * 1000 },     
}));
//允许跨域访问
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
//引入控制层对象
const controller = require("./controllers/controller");
//以下是路由
app.get('/', controller.index);
app.get('/index', controller.index);
//以下是pc端的数据请求响应
app.post("/bookinfors",  controller.bookcategory);
app.post("/bookinfor",controller.bookinfor);
app.post("/shoppingcarts",controller.shoppingcarts);
app.post("/orders",controller.orders);
app.post("/addorders",controller.addorders)
app.post("/release",controller.release);
app.post('/register',controller.register);
app.post('/login',controller.login);
app.post('/delitem',controller.delitem);
app.post('/delitems',controller.delitems);
app.post('/writeshopping',controller.writeshopping);
app.post('/youth_literature',controller.youth_literature);
app.post('/search_infor',controller.search_infor);
//以下是wx小程序的数据请求
app.get('/wxbookinfor',controller.wxbookinfor);
app.get('/wxbookidinfor',controller.wxbookidinfor);
//设置监听端口
app.listen(9999, function () {
    console.log("请通过http://localhost:9999/ 访问");
});
