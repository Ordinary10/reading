<template>
	<div class="footer">
		<div class="line"></div>
		<!-- zheng -->
		<div class="round">
			<div class="all">
          <a href="#" class="a">
			     <div class="zheng">
				   <div class="zhengyuan">正</div>
				   <div class="zhengzi">
				   <span>正规渠道</span><br>
				   <span>正品保证</span>
				   </div>
			     </div>
		      </a>
		      <a href="#" class="a">
			     <div class="zheng">
				   <div class="zhengyuan">￥</div>
				   <div class="zhengzi">
				   <span>放心购物</span><br>
				   <span>货到付款</span>
				   </div>
			     </div>
		      </a>
		      <a href="#" class="a">
			     <div class="zheng">
				   <div class="zhengyuan">次</div>
				   <div class="zhengzi">
				   <span>625城市</span><br>
				   <span>次日到达</span>
				   </div>
			     </div>
		      </a>
		      <a href="#" class="a">
			     <div class="zheng">
				   <div class="zhengyuan">退</div>
				   <div class="zhengzi">
				   <span>上门退换</span><br>
				   <span>购物无忧</span>
				   </div>
			     </div>
		      </a>
		   </div>
		</div>
		<!-- gouwuzhinan -->
		<div class="line-lists">
		<div class="lists">
			<div class="list">
				<ul>
				 <h4>购物指南</h4>
				 <li><a href="">购物流程</a></li>
				 <li><a href="">发票制度</a></li>
				 <li><a href="">账户管理</a></li>
				 <li><a href="">会员优惠</a></li>
			 </ul>
			</div>
			<div class="list">
				<ul>
				 <h4>支付方式</h4>
				 <li><a href="">货到付款</a></li>
				 <li><a href="">网上支付</a></li>
				 <li><a href="">礼品卡支付</a></li>
				 <li><a href="">银行转账</a></li>
			 </ul>
			</div><div class="list">
				<ul>
				 <h4>订单服务</h4>
				 <li><a href="">配送服务查询</a></li>
				 <li><a href="">订单状态说明</a></li>
				 <li><a href="">自助取消订单</a></li>
				 <li><a href="">自助修改订单</a></li>
			 </ul>
			</div><div class="list">
				<ul>
				 <h4>配送方式</h4>
				 <li><a href="">当日递</a></li>
				 <li><a href="">次日达</a></li>
				 <li><a href="">订单自提</a></li>
				 <li><a href="">验货与签收</a></li>
			 </ul>
			</div><div class="list">
				<ul>
				 <h4>退换货</h4>
				 <li><a href="">退换货服务查询</a></li>
				 <li><a href="">自助申请退换货</a></li>
				 <li><a href="">退换货进度查询</a></li>
				 <li><a href="">退款方式和时间</a></li>
			 </ul>
			</div><div class="list">
				<ul>
				 <h4>商家服务</h4>
				 <li><a href="">商家中心</a></li>
				 <li><a href="">运营服务</a></li>
				 <li><a href="">加入尾品汇</a></li>
				 <li><a href=""></a></li>
			 </ul>
			</div>
		</div>
		</div>
     <!-- gongsijianjie -->
		 <div class="company">
         <a href="">公司简介</a><span> | </span>
				 <a href="">诚聘英才</a><span> | </span>
				 <a href="">网站联盟</a><span> | </span>
				 <a href="">当当招商</a><span> | </span>
				 <a href="">机构销售</a><span> | </span>
				 <a href="">手机当当</a><span> | </span>
				 <a href="">官方Blog</a><span> | </span>
				 <a href="">热词搜索</a>
		 </div>
		 <!-- guanhao -->
		 <div class="daihao">
			 <ul>
				 <img src="" alt="">
				 <li>Copyright (C) 当当网 2004-2017, All Rights Reserved</li>
				 <li><img src="http://img60.ddimg.cn/upload_img/00459/index/validate.gif" alt=""></li>
				 <li><a href="">京ICP证041189号</a></li>
				 <li>出版物经营许可证</li>
				 <li>新出发京批字第直0673号</li>
			 </ul>
		 </div>
	</div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
a {
  text-decoration: none;
}

ul,
li {
  list-style: none;
}

.footer {
  width: 100%;
  height: 420px;
  /* background-color: #ddd; */
  text-align: center;
  margin-top: 20px;
}
.line {
  border: 1px rgb(255, 40, 50) solid;
}

.round {
  background-color: rgb(250, 250, 250);
  height: 80px;
	width: 100%;
}

.all {
  width: 940px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.a {
  display: block;
  padding: 15px 0 15px 10px;
}

.zheng {
  width: 150px;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
}

.zhengyuan {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 36px;
  font-weight: bold;
  background-color: rgb(255, 40, 50);
  color: white;
}

.zhengzi {
  height: 50px;
  color: rgb(255, 40, 50);
  margin-left: 30px;
  line-height: 25px;
}

.line-lists {
  border-bottom: 1px solid rgb(235, 235, 235);
  border-top: 1px solid rgb(235, 235, 235);
}

.lists {
  display: flex;
  flex-wrap: wrap;
  width: 940px;
  margin: auto;
  justify-content: space-around;
  color: rgb(125, 125, 125);
  padding: 30px 0 10px 0;
}

.list li > a {
  color: rgb(125, 125, 125);
  font-size: 12px;
	font-weight: inherit;
}

.company {
	font-size: 12px;
	color: rgb(125, 125, 125);
	height: 60px;
	line-height: 60px;
	text-align: center;
	margin-left: 20px;
}

.company a {
	color: rgb(125, 125, 125);
	padding: 0px 20px;
}

.daihao li {
	width: 940px;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	display: inline;
	font-size: 12px;
	color: rgb(125, 125, 125);
}

.daihao a {
	color:rgb(125, 125, 125); 
}

.lists a:hover {
	color: orangered;
	text-decoration: underline;
}

.company a:hover {
	color: orangered;
	text-decoration: underline;
}

.daihao a:hover {
	color: orangered;
	text-decoration: underline;
}
</style>