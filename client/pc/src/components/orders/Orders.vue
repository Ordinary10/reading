<template>
	<div class="orders">
		<tops></tops>
		<img src="../../../static/shoppingtop.jpg" class="top-img" />
		<div class="shopping-center">
			<div class="shopping-header">
				<span class="shopping-text" style="margin-left: 260px;">订单</span>
				<ul class="shopping-header-ul">
					<li class="li-left">我的订单</li>
					<li class="li-center">填写订单</li>
					<li class="li-right">完成订单</li>
				</ul>
			</div>
			<div class="center-hr"></div>
			<div class="tabel-header">
				<ul class="tabel-top">
					<li>订单ID</li>
					<li>商品</li>
					<li>总价￥</li>
					<li>联系方式</li>
					<li>邮寄地址</li>
					<li>货物状态</li>
				</ul>
			</div>
			<div v-if='this.$token.getCookie("userid")==null' class="no-shoppingcart">
				<img src="../../../static/gouwuche1.png" />
				<h2>抱歉，你还没有<router-link to='/login' class='login-btn'>登录</router-link>,暂无订单</h2>
			</div>
			<div v-else-if="this.orders.length==0" class="no-shoppingcart">
				<img src="../../../static/gouwuche1.png" />
				<h2>你还未下一单，赶快去<router-link to='/shoppingcart' class='login-btn'>下单</router-link>吧</h2>
			</div>
			<div v-else>
				<ul class="tabel-items" v-for='(item,index) in orders'>
					<li>{{item.orderid}}</li>
					<li class="shopping-bookinfor">
						<img :src="item.cover"/>
						<h3>{{item.title}}*{{item.numbers}}</h3>
					</li>
					<li>{{prices[index]}}</li>
					<li>{{item.tel}}</li>
					<li>{{item.address}}</li>
					<li style="color: orangered;">已发货</li>
				</ul>
			</div>
			
		</div>
		<footers></footers>
	</div>
</template>

<script>
	import Top from '../Top'
	import Footer from '../Footer'
	export default {
		name:'Orders',
		components:{
			tops:Top,
			footers:Footer
		},
		data(){
			return {
				orders:[],
				prices:[],
				multiSelect:false
			}
		},
		beforeMount(){
			const _this = this;
			let userid = _this.$token.getCookie('userid');
			if(userid!=null){
				_this.$axios.post(_this.$ip+'/orders',{userid:userid}).then(response => {
					_this.orders = response.data.orders;
					var arr = _this.orders;
					var len = arr.length;
					for(var i=0;i<len;i++){
						_this.prices[i] = arr[i].price*arr[i].numbers
					}
//					console.log(_this.orders);
				}).catch(response => {
						console.log("post发送Ajax请求失败");
					})
			}
		}
	}
</script>

<style scoped>
	/*清除默认样式*/
	
	ul,
	li {
		list-style: none;
	}
	
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
	}
	/*购物车顶部样式*/
	
	.shoppingcart {
		background-color: #F7F9F8;
	}
	
	.top-img {
		display: block;
		margin: 10px auto;
	}
	
	.shopping-center {
		width: 1200px;
		margin: 10px auto;
	}
	
	.shopping-header {
		width: 1200px;
		padding-top: 10px;
		height: 100px;
		margin: 0 auto;
	}
	
	.logo {
		vertical-align: bottom;
	}
	
	.shopping-text {
		display: inline-block;
		padding-left: 10px;
		font-size: 28px;
		font-weight: bold;
		color: #323232;
		vertical-align: bottom;
		margin-bottom: 10px;
	}
	
	.shopping-header-ul {
		display: inline-block;
		width: 640px;
		height: 36px;
		vertical-align: top;
		margin: 22px 0 0 100px;
	}
	
	.shopping-header-ul>li {
		display: inline-block;
		width: 210px;
		height: 36px;
		background-color: #DDDDDD;
		text-align: center;
		line-height: 36px;
		font-weight: 700;
	}
	
	.li-left {
		background-color: orangered !important;
		border-top-left-radius: 18px;
		border-bottom-left-radius: 18px;
		color: white;
	}
	
	.li-right {
		border-top-right-radius: 18px;
		border-bottom-right-radius: 18px;
	}
	
	.center-hr {
		width: 1000px;
		height: 2px;
		background-color: lightcoral;
		margin: 5px auto;
	}
	/*购物车展示*/
	
	.table-header {
		padding: 10px 0 10px 20px;
		height: 40px;
		line-height: 40px;
	}
	
	.table-header>i {
		color: red;
		vertical-align: middle;
	}
	
	#address {
		width: 240px;
		height: 26px;
		outline: none;
		text-indent: 1em;
		vertical-align: middle;
	}
	
	.tabel-top {
		width: 1000px;
		height: 36px;
		display: flex;
		flex-wrap: wrap;
		border-bottom: 2px solid #ccc;
		margin: 0 auto;
	}
	
	.tabel-top>li {
		height: 22px;
		width: 160px;
		line-height: 22px;
		margin: auto;
		text-align: center;
	}
	/*未登录状态的购物车*/
	
	.no-shoppingcart {
		width: 1000px;
		margin: 0 auto;
		padding-top: 10px;
	}
	
	.no-shoppingcart>img {
		display: block;
		padding-top: 30px;
		margin: 0 auto;
	}
	
	.no-shoppingcart>h2 {
		text-align: center;
		color: black;
		margin: 30px 0 30px 0;
	}
	
	.login-btn {
		color: #bbb;
	}
	
	.login-btn:hover {
		color: orangered;
		text-decoration: underline;
	}
	/*购物车商品详情*/
	
	#itemnum {
		width: 24px;
		height: 24px;
		outline: none;
		border: none;
		padding: 0;
		text-align: center;
		line-height: 24px;
	}
	
	.subbtn,
	.addbtn {
		width: 24px;
		height: 24px;
	}
	
	.tabel-items {
		width: 1000px;
		height: 200px;
		display: flex;
		flex-wrap: wrap;
		border-bottom: 1px solid #ddd;
		margin: 0 auto;
	}
	
	.tabel-items>li {
		width: 160px;
		margin: auto;
		text-align: center;
	}
	
	.shopping-bookinfor {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.shopping-bookinfor>img {
		width: 80px;
		height: 75px;
		margin: auto;
	}
	
	.shopping-bookinfor>h3,
	.shopping-bookinfor>p {
		margin: 10px auto;
	}
	
	.li-icon {
		display: inline-block;
		margin: auto;
		color: #DDDDDD;
	}
	
	.li-icon:hover {
		color: black;
		cursor: pointer;
	}
	/*底部按钮 */
	
	.table-footer {
		width: 1000px;
		height: 80px;
		padding: 20px 0;
		margin: auto;
		display: flex;
		justify-content: flex-end;
	}
	
	.table-footer input {
		width: 120px;
		height: 40px;
		border-radius: 20px;
		text-align: center;
		line-height: 40px;
		outline: none;
		margin-right: 20px;
		font-size: 22px;
		font-weight: bold;
		border: none !important;
	}
	
	#table-footer-continue,
	#delitems {
		background-color: #aaa;
		color: orangered;
	}
	
	#table-footer-continue:hover {
		background-color: orangered;
		color: white;
		cursor: pointer;
	}
	
	#table-footer-orders {
		background-color: orangered;
		color: white;
	}
	
	#table-footer-orders:hover {
		cursor: pointer;
		background-color: #aaa;
		color: orangered;
	}
	
	#delitems:hover {
		background-color: orangered;
		color: white;
		cursor: pointer;
	}
</style>