<template>
	<header class="header">
		<nav class="header-nav">
			<div class="header-site">
				<h1 class="header-site__title">
					<router-link class="header-site__link" :to="{ name: 'index' }">
						<!-- <img class="header-site__logo" src="../assets/logo.png"> -->
						BLOG
					</router-link>
				</h1>
			</div>
			<menu class="header-menu">
				<router-link
					tag="li"
					class="header-menu-item"
					:to="{ name: 'index' }"
					:class="{ 'header-menu-item--active': $route.name == 'index' }"
				>
					首页
				</router-link>
				<router-link
					:class="{ 'header-menu-item--active': $route.params.label == item.name }"
					:key="item.id"
					:to="{ name: 'label', params: { label: item.name } }"
					tag="li"
					class="header-menu-item"
					v-for="item of labels"
				>
					{{ item.name }}
				</router-link>
			</menu>
		</nav>
		<div class="header-top">
			<div class="header-top__title">青阳魂的 BLOG</div>
			<div class="header-top__desc">
				<img src="../assets/logo.png" class="header-top__avatar">
				<p>未来不迎 当时不杂 过往不恋</p>
				<p>思绪来得快去得也快 偶尔会在这里停留</p>
			</div>
		</div>
	</header>
</template>

<script>
	import { getLabels } from '@/api/issues';

	export default {
		data() {
			return {
				labels: [],
			};
		},
		created() {
			getLabels().then((res) => {
				this.labels = res.data;
			});
		},
	};
</script>

<style lang="scss">
	@import '../scss/header.scss';
</style>
