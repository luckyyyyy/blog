<template>
	<header class="header">
		<nav class="header-nav" :class="{ 'header-nav--dark': dark }">
			<router-link tag="h1" class="header-nav-link" :to="{ name: 'index' }">
				<img class="header-nav__logo" src="../assets/logo.png">
				<span class="header-nav__text">root@william ~</span>
			</router-link>
			<menu class="header-nav-menu">
				<router-link
					tag="li"
					class="header-nav-menu-item"
					:to="{ name: 'blog_index' }"
					:class="{ 'header-nav-menu-item--active': $route.name == 'index' }"
				>
					全部
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
				<li class="header-nav-menu-item github" title="GitHub">
					<a href="https://github.com/luckyyyyy" target="_blank">
						<svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32">
							<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
						</svg>
					</a>
				</li>


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

<script>
	import { mapState } from 'vuex';

	export default {
		data() {
			return {
				dark: false,
			};
		},
		asyncData({ store }) {
			return store.dispatch('getLabels');
		},
		computed: {
			...mapState(['labels']),
		},
		mounted() {
			window.addEventListener('scroll', (e) => {
				const scrollTop = e.target.documentElement.scrollTop;
				this.dark = scrollTop > 50;
			});
		},
	};
</script>

<style lang="scss">
	@import '../scss/header.scss';
</style>
