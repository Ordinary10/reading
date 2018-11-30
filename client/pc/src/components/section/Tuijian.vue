<template>
	<div class="tuijian">
		<div class="img">
			<img :src="bookinfor.cover" alt="" @click="dianji">
		</div>
		<div class="content">
			<p>
				<span @click="dianji">{{bookinfor.title}}</span>
			</p>
			<p class="dazhe">￥{{bookinfor.price}}</p>
			<p class="yunjia">￥200</p>
			<p class="pinglun">1621条评论</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Tuijian",
		data() {
			return {
				urls: ''
			}
		},
		props: ["bookinfor"],
		methods:{
			dianji(){
				const _this = this;
				this.$router.push({
					path:'/details',
					query:{
						bookid:_this.$props.bookinfor.id
					}
				})
			}
		}
	}
</script>

<style scoped>
	.tuijian {
		margin-top: 10px;
		margin-left: 10px;
	}
	
	.img>img {
		width: 120px;
		height: 110px;
		cursor: pointer;
	}
	
	.img,
	.content {
		display: inline-block;
	}
	
	.content {
		vertical-align: top;
	}
	
	p {
		padding: 5px 0;
		margin: 0;
	}
	
	.content span {
		display: inline-block;
		width: 100px;
		height: 20px;
		font-size: 16px;
		color: black;
		overflow: hidden;
		cursor: pointer;
	}
	
	.dazhe {
		color: red;
		font-weight: bold;
		font-size: 14px;
	}
	
	.yunjia {
		color: rgb(170, 170, 170);
		font-size: 14px;
		text-decoration: line-through;
	}
	
	.pinglun {
		font-size: 12px;
		color: rgb(72, 122, 111);
	}
</style>