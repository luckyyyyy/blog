<template>
	<div class="container">
		<article class="article" v-if="!loading">
			<div class="article__head">
				<h2 class="article__title">{{ article.title }}</h2>
				<p class="article__info">
					<span class="article__author">Posted by {{ article.user.login }} on </span>
					<time class="article__time">{{ article.created_at | time }}</time>
				</p>
			</div>
			<div class="article__content markdown-body" v-html="markdown"></div>
		</article>
		<div class="spinner" v-else>
			<div class="spinner__circle1"></div>
			<div class="spinner__circle2"></div>
		</div>
	</div>
</template>

<script>
	import moment from 'moment';
	import { getIssue } from '@/api/issues';
	import getMarkdown from '@/api/miscellaneous';
	import 'github-markdown-css';

	export default {
		data() {
			return {
				loading: true,
				article: {},
				markdown: '',
			};
		},
		created() {
			const number = this.$route.params.article;
			getIssue(number).then((res) => {
				this.article = res.data;
				getMarkdown({ text: res.data.body }).then((markdown) => {
					this.markdown = markdown.data;
					this.loading = false;
				});
			});
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
