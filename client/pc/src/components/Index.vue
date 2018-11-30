<template>
	<div>
		<tops></tops>
		<sections></sections>
		<footers></footers>
	</div>
</template>

<script>
	import Top from "./Top";
	import Section from "./Section";
	import Footer from "./Footer";
	export default {
		name: 'Index',
		components: {
			tops: Top,
			sections: Section,
			footers: Footer
		}
	}
</script>

<style>
</style>