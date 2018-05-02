<template>
	<div class="container">
		<article class="article">
			<div class="article__head">
				<h2 class="article__title">{{ article.title }}</h2>
				<p class="article__info">
					<span class="article__author">Posted by {{ article.user.login }} on </span>
					<time class="article__time">{{ article.created_at | time }}</time>
				</p>
			</div>
			<div class="article__content markdown-body" v-html="markdown"></div>
		</article>
	</div>
</template>

<script>
	import moment from 'moment';
	import { mapState } from 'vuex';
	import 'github-markdown-css/github-markdown.css';

	export default {
		asyncData({ store, route }) {
			return store.dispatch('getArticle', route.params.article);
		},
		computed: {
			...mapState(['article', 'markdown']),
		},
		filters: {
			time(val) {
				return moment(val).format('YYYY/MM/DD HH:mm');
			},
		},
	};
</script>

<style lang="scss">
	@import '../scss/article.scss';
</style>
