<template>
	<div class="center">
		<lunbo></lunbo>
		<bookcover></bookcover>
		<bookinfor category='1'></bookinfor>
		<bookinfor category='2'></bookinfor>
		<bookinfor category='3'></bookinfor>
		<bookinfor category='4'></bookinfor>
		<bookinfor category='5'></bookinfor>
		<bookinfor category='6'></bookinfor>
		<bookinfor category='7'></bookinfor>
	</div>
</template>

<script>
	import Bookcover from "./center/Bookcover";
	import Lunbo from "./center/lunbo";
	import Bookinfor from "./center/Bookinfor"

	export default {
		name: 'center',
		components: {
			bookcover: Bookcover,
			lunbo: Lunbo,
			bookinfor:Bookinfor
		}
	}
</script>

<style scoped>
		.center{
			width: 750px;
			padding-top: 20px;
			margin: 0 auto;
		}
</style>