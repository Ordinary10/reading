<template>
	<div>
		<tops></tops>
		<div class="centers">
			<img class="login-pic" src="../../../static/images/my/login-pic.jpg" alt="">
			<div class="dengbox ">
				<div class="one">账号登录</div>
				<input class="biger" type="text" placeholder="手机号/用户名/邮箱" v-model="users.account"/><br />
				<input class="biger" type="password" placeholder="密码" v-model="users.pwd" />
				<div class="checkbox">
					<input type="checkbox" />
					<span>记住用户名</span>
					<a href="">忘记密码</a>
				</div>
				<button @click="login">登录</button><br />
				<router-link class="zhuce" to='/register'>免费注册</router-link>
			</div>
		</div>
		<footers></footers>
	</div>
</template>

<script>
	import Top from "../Top"
	import Footer from "../Footer"
	export default {
		name: 'Login',
		data() {
			return {
				users:{account:"",pwd:""}
			}
		},
		components:{
			tops:Top,
			footers:Footer
		},
		methods:{
			login:function(){
				const _this = this;
				if(_this.users.account!=""&&_this.users.account!=""){
					_this.users.pwd = _this.$md5(_this.users.pwd );
					_this.$axios.post(_this.$ip+"/login",_this.users).then(response => {
						let num = response.data.num;
						if(num==1){
							alert(`登陆成功，正在跳转至首页`);			
							document.cookie = 'userid='+response.data.userid;
							document.cookie = 'username='+_this.users.account;
							_this.$router.push({path:'/'});
						}else if(num==2){
							alert('密码错误');
						}else if(num==3){
							alert('账号不存在');
						}	 	
					}).catch(response => {
						console.log("post发送Ajax请求失败");
					})
				}else{
					alert("账号密码不能为空")
				}
			}
		}
	}
</script>

<style scoped>
	a:hover {
		color: #865EBF
	}
	.centers{
		width: 1200px;
		height: 600px;
		margin: auto;
	}
	.fanhui {
		text-decoration: none;
		font-size: 18px;
		margin-left: 85%;
		color: black
	}
	
	.login-pic {
		margin-left: 90px;
		margin-top: 20px;
	}
	
	a {
		font-size: 14px;
		text-decoration: none;
		color: #9D9D9D;
	}
	
	.dengbox {
		margin-left: 900px;
		margin-top: -400px;
	}
	
	.one {
		margin-left: 50px;
		font-size: 22px
	}
	
	.biger {
		width: 200px;
		height: 30px;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	
	.checkbox a {
		font-size: 14px;
		color: black;
		margin-left: 20px;
	}
	
	button {
		width: 200px;
		height: 40px;
		background-color: #FC5D73;
		border: none;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	
	.zhuce {
		font-size: 20px;
		color: black;
		margin-left: 100px;
	}
	
	.zhuce:hover {
		color: #805EBC;
	}
</style>