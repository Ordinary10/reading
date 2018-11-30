import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/users/Login'
import Register from '@/components/users/Register'
import Index from '@/components/Index'
import Shoppingcart from '@/components/shoppingcart/Shoppingcart'
import Orders from '@/components/orders/Orders'
import Details from '@/components/Details'

Vue.use(Router)
 
export default new Router({
  routes: [
	{
		path:"/",
		name:"Index",
		component:Index
	},
	{
		path:"/login",
		name:"Login",
		component:Login
	},
	{
		path:"/register",
		name:"Register",
		component:Register
	},
	{
		path:"/shoppingcart",
		name:"Shoppingcart",
		component:Shoppingcart
	},
	{
		path:"/orders",
		name:"Orders",
		component:Orders
	},
	{
		path:"/details",
		name:"Details",
		component:Details
	}
	
  ]
})
