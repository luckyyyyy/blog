<template>
	<header class="header">
		<nav class="header-nav" :class="{ 'header-nav--dark': dark }">
			<router-link tag="h1" class="header-nav-link" :to="{ name: 'index' }">
				<img class="header-nav__logo" src="../assets/logo.png">
				<span class="header-nav__text">BLOG</span>
			</router-link>
			<menu class="header-nav-menu">
				<router-link
					tag="li"
					class="header-nav-menu-item"
					:to="{ name: 'index' }"
					:class="{ 'header-nav-menu-item--active': $route.name == 'index' }"
				>
					首页
				</router-link>
				<router-link
					:class="{ 'header-nav-menu-item--active': $route.params.label == item.name }"
					:key="item.id"
					:to="{ name: 'label', params: { label: item.name } }"
					tag="li"
					class="header-nav-menu-item"
					v-for="item of labels"
				>
					{{ item.name }}
				</router-link>
			</menu>
		</nav>
		<div class="header-top">
			<div class="header-top__title">青阳魂的weblog</div>
			<div class="header-top__desc">
				<img src="../assets/logo.png" class="header-top__avatar">
				<p>未来不迎 当时不杂 过往不恋</p>
				<p>思绪来得快去得也快 偶尔会在这里停留</p>
			</div>
		</div>
	</header>
</template>
<!-- backdrop-filter -->
<script>
	import { getLabels } from '@/api/issues';

	export default {
		data() {
			return {
				labels: [],
				dark: false,
			};
		},
		async created() {
			try {
				const res = await getLabels();
				const data = await res.json();
				this.labels = data;
			} catch (e) {
				// console.log(e);
			}
		},
		mounted() {
			window.addEventListener('scroll', (e) => {
				const scrollTop = e.target.body.scrollTop;
				this.dark = scrollTop > 50;
			});
		},
	};
</script>

<style lang="scss">
	@import '../scss/header.scss';
</style>
