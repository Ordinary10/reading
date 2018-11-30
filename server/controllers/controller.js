//引入数据库操作模块，获取实例对象mysql
const Mysql = require("../module/mysql");
const mysql = new Mysql();
mysql.init("localhost", "reading");
//定义控制层对象
const Controller = {
    //登录首页
    index: (req, res) => {
        res.render("index", {})
    },
    //发布书籍
    release: (req, res) => {
        let title = req.body.booktitle;
        let category = req.body.bookcategory;
        let press = req.body.bookpress;
        let date = req.body.bookdate;
        let price = req.body.bookprice;
        let cover = req.body.bookcover;
        let introduce = req.body.bookintroduce;
        let autor = req.body.bookautor;
        mysql.selectbook(title, function (result) {//书籍信息查询
            var len = result.length;
            if (len == 0) {
                mysql.inserbook(title, category, press, date, price, cover, introduce, autor, function (result) {
                    res.end(result);
                })
            } else {
                res.end("该书已发布，如有问题请联系管理员核实");
            }
        })

    },
    //分类别获取书籍信息
    bookcategory: (req, res) => {
        let bookcategory = req.body.bookcategory;
        mysql.bookinfors(bookcategory, function (data) {
            res.send({ bookinfor: data });
        })

    },
    //根据书籍id查询书籍信息
    bookinfor: (req, res) => {
        let bookids = req.body.bookid;
        let listname = req.body.listname;
        if(!listname){
            mysql.bookinfor(bookids, function (data) {
                res.send({ bookinfor: data });
            })
        }else{
            mysql.bookinfor(bookids, function (data) {
                res.send({ bookinfor: data });
            },listname)
        }
        
    },
    //根据用户id查询用户的购物车和订单信息
    shoppingcarts: (req, res) => {
        let userid = req.body.userid;
        mysql.selectShoppingCart(userid, function (data) {
            res.send({ shoppingcarts: data });
        })
    },
    orders: (req, res) => {
        let userid = req.body.userid;        
        mysql.selectOrder(userid, function (data) {
            res.send({ orders: data });
        })
    },
    //添加订单信息
    addorders: (req,res) => {
        var orderitems = req.body.orderitems;
        mysql.addorders(orderitems,function(data){
            res.send({end:1});
        })    
    },
    //用户注册
    register: (req, res) => {
        let username = req.body.username;
        let password = req.body.pwd;
        let tel = req.body.tel;
        let email = req.body.email;
        mysql.register(username, password, tel, email, function (num, data) {
            res.send({ num: num, userid: data });
        })
    },
    //用户登录
    login: (req, res) => {
        let account = req.body.account;
        let password = req.body.pwd;
        mysql.login(account, function (data) {
            let len = data.length;
            if (len == 0) {
                res.send({ num: 3 })
            } else if (data[0].password == password) {
                req.session.userid = data[0].id
                res.send({ num: 1, userid: data[0].id });
            } else {
                res.send({ num: 2 });
            }
        });

    },
    //删除购物车商品信息
    delitem: (req,res) => {
        let itemid = req.body.itemid;
        mysql.delitem(itemid, function (data) {
            res.send({end:1});
        });
    },
    //多选删除购物车商品
    delitems: (req,res) => {
        let itemids = req.body.itemids;
        mysql.delitems(itemids, function (data) {
            res.send({end:1});
        });
    },
    //添加购物车信息
    writeshopping: (req,res) => {
        var userid = req.body.userid;
        var bookid = req.body.bookid;
        var numbers = req.body.numbers;
        var bookprice = req.body.bookprice;
        mysql.writeshopping(userid,bookid,numbers,bookprice,function(){
            res.send({end:1})
        })
    },
    //查询youth_literature书籍信息
    youth_literature: (req,res) => {
        var category = req.body.category;
        mysql.youth_literature(category,function(data){
            res.send({bookinfors:data})
        })
    },
    //搜索框关键字搜索
    search_infor: (req,res) => {
       var search_infor = req.body.search_infor;
       mysql.search_infors(search_infor,function(data){
            res.send({search_infors:data})
       })
    },
    //wx端分类查询书籍
    wxbookinfor: (req,res) => {
        var fenlei = req.query.leibie;
        mysql.wxbookinfor(fenlei,function(data){
            res.send({bookinfors:data})
        })
    },
    //wx端根据bookid查询单本书籍
    wxbookidinfor: (req,res) => {
        var bookid = req.query.bookid;
        mysql.wxbookidinfor(bookid,function(data){
            res.send({bookinfor:data})
        })
    }
}

module.exports = Controller