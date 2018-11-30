<template>
	<div class="bookshow">
		<span @click="dianji" :title="bookdetails.title"><img :src="bookdetails.cover" /></span>
		<span class="title" @click="dianji" :title="bookdetails.title">{{bookdetails.title}}</span>
		<p class="autor" :title="bookdetails.autor">{{bookdetails.autor}}</p>
		<p class="price">￥<span class="price-num">{{bookdetails.price}}</span></p>
	</div>
</template>

<script>
	export default {
		name: "bookshow",
		routers: '',
		props: ["bookdetails"],
		created: function() {
			this.routers = `/details?bookid=${this.$props.bookdetails.id}`;
		},
		methods: {
			dianji: function() {
				const _this = this;
				var query = {};
				if(_this.$props.bookdetails.zhekou) {
					query = {
						bookid: _this.$props.bookdetails.id,
						listname: 'youth_literature'
					}
				} else {
					query = {
						bookid: _this.$props.bookdetails.id
					}
				}
				_this.$router.push({
					path: '/details',
					name: 'Details',
					query: query
				})
			}
		}
	}
</script>

<style scoped>
	* {
		font-family: "Hiragino Sans GB", SimSun;
	}
	
	.bookshow {
		width: 150px;
		height: 250px;
		margin-right: 47px;
		display: flex;
		flex-direction: column;
	}
	
	.bookshow img,
	.bookshow p,
	.bookshow a,
	.bookshow span {
		margin: auto;
	}
	
	.bookshow span:hover {
		cursor: pointer;
	}
	
	.bookshow p {
		width: 100px;
		text-align: left;
	}
	
	.title {
		width: 120px;
		height: 20px;
		color: black;
		text-align: left;
		text-decoration: none;
		overflow: hidden;
		line-height: 20px;
	}
	
	.autor {
		width: 120px !important;
		height: 20px;
		color: #aaa;
		overflow: hidden;
		line-height: 20px;
	}
	
	.price,
	.price-num {
		font-family: "Arial";
		font-weight: bold;
		color: #c30;
	}
	
	.title:hover {
		color: orangered;
		text-decoration: underline;
	}
</style>