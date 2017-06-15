export default [
	{
		path: '/',
		name: 'index',
		component: () => import('@/views/index.vue'),
	},
	{
		path: '*',
		name: '404',
		component: () => import('@/views/404.vue'),
	},
];
