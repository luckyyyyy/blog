export default [
	{
		path: '/article/:article',
		name: 'article',
		component: () => import('@/views/article.vue'),
	},
];
