<template>
	<div class="top">
		<!-- 顶部 -->
		<div class="top-all">
			<div class="top-t">
				<div class="clear"></div>
				<div class="t-l">送至：成都</div>
				<ul class="t-r">
					<li>
						<a href="">成为会员</a><span>|</span></li>
					<li>
						<a href="">我的云书房</a><span>|</span></li>
					<li>
						<a href="">我的书吧</a><span>|</span></li>
					<li>
						<a href="">小说投稿</a><span>|</span></li>
					<li>
						<a href="">我要出书</a><span>|</span></li>
					<li>
						<a href="">企业采购</a><span>|</span></li>
					<li>
						<a href="">客户服务</a>
					</li>
				</ul>
				<div class="t-m" v-if='this.$token.getCookie("userid")==null'>欢迎光临，请
					<router-link to="/login">登录</router-link>
				</div>
				<div class="t-m" v-else>
					欢迎光临:
					<span style="color: orangered; padding-left: 5px;font-weight: bold; ">{{this.$token.getCookie("username")}}</span>
					<span class="btn-cancellation" @click="cancellation">退出</span>
				</div>
				<div class="clear"></div>
			</div>
		</div>
		<!-- 图标 -->
		<div class="nav">
			<div class="img">
				<router-link to='/'><img src="../../static/logo.png" alt="" title="点击logo返回首页"></router-link>
			</div>
			<div class="search">
				<input type="text" style="padding-left: 5px;" v-model="search_infor" placeholder="爱读书，读好书，好读书">
				<ul class="search_ul" v-if='search_infors.length>0'>
					<li v-for='item in search_infors' class="search_li">
						<router-link :to='search_details(item)'>
							<span>{{item.title}}</span>
							<span>{{item.autor}}</span>
							<span>{{item.press}}</span>
						</router-link>
					</li>
				</ul>
				<el-button class="search-btn" icon="el-icon-search" @click='search_btn'></el-button>
			</div>
			<div class="shopping">
				<router-link to="/shoppingcart">
					<el-button class="shopping-btn" icon="el-icon-goods">购物车</el-button>
				</router-link>
				<router-link to="/orders">
					<input class="shopping-int" type="button" value="我的订单">
				</router-link>
			</div>
		</div>
		<!-- 导航栏 -->
		<div class="title">
			<div class="tit-l">全部商品分类</div>
			<ul class="tit-r">
				<li>
					<a href="">尾品汇</a>
				</li>
				<li>
					<a href="">图书</a>
				</li>
				<li>
					<a href="">电子书</a>
				</li>
				<li>
					<a href="">网络文学</a>
				</li>
				<li>
					<a href="">服装</a>
				</li>
				<li>
					<a href="">户外运动</a>
				</li>
				<li>
					<a href="">孕婴童</a>
				</li>
				<li>
					<a href="">家居</a>
				</li>
				<li>
					<a href="">创意文具</a>
				</li>
				<li>
					<a href="">食品</a>
				</li>
				<li>
					<a href="">Apple</a>
				</li>
				<li>
					<a href="">电器城</a>
				</li>
			</ul>
		</div>
		<!-- 分割线 -->
		<div class="bottom-line"></div>
	</div>
</template>

<script>
	export default {
		name: "Top",
		data() {
			return {
				search_infor: '',
				search_infors: []
			}
		},
		methods: {
			cancellation() {
				document.cookie = 'userid=-1';
				document.cookie = 'username=-1';
				this.$router.push({
					path: '/login'
				});
			},
			search_details(item) {
				return `/details?bookid=${item.id}`
			},
			search_btn() {
				const _this = this;
				if(_this.search_infors.length > 0) {
					_this.$router.push({
						path: '/details',
						query: {
							bookid: _this.search_infors[0].id
						}
					})
				}
			}
		},
		watch: {
			search_infor: {
				handler() {
					const _this = this;
					if(_this.search_infor) {
						_this.$axios.post(_this.$ip+'/search_infor', {
							search_infor: _this.search_infor
						}).then(response => {
							_this.search_infors = response.data.search_infors;
						}).catch(response => {
							console.log('请求发送失败');
						})
					} else {
						_this.search_infors = [];
					}
				}
			}
		}
	};
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	
	a {
		text-decoration: none;
	}
	
	ul,
	li {
		list-style-type: none;
	}
	
	.clear {
		clear: both;
	}
	
	.top-all {
		width: 100%;
		background-color: rgb(249, 249, 249);
		border-bottom: 1px solid #f2f2f2;
	}
	
	.top-t {
		width: 1195px;
		height: 35px;
		text-align: center;
		line-height: 35px;
		margin: auto;
		color: rgb(100, 100, 100);
		font-size: 12px;
	}
	
	.t-l {
		float: left;
	}
	
	.t-r {
		float: right;
	}
	
	.t-r li {
		float: left;
	}
	
	.t-r a {
		padding: 0 8px;
		color: rgb(100, 100, 100);
	}
	
	.t-r a:hover {
		color: orangered;
	}
	
	.t-m {
		float: right;
		padding: 0 10px;
	}
	
	.t-m a {
		color: orangered;
	}
	
	.nav {
		width: 1195px;
		margin: auto;
		height: 100px;
		position: relative;
		text-align: center;
		line-height: 100px;
	}
	
	.img {
		width: 300px;
		height: 100px;
		position: absolute;
		top: 0;
		left: 0;
		vertical-align: middle;
	}
	
	.search {
		position: absolute;
		top: 0;
		left: 400px;
	}
	
	.search input {
		width: 410px;
		height: 40px;
		border: 2px solid rgb(255, 40, 50);
		outline: none;
		vertical-align: middle;
	}
	
	.search-btn {
		background-color: rgb(255, 40, 50);
		height: 44px;
		width: 50px;
		border: 2px solid rgb(255, 40, 50);
		margin-left: -7px;
		border-radius: 0px;
	}
	
	.shopping {
		position: absolute;
		top: 0;
		left: 950px;
	}
	
	.shopping-btn {
		width: 100px;
		height: 40px;
		background-color: rgb(255, 40, 50);
		color: white;
		font-weight: bold;
		font-size: 16px;
		border: 2px solid rgb(255, 40, 50);
		border-radius: 0px;
		vertical-align: middle;
	}
	
	.shopping-btn:hover {
		background-color: rgb(246, 246, 246);
		color: rgb(100, 100, 100);
		border: 2px solid rgb(220, 220, 220);
	}
	
	.shopping-int {
		width: 100px;
		height: 40px;
		background-color: rgb(246, 246, 246);
		color: rgb(100, 100, 100);
		font-weight: bold;
		font-size: 16px;
		border: 2px solid rgb(220, 220, 220);
		margin-left: -5px;
		outline: none;
		vertical-align: middle;
	}
	
	.title {
		width: 1195px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		margin: 10px auto 0;
		font-size: 14px;
		display: flex;
		flex-wrap: wrap;
	}
	
	.tit-l {
		width: 190px;
		background-color: rgb(255, 40, 50);
		color: white;
		font-size: 16px;
		font-weight: bold;
	}
	
	.tit-r {
		width: 800px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-left: 30px;
	}
	
	.tit-r a {
		color: rgb(100, 100, 100);
		font-weight: bold;
	}
	
	.tit-r a:hover {
		color: rgb(255, 40, 50);
	}
	
	.bottom-line {
		border: 2px rgb(255, 40, 50) solid;
	}
	
	.btn-cancellation:hover {
		cursor: pointer;
		text-decoration: underline;
		background-color: orangered;
	}
	/*搜索框内容区*/
	
	.search_ul {
		position: absolute;
		top: 73px;
		left: 0;
		width: 466px;
		background-color: white;
		border: 1px solid #ddd;
		z-index: 999;
	}
	
	.search_ul>li {
		margin-top: 2px;
		line-height: 22px;
		text-align: left;
	}
	
	.search_ul>li:hover {
		background-color: #ddd;
	}
	
	.search_li span {
		padding-left: 3px;
		display: inline-block;
		width: 130px;
		height: 22px;
		overflow: hidden;
		font-size: 12px;
		line-height: 22px;
		color: #aaa;
	}
</style>