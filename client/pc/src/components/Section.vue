<template>
	<div class="section">
		<leftaside></leftaside>
		<center></center>
		<rightaside></rightaside>
	</div>
</template>

<script>
	import Center from "./section/Center";
	import Leftaside from "./section/Leftaside";
	import Rightaside from "./section/Rightaside";
	export default {
		name: "Section",
		components: {
			center: Center,
			leftaside: Leftaside,
			rightaside: Rightaside,
		}
	}
</script>

<style scoped>
	.section{
		display: flex;
		width: 1200px;
		margin: auto;
	}
</style>