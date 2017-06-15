<template>
	<article class="container">
		<div class="article-content markdown-body" v-html="markdown" v-if="!loading"></div>
		<div class="spinner" v-else>
			<div class="spinner__circle1"></div>
			<div class="spinner__circle2"></div>
		</div>
	</article>
</template>

<script>
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
	};
</script>

<style lang="scss">
	@import '../scss/article.scss';
</style>
