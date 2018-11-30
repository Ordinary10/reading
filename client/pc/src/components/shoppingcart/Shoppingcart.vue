<template>
	<div class="shoppingcart">
		<tops></tops>
		<img src="../../../static/shoppingtop.jpg" class="top-img" />
		<div class="shopping-center">
			<div class="shopping-header">
				<span class="shopping-text" style="margin-left: 260px;">购物车</span>
				<ul class="shopping-header-ul">
					<li class="li-left">我的购物车</li>
					<li class="li-center">填写订单</li>
					<li class="li-right">完成订单</li>
				</ul>
			</div>
			<div class="center-hr"></div>
			<div class="tabel-header">
				<div class="table-header">
					<i class="el-icon-location-outline"></i>
					<input type="text" name="address" id="address" value="" placeholder="请输入有效的地址" v-model="address" />
				</div>
				<ul class="tabel-top">
					<li><input type="checkbox" name="multi-select" id="multi-select" value="" v-model="multiSelect" /> <label for="multi-select">全选</label> </li>
					<li>信息</li>
					<li>单价￥</li>
					<li>数量</li>
					<li>总价￥</li>
					<li>操作</li>
				</ul>
			</div>
			<div v-if='this.$token.getCookie("userid")==null' class="no-shoppingcart">
				<img src="../../../static/gouwuche1.png" />
				<h2>抱歉，你还没有<router-link to='/login' class='login-btn'>登录</router-link>,暂无购物车信息</h2>
			</div>
			<div v-else-if="this.shoppingcarts.length==0" class="no-shoppingcart">
				<img src="../../../static/gouwuche1.png" />
				<h2>购物车空空如也，赶快去<router-link to='/' class='login-btn'>购物</router-link>吧</h2>
			</div>
			<div v-else>
				<ul class="tabel-items" v-for='(item,index) in shoppingcarts'>
					<li><input type="checkbox" :id='item.checkid' value="" v-model="item.type" /> <label :for="item.checkid">购买</label> </li>
					<li class="shopping-bookinfor">
						<img :src="item.cover" />
						<h3>{{item.title}}</h3>
						<p>{{item.autor}}</p>
					</li>
					<li>{{shoppingcarts[index].price}}</li>
					<li>
						<button class="subbtn" @click="subitem(item,index)">-</button>
						<input type="text" name="itemnum" id="itemnum" value="" v-model="shoppingcarts[index].numbers" @keypress="numchange(index)" />
						<button class="addbtn" @click="additem(item,index)">+</button>
					</li>
					<li>{{prices[index]}}</li>
					<li><i class="el-icon-close li-icon" @click="delitem(item,index)"></i></li>
				</ul>
			</div>
			<div class="table-footer">
				<input type="button" name="delitems" id="delitems" value="删除商品" @click="delitems" />
				<router-link to='/'> <input type="button" name="continue" id="table-footer-continue" value="继续购物" /> </router-link>
				<input type="button" name="orders" id="table-footer-orders" value="提交订单" @click="submitorder" />
			</div>
		</div>
		<footers></footers>
	</div>
</template>

<script>
	import Top from '../Top'
	import Footer from '../Footer'
	export default {
		name: 'Shoppingcart',
		data() {
			return {
				address: "",
				multiSelect: false,
				prices: [],
				shoppingcarts: []
			}
		},
		components: {
			tops: Top,
			footers: Footer
		},

		methods: {
			subitem: function(item, index) {
				if(item.numbers <= 1) {
					return;
				} else {
					this.shoppingcarts[index].numbers = this.shoppingcarts[index].numbers - 1;
				}
			},
			additem: function(item, index) {
				this.shoppingcarts[index].numbers = (this.shoppingcarts[index].numbers - 0) + 1;
			},
			delitem: function(item, index) {
				const _this = this;
				this.shoppingcarts.splice(index, 1);
				this.prices.splice(index, 1);
				let itemid = item.id;
				this.$axios.post(_this.$ip+"/delitem", {
					itemid: itemid
				}).then(response => {
					alert("清除商品成功");
				}).catch(response => {
					console.log("post发送Ajax请求失败");
				})
			},
			delitems: function() {
				const _this = this;
				let userid = _this.$token.getCookie('userid');
				if(userid!=null){
					let len = _this.shoppingcarts.length;
				let itemidarr = [];
				for(let i = 0; i < len; i++) {
					if(_this.shoppingcarts[i].type) {
						let itemid = _this.shoppingcarts[i].id;
						_this.shoppingcarts.splice(i, 1);
						_this.prices.splice(i, 1);
						itemidarr.push(itemid);
						i--;
						len--;
					}
				}
				if(itemidarr.length > 0) {
					_this.$axios.post(_this.$ip+"/delitems", {
						itemids: itemidarr
					}).then(response => {
						alert("清除商品成功");
					}).catch(response => {
						console.log("post发送Ajax请求失败");
					})
				}else{
					alert('你还未选中商品')
				}
				}else{
					alert('你还未登录用户，请先登录');
					_this.$router.push({path:'/login'});
				}
				
			},
			submitorder: function() {
				const _this = this;
				let userid = _this.$token.getCookie("userid");
				if(userid!=null){
					let address = _this.address;
				if(address.length >= 10) {	
					let prices = 0;
					let itemsobj = {};
					let items = [];
					let len = _this.shoppingcarts.length;
					for(let i = 0; i < len; i++) {						
						if(_this.shoppingcarts[i].type) {													
							items.push({bookid:_this.shoppingcarts[i].bookid,numbers:_this.shoppingcarts[i].numbers});
							prices += (_this.prices[i]-0);
						}
					}
					if(items.length > 0) {
						itemsobj['userid'] = userid;
						itemsobj['address'] = address;
						itemsobj['prices'] = prices;
						itemsobj['items'] = items;
						_this.$axios.post(_this.$ip+"/addorders",{orderitems:itemsobj}).then(response => {
							if(response.data.end==1){
								alert(`下单成功，总计花费￥${itemsobj.prices},请转至订单页查看订单详情`);
								_this.$router.push({path:'/orders'});
							}	
						}).catch(response => {
							console.log("post发送Ajax请求失败");
						})
					} else {
						alert("你还未选中任何商品");
						return;
					}
				}else{
					alert("请填写详细的收货地址");
					return;
				}				
				} else {
					alert('你还未登录用户，请先登录');
					_this.$router.push({path:'/login'});
				}
			}
		},
		computed: {

			},

		watch: {
				shoppingcarts: {
					handler: function() {
						let len = this.shoppingcarts.length;
						for(let i = 0; i < len; i++) {
							this.prices[i] = this.shoppingcarts[i].price * this.shoppingcarts[i].numbers;
						}
					},
					deep: true
				},
				multiSelect: {
					handler: function() {
						const _this = this;
						let len = _this.shoppingcarts.length;
						if(_this.multiSelect) {
							for(let i = 0; i < len; i++) {
								_this.shoppingcarts[i].type = true;
							}
						} else {
							for(let j = 0; j < len; j++) {
								_this.shoppingcarts[j].type = false;
							}
						}
					}
				}
			},

		created: function() {
				const _this = this;
				let userid = _this.$token.getCookie("userid");
				if(userid != null) {
					_this.$axios.post(_this.$ip+"/shoppingcarts", {
						userid: userid
					}).then(response => {
						_this.shoppingcarts = response.data.shoppingcarts;
						let len = _this.shoppingcarts.length;
						for(let i = 0; i < len; i++) {
							_this.prices.push(_this.shoppingcarts[i].price * _this.shoppingcarts[i].numbers);
							_this.shoppingcarts[i]['checkid'] = `checked${i}`;
							_this.shoppingcarts[i]['type'] = false;
						}
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