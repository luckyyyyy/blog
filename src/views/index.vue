<template>
	<div class="container">
		<ul class="article-list" v-if="!loading">
			<router-link
				tag="li"
				class="article-list-item"
				:to="{ name: 'article', params: { article: item.number } }"
				:key="item.id"
				v-for="item of issues"
			>
				<div class="article-list-item__head">
					<span :style="{ borderColor: `#${label.color}`, color: `#${label.color}` }" class="article-list-item__label" v-for="label of item.labels">{{ label.name }}</span>
					<span class="article-list-item__title">{{ item.title }}</span>
				</div>
				<div class="article-list-item__footer">
					<span class="article-list-item__author">Posted by {{ item.user.login }} on </span>
					<time class="article-list-item__time">{{ item.created_at | time }}</time>
				</div>
			</router-link>
		</ul>
		<div class="spinner" v-else>
			<div class="spinner__circle1"></div>
			<div class="spinner__circle2"></div>
		</div>
	</div>
</template>

<script>
	import { getIssues } from '@/api/issues';
	import moment from 'moment';

	export default {
		data() {
			return {
				issues: [],
				loading: true,
			};
		},
		beforeRouteEnter(to, from, next) {
			next((vm) => {
				vm.getList();
			});
		},
		beforeRouteUpdate(to, from, next) {
			next(); // 先放行
			this.getList(to.params.label).then();
		},
		methods: {
			async getList(label) {
				this.loading = true;
				const labels = label || this.$route.params.label;
				await getIssues({ labels }).then((res) => {
					this.issues = res.data;
					this.loading = false;
				});
			},
		},
		filters: {
			time(val) {
				return moment(val).format('Y-MM-DD HH:mm');
			},
		},
	};
</script>

<style lang="scss">
	@import '../scss/list.scss';
</style>
