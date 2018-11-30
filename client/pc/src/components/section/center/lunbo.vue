<template>
	<div class="lunbo" @mouseover="change2" @mouseout="change3">
		<img :src="img" />
		<ul class="nav-ul" @mouseover="change1">
			<li :class="{bgc:imgId==1}" imgId="1">1</li>
			<li :class="{bgc:imgId==2}" imgId="2">2</li>
			<li :class="{bgc:imgId==3}" imgId="3">3</li>
			<li :class="{bgc:imgId==4}" imgId="4">4</li>
			<li :class="{bgc:imgId==5}" imgId="5">5</li>
			<li :class="{bgc:imgId==6}" imgId="6">6</li>
			<li :class="{bgc:imgId==7}" imgId="7">7</li>
			<li :class="{bgc:imgId==8}" imgId="8">8</li>
			<li :class="{bgc:imgId==9}" imgId="9">9</li>
			<li :class="{bgc:imgId==10}" imgId="10">10</li>
			<li :class="{bgc:imgId==11}" imgId="11">11</li>
			<li :class="{bgc:imgId==12}" imgId="12">12</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "lunbo",
		data() {
			return {
				imgId: 1,
				img: "../../static/lunbo/lunbo1.jpg",
				timer: {}
			}
		},
		methods: {
			timers: function() {
				const _this = this;
				let timer = setInterval(function() {
					if(_this.imgId == 12) {
						_this.imgId = 1;
					} else {
						_this.imgId = _this.imgId + 1;
					}
				}, 2000);
				this.timer = timer;
			},
			change1: function(event) {
				const _this = this;
				let e = event || window.event;
				let el = e.target;
				let imgId = el.getAttribute("imgId");
				if(imgId != null) {
					_this.imgId = imgId - 0;
				}
			},
			change2: function() {
				clearInterval(this.timer);
			},
			change3: function() {
				this.timers();
			}
		},
		mounted: function() {
			this.timers();
		},
		watch: {
			imgId: function() {
				this.img = `../../static/lunbo/lunbo${this.imgId}.jpg`;
			}
		}
	}
</script>

<style scoped>
	ul,
	li {
		list-style: none;
	}
	
	.lunbo {
		width: 750px;
		margin: auto;
		position: relative;
		padding-bottom: 15px;
		cursor: pointer;
	}
	
	.lunbo>img {
		width: 750px;
		height: 315px;
		margin: 0 auto;
	}
	
	.nav-ul {
		width: 372px;
		height: 21px;
		position: absolute;
		bottom: 30px;
		right: 10px;
		display: flex;
	}
	
	.nav-ul>li {
		width: 21px;
		height: 21px;
		border-radius: 50%;
		margin: auto;
		background-color: white;
		text-align: center;
		line-height: 21px;
	}
	
	.bgc {
		background-color: red !important;
		color: white;
	}
</style>