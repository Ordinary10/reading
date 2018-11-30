<template>
	<div class="booktype">
		<bookshow v-for="bookdetails in category" :bookdetails="bookdetails"></bookshow>
	</div>
</template>

<script>
	import Bookshow from "./Bookshow"
	
	export default {
		name: 'booktype',
		components: {
			bookshow: Bookshow
		},
		props:["category"]
	}
</script>

<style scoped>
	.booktype {
		width: 800px;
		display: flex;
		flex-wrap: wrap;
		margin: auto;
	}
</style>