<template>
	<div class="bookcover">
		<div class="bookcover-top">
			<span class="bookcover-top-left">主</span>
			<div class="bookcover-top-right">
				<span>编推荐</span>
				<ul class="bookcover-ul" @mouseover="change1">
					<li category="1" :class="{bgc:isyes==1}">最流行</li>
					<li category="2" :class="{bgc:isyes==2}">热门</li>
					<li category="3" :class="{bgc:isyes==3}">社会/历史</li>
					<li category="4" :class="{bgc:isyes==4}">情感/心灵</li>
					<li category="5" :class="{bgc:isyes==5}">科幻/推理</li>
					<li category="6" :class="{bgc:isyes==6}">经典</li>
				</ul>
			</div>
		</div>
		<booktype :category="bookinfors"></booktype>
	</div>
</template>

<script>
	import Booktype from "./Booktype";
	export default {
		name: "bookcover",
		data() {
			return {
				bookinfors: [],
				category: {
					bookcategory: 1
				},
				isyes: 1
			}
		},
		components: {
			booktype: Booktype
		},
		methods: {
			change1: function(event) {
				let _this = this;
				let e = event || window.event;
				let el = e.target;
				let category = el.getAttribute("category");
				if(category != null) {
					this.isyes = category - 0;
					this.category.bookcategory = category - 0;
					this.$axios.post(_this.$ip+"/bookinfors", _this.category).then(response => {
						_this.bookinfors = response.data.bookinfor;
//						console.log(_this.bookinfors);
					}).catch(response => {
						console.log("post发送Ajax请求失败");
					})
				}
			}

		},
		beforeMount: function() {
			var _this = this;
			this.$axios.post(_this.$ip+"/bookinfors", _this.category).then(response => {
				_this.bookinfors = response.data.bookinfor;
			}).catch(response => {
				console.log("post发送Ajax请求失败");
			})
		}
	}
</script>

<style scoped>
	ul,
	li {
		list-style: none;
	}
	
	.bookcover {
		width: 750px;
		margin: auto;
	}
	
	.bookcover-top {
		width: 100%;
		height: 43px;
	}
	
	.bookcover-top-left {
		display: inline-block;
		width: 43px;
		height: 43px;
		border-radius: 50%;
		background-color: #873C1C;
		color: white;
		text-align: center;
		line-height: 43px;
		font-size: 27px;
	}
	
	.bookcover-top-right {
		display: inline-block;
		vertical-align: top;
		width: 698px;
		height: 34px;
		color: #873C1C;
		border-bottom: 1px solid #873C1C;
		margin: 9px 0 0 0;
		line-height: 34px;
		padding: 0;
	}
	
	.bookcover-top-right>span {
		font-weight: bold;
		float: left;
	}
	
	.bookcover-top-right>ul {
		display: inline-block;
		padding: 0;
		float: right;
		margin: 0;
	}
	
	.bookcover-ul>li {
		display: inline-block;
		padding: 0 10px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		vertical-align: bottom;
		cursor: pointer;
	}
	
	.bookcover-top-right:before {
		content: "";
		clear: both;
	}
	
	.bookcover-top-right:after {
		content: "";
		clear: both;
	}
	
	.booktype {
		padding-top: 10px;
	}
	
	.bgc {
		background-color: #873C1C;
		color: white;
	}
</style>