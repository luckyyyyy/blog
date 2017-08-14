export default [
	{
		path: '/article/:article',
		name: 'article',
		components: {
			header: () => import('@/components/header.vue'),
			main: () => import('@/views/article.vue'),
			footer: () => import('@/components/footer.vue'),
		},
	},
];
