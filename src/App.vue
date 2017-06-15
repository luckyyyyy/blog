<template>
	<div id="app">
		<blog-header></blog-header>
		<router-view></router-view>
		<blog-footer></blog-footer>
	</div>
</template>

<script>
	import blogHeader from '@/components/header';
	import blogFooter from '@/components/footer';

	export default {
		components: {
			blogHeader, blogFooter,
		},
	};
</script>

<style lang="scss">

</style>
