<template>
	<div class="container">
		<ul class="article-list">
			<router-link
				tag="li"
				class="article-list-item"
				:to="{ name: 'article', params: { article: item.number } }"
				:key="item.id"
				v-for="item of issues"
			>
				<div class="article-list-item__head">
					<span 
						:style="{ borderColor: `#${label.color}`, color: `#${label.color}` }" 
						class="article-list-item__label" 
						v-for="label of item.labels"
						:key="label.id"
					>
						{{ label.name }}
					</span>
					<span class="article-list-item__title">{{ item.title }}</span>
				</div>
				<div class="article-list-item__footer">
					<span class="article-list-item__author">Posted by {{ item.user.login }} on </span>
					<time class="article-list-item__time">{{ item.created_at | time }}</time>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import moment from 'moment';

	export default {
		asyncData({ store, route }) {
			return store.dispatch('getIssues', route.params.label);
		},
		computed: {
			...mapState(['issues']),
		},
		filters: {
			time(val) {
				return moment(val).format('YYYY/MM/DD HH:mm');
			},
		},
	};
</script>

<style lang="scss">
	@import '../scss/list.scss';
</style>
