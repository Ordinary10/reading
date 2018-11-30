<template>
	<div>
		<tops></tops>
		<div class="rigister">
			<h2>新用户注册</h2>
			<p class="rigister-text">{{errorinfor}}</p>
			<ul>
				<li class="rigister-li">
					<span class="rigister-span">账号：</span><input class="rigister-inp" type="text" placeholder="请输入6~16位的数字字母组合的账号" v-model="users.username" />
				</li>
				<li class="rigister-li">
					<span class="rigister-span">密码：</span><input class="rigister-inp" type="password" placeholder="请输入6~16位的数字字母组合的密码" v-model="users.pwd" />
				</li>
				<li class="rigister-li">
					<span class="rigister-span">确认密码：</span><input class="rigister-inp" type="password" placeholder="请确认密码" v-model="users.pwds" />
				</li>
				<li class="rigister-li">
					<span class="rigister-span">手机号：</span><input class="rigister-inp" type="number" placeholder="请输入合法的11位手机号" v-model="users.tel" />
				</li>
				<li class="rigister-li">
					<span class="rigister-span">邮箱：</span><input class="rigister-inp" type="text" placeholder="请输入正确合法的邮箱号" v-model="users.email" />
				</li>
			</ul>
			<button class="register" @click="register">注册</button>
		</div>
		<footers></footers>
	</div>
</template>

<script>
	import Top from "../Top"
	import Footer from "../Footer"
	export default {
		name: "Register",
		data() {
			return {
				errorinfor: "",
				userid: "",
				users: {
					username: "",
					pwd: "",
					pwds: "",
					tel: "",
					email: ""
				}
			}
		},
		components: {
			tops: Top,
			footers: Footer
		},
		methods: {
			register: function() {
				const _this = this;
				/*使用正则判断账号、密码、手机、邮箱的合法性*/
				let telpre = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
				let pwdpre = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
				let emailpre = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
				if(_this.users.username) {
					if(pwdpre.test(_this.users.pwd)) {
						if(telpre.test(_this.users.tel)) {
							if(emailpre.test(_this.users.email)) {

							} else {
								alert('请输入合法的邮箱');
								return;
							}
						} else {
							alert('请输入合法的手机号')
							return;
						}
					} else {
						alert('请输入正确的密码格式');
						return;
					}
				} else {
					alert('请输入正确的账号');
					return;
				}
				if(_this.users.pwd == _this.users.pwds) {
					/*使用md5加密密码并向服务器发送请求*/
					_this.users.pwd = _this.$md5(_this.users.pwd);
					_this.users.pwds = _this.$md5(_this.users.pwds);
					_this.$axios.post(_this.$ip+"/register", _this.users).then(response => {
						_this.userid = response.data.userid;
						let num = response.data.num;
						if(num == 0) {
							_this.errorinfor = `账号已存在，账号ID是${_this.userid},请核实账号`
						} else {
							alert(`账号申请成功，用户ID是${_this.userid},正在跳转`);
							_this.$router.push({
								path: '/login'
							});
						}
					}).catch(response => {
						console.log("post发送Ajax请求失败");
					})
				} else {
					_this.errorinfor = "两次密码不一致"
				}

			}
		}
	}
</script>

<style scoped>
	ul,
	li {
		list-style: none;
	}
	
	.rigister-text {
		height: 20px;
		color: red;
		text-align: center;
		line-height: 20px;
		font-size: 16px;
		margin: 0 !important;
	}
	
	.rigister {
		width: 600px;
		margin: 10px auto;
		display: flex;
		flex-direction: column;
	}
	
	.rigister>h2 {
		margin: 0 !important;
	}
	
	.rigister>ul {
		padding: 0 !important;
		display: flex;
		height: 300px;
		width: 100%;
		flex-direction: column;
	}
	
	.rigister-li {
		height: 60px;
		padding-left: 3px;
		vertical-align: middle;
		line-height: 60px;
		text-align: center;
	}
	
	.rigister-span {
		display: inline-block;
		width: 100px;
		text-align: right;
	}
	
	.rigister-inp {
		outline: none;
		height: 30px;
		width: 280px;
	}
	
	.register {
		width: 180px;
		height: 40px;
		border-radius: 5px;
		background-color: red;
		color: white;
		outline: none;
		border: none;
		font-size: 26px;
		font-weight: bold;
		margin: 0 auto;
		cursor: pointer;
	}
</style>