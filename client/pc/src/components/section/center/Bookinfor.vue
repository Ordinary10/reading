<template>
	<div class="bookinfor">
		<header>
			<p class="bookinfor-title">{{categorys}}</p>
		</header>
		<div class="books">
			<bookshow v-for='item in bookinfors' :bookdetails="item"></bookshow>
		</div>
	</div>
</template>

<script>
	import Bookshow from './Bookshow'
	export default {
		name: 'Bookinfor',
		data() {
			return {
				categorys: '',
				bookinfors: []
			}
		},
		props: ['category'],
		components: {
			bookshow: Bookshow
		},
		created() {
			const _this = this;
			let category = _this.$props.category;
			switch(_this.$props.category) {
				case '1':
					_this.categorys = '新书上架'
					break;
				case '2':
					_this.categorys = '畅销'
					break;
				case '3':
					_this.categorys = '精选'
					break;
				case '4':
					_this.categorys = '超值'
					break;
				case '5':
					_this.categorys = '热门'
					break;
				case '6':
					_this.categorys = '社会'
					break;
				case '7':
					_this.categorys = '人气'
					break;
			};
			_this.$axios.post(_this.$ip+'/youth_literature', {
				category: category
			}).then(response => {
				_this.bookinfors = response.data.bookinfors;
			}).catch(response => {
				console.log("post发送Ajax请求失败");
			})
		}
	}
</script>

<style scoped>
	.bookinfor {
		margin-top: 12px;
		border-top: 1px solid #873C1C;
	}
	
	.bookinfor-title {
		display: inline-block;
		font-weight: bold;
		color: #873C1C;
		vertical-align: middle;
		border-bottom: 2px solid orangered;
		font-size: 22px;
		line-height: 22px;
		padding: 10px;
	}
	
	.books {
		width: 800px;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
	}
</style>