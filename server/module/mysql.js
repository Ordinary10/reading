
function Mysql () {
    //加密函数
    this.crypto = function(data) {
        let crypto = require("crypto");
        let md5 = crypto.createHash("md5");
        let buffer = md5.update(data).digest("hex");
        return buffer;
    };
    //数据库链接函数
    this.init = function(ip,database){
        let mysql = require("mysql");//引入模块
        this.connection = mysql.createConnection({
            host:ip,
            user:"root",
            password:"123456",
            port:"3306",
            database
        });//构建mysql对象
        this.connection.connect();//链接数据库
    };
    //数据库链接断开函数
    this.end =function (){
        this.connection.end();
    };
    //根据书名查询书籍
    this.selectbook =function (title,callback){
        let sql = "select id from bookinfor where title = '"+title+"'";
        this.connection.query(sql,function(err,result){
            if(err){
                console.log("error:",err.message)
                return;
            };
            callback(result);
        })
        
    };
    //数据库添加书籍
    this.inserbook = function(title,category,press,date,price,cover,introduce,autor,callback){
        let sql = "insert into bookinfor(title,category,press,date,price,cover,introduce,autor) values(?,?,?,?,?,?,?,?)";
        let arr = [title,category,press,date,price,cover,introduce,autor];
        this.connection.query(sql,arr,function(err,result){
            if(err){
                console.log("error:",err.message);
                callback("数据库访问失败");
                return;
            };
            callback("新书发布成功");
        })

    };
    //分类别查询书籍
    this.bookinfors = function(bookcategory,callback){
        let sql = `select * from bookinfor where category = ${bookcategory} limit 0,8`;
        this.connection.query(sql,function(err,result){
            if(err){
                console.log("error:",err.message);
                callback("数据库访问失败");
                return;
            };
            callback(result);
        })
    };
    //根据bookid查询书籍详情
    this.bookinfor = function(bookids,callback,listname){
        let sql = '';
        if(listname){
            sql = `select * from ${listname} where id = ${bookids}`;
        }else{
            sql = `select * from bookinfor where id = ${bookids}`;
        }         
        this.connection.query(sql,function(err,result){
            if(err){
                console.log("error:",err.message);
                callback("数据库访问失败");
                return;
            };
            callback(result);
        })
    };
    //根据cookie存储的userid对照session存储的userid后通过userid查询返回用户的购物车信息
    this.selectShoppingCart = function(userid,callback){
        let sql = `select shoppingcart.id,shoppingcart.userid,shoppingcart.bookid,shoppingcart.numbers,bookinfor.title,bookinfor.price,bookinfor.autor,bookinfor.cover from shoppingcart inner join bookinfor on shoppingcart.bookid=bookinfor.id where shoppingcart.userid=${userid}`
        // var sql = "select shopping.items,shopping.price,shopping.numbers,items.imgs from shopping inner join items on shopping.items=items.name where shopping.userid='"+userid+"'";
        this.connection.query(sql,function(err,result){
            if(err){
                console.log("error:",err.message);
                callback("数据库访问失败");
                return;
            };
            let data = JSON.stringify(result);
            let test = JSON.parse(data);
            callback(test);
        })
    };
    //根据cookie存储的userid对照session存储的userid后通过userid查询返回用户的订单信息
    this.selectOrder = function(userid,callback){
        const _this = this;
        let sql = `select bookinfor.cover,ordersinfor.orderid,orderinfor.prices,orderinfor.address,orderinfor.tel,ordersinfor.numbers,bookinfor.title,bookinfor.price from (orderinfor left join ordersinfor on orderinfor.id=ordersinfor.orderid) left join bookinfor on ordersinfor.bookid=bookinfor.id  where orderinfor.userid = ${userid}`
        _this.connection.query(sql,function(err,result){
            if(err){
                console.log("error:",err.message);
                callback("数据库访问失败");
                return;
            };
            callback(result)
        })
    };
    //注册账号
    this.register = function(username,password,tel,email,callback){
        const _this = this;
        let sql1 = `select id from users where username = "${username}" or tel = "${tel}" or email = "${email}"`;
        let sql2 = `insert into users(username,password,addtimes,tel,email) values(?,?,?,?,?)`;
        let date = new Date();
        let dates =date.toLocaleDateString();
        let tels = tel-0;
        let sqlarr = [username,password,dates,tels,email]
        _this.connection.query(sql1,function(err,result){
            if(err){
                console.log("error:",err.message);
                callback("数据库访问失败");
                return;
            };
            let len = result.length;
            if(len==0){
                _this.connection.query(sql2,sqlarr,function(err,test){
                    if(err){
                        console.log("error:",err.message);
                        callback("数据库访问失败");
                        return;
                    };
                    
                    callback(1,test.insertId);
                })
            }else{
                callback(0,result[0].id);
            }    
        })
    };
    //登录验证
    this.login = function(account,callback){
        const _this = this;
        let sql = `select id,password from users where username='${account}' or tel='${account}' or email='${account}'`
        _this.connection.query(sql,function(err,result){
            if(err){
                console.log("error:",err.message);
                callback("数据库访问失败");
                return;
            };
            callback(result);
        })
    };
    //删除购物车商品
    this.delitem = function(itemid,callback){
        const _this = this;
        let sql = `delete from shoppingcart where id = ${itemid}`;
        _this.connection.query(sql,function(err,data){
            if(err){
                console.log("error:",err.message);
                callback("数据库访问失败");
                return;
            };
            callback(1);
        })
    };
    //多选删除购物车商品
    this.delitems = function(itemids,callback){
        const _this = this;
        let sql = `delete from shoppingcart where id in(${itemids.join()})`;
        _this.connection.query(sql,function(err,data){
            if(err){
                console.log("error:",err.message);
                callback("数据库访问失败");
                return;
            };
            callback(1);
        })
    };
    //添加订单
    this.addorders =function(orderitems,callback){
        const _this = this;
        var orderitems = orderitems;
        var userid = orderitems.userid;
        var prices = orderitems.prices;
        var address = orderitems.address;
        var sql = `select tel from users where id = ${userid}`
        _this.connection.query(sql,function(err,data){
            if(err){
                console.log("error:",err.message);
                callback("数据库访问失败");
                return;
            };
            var tel = data[0].tel;
            var sql1 = `insert into orderinfor(userid,prices,address,tel) values(?,?,?,?) `;
            var orderarr = [userid,prices,address,tel];
            _this.connection.query(sql1,orderarr,function(err,test){
                if(err){
                    console.log("error:",err.message);
                    callback("数据库访问失败");
                    return;
                };
                var orderid = test.insertId;
                var items = orderitems.items;
                var len = items.length;
                var str1 ="";
                for(let i=0;i<len;i++){
                    if(i==0){
                        str1 = `(${orderid},${items[i].bookid},${items[i].numbers})`
                    }else{
                        str1 = `${str1},(${orderid},${items[i].bookid},${items[i].numbers})`
                    }    
                }
                var sql2 = `insert into ordersinfor(orderid,bookid,numbers) values${str1}`;
                _this.connection.query(sql2,function(err,test){
                    if(err){
                        console.log("error:",err.message);
                        callback("数据库访问失败");
                        return;
                    };
                    callback();
                })
            })
        })
    };
    //添加购物车
    this.writeshopping = function(userid,bookid,numbers,bookprice,callback){
        const _this = this;
        let sql = `insert into shoppingcart(userid,bookid,bookprice,numbers) values(?,?,?,?) `
        let shoppingcarts = [userid,bookid,bookprice,numbers]
        _this.connection.query(sql,shoppingcarts,function(err,data){
            if(err){
                console.log("error:",err.message);
                callback("数据库访问失败");
                return;
            }
            callback();
        })
    };
    //分类查询青春文学书库
    this.youth_literature = function(category,callback){
        let sql = `select * from youth_literature where category=${category} limit 0,8`;
        this.connection.query(sql,function(err,result){
            if(err){
                console.log("error:",err.message);
                callback("数据库访问失败");
                return;
            };
            callback(result);
        })
    };
    //搜索框关键字查询
    this.search_infors = function(search_infor,callback){
        let sql =  `select * from bookinfor where title like '%${search_infor}%' or autor like '%${search_infor}%' or press like '%${search_infor}%' limit 0,5`
        this.connection.query(sql,function(err,result){
            if(err){
                console.log("error:",err.message);
                callback("数据库访问失败");
                return;
            };
            callback(result);
        })
    };
    //wx端分类查询书籍
    this.wxbookinfor = function(fenlei,callback){
        var sql = `select * from small_progress where leibie=${fenlei} limit 0,20`
        this.connection.query(sql,function(err,result){
            if(err){
                console.log("error:",err.message);
                callback("数据库访问失败");
                return;
            };
            callback(result);
        })
    };
    //wx端根据bookid查询单本书籍
    this.wxbookidinfor = function(bookid,callback){
        var sql = `select * from small_progress where id=${bookid}`;
        this.connection.query(sql,function(err,result){
            if(err){
                console.log("error:",err.message);
                callback("数据库访问失败");
                return;
            };
            callback(result);
        })
    }
}

module.exports = Mysql ;