<template>
	<div class="rightaside">
		<div class="kuaidi">
			<p>书讯快递</p>
			<ul>
				<li>
					<a href="">文艺范儿书单</a>
				</li>
				<li>
					<a href="">鲁迅文学奖获奖作品揭晓</a>
				</li>
				<li>
					<a href="">诺贝尔文学奖作品</a>
				</li>
			</ul>
		</div>
		<div class="tui">
			<p>新书推荐</p>
			<tuijian :bookinfor="bookinfor"></tuijian>
			<ul @mouseover="bianse">
				<li :class="{hover:bookid==1}" data-id="1" class="round"></li>
				<li :class="{hover:bookid==2}" data-id="2" class="round"></li>
				<li :class="{hover:bookid==3}" data-id="3" class="round"></li>
				<li :class="{hover:bookid==4}" data-id="4" class="round"></li>
				<li :class="{hover:bookid==5}" data-id="5" class="round"></li>
			</ul>
		</div>
		<div class="zhuanti">
			<div class="tit">精彩专题</div>
			<img src="http://img61.ddimg.cn/topic_img/gys_0014951/DK_WJ_1019_240_120.jpg" alt="">
			<img src="http://img63.ddimg.cn/topic_img/gys_0016342/ruanci240.120.921.jpg" alt="">
			<img src="http://img57.ddimg.cn/9006180047834707.jpg" alt="">
			<img src="http://img53.ddimg.cn/9001320049565733.jpg" alt="">
		</div>
	</div>
</template>

<script>
	import Tuijian from "./Tuijian";
	export default {
		name: "Rightaside",
		components: {
			tuijian: Tuijian
		},
		data() {
			return {
				bookinfor: {},
				bookid: 1
			};
		},
		methods: {
			bianse: function(event) {
				var _this = this;
				var e = event || window.event;
				var el = e.target;
				var dataId = el.getAttribute("data-id");
				if(dataId != null) {
					_this.bookid = dataId;
					_this.$axios.post(_this.$ip+'/bookinfor', {
						bookid: _this.bookid
					}).then(response => {
						_this.bookinfor = response.data.bookinfor[0];
					}).catch(response => {
						console.log('请求发送失败')
					})
				}
			}
		},
		created() {
			const _this = this;
			_this.$axios.post(_this.$ip+'/bookinfor', {
				bookid: _this.bookid
			}).then(response => {
				_this.bookinfor = response.data.bookinfor[0];
			}).catch(response => {
				console.log('请求发送失败')
			})
		}
	};
</script>

<style scoped>
	.rightaside {
		width: 240px;
		/* background-color: #ccc; */
		margin: 20px auto 0px;
	}
	
	.kuaidi {
		width: 100%;
		height: 105px;
		border: 1px solid rgb(234, 234, 234);
	}
	
	.kuaidi p {
		font-weight: bold;
		font-size: 20px;
		color: rgb(134, 62, 24);
		margin: 10px 0 0 10px;
	}
	
	.kuaidi ul {
		margin-top: 5px;
		margin-left: 10px;
	}
	
	.kuaidi a {
		color: black;
		font-size: 12px;
		margin-left: 5px;
	}
	
	.kuaidi a:hover {
		text-decoration: underline;
	}
	
	.tui {
		width: 100%;
		height: 192px;
		border: 1px solid rgb(234, 234, 234);
		margin-top: 15px;
		position: relative;
	}
	
	.tui>p {
		font-weight: bold;
		font-size: 20px;
		color: rgb(134, 62, 24);
		margin: 10px 0 0 10px;
	}
	
	.tui>ul {
		width: 240px;
		text-align: center;
		position: absolute;
		bottom: -18px;
		left: -46px;
	}
	
	.round {
		display: inline-block;
		width: 12px;
		height: 12px;
		background-color: rgb(219, 219, 219);
		border-radius: 50%;
		margin-left: 5px;
	}
	
	.hover {
		background-color: rgb(131, 64, 22);
	}
	
	.zhuanti {
		width: 100%;
		height: 580px;
		border: 1px solid rgb(234, 234, 234);
		margin-top: 30px;
	}
	
	.tit {
		font-weight: bold;
		font-size: 20px;
		color: rgb(134, 62, 24);
		margin: 10px 0 0 10px;
	}
	
	.zhuanti img {
		width: 220px;
		height: 120px;
		margin-top: 10px;
		margin-left: 10px;
	}
</style>