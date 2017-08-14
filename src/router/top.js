export default [
	{
		path: '/',
		name: 'index',
		components: {
			header: () => import('@/components/header.vue'),
			main: () => import('@/views/index.vue'),
			footer: () => import('@/components/footer.vue'),
		},
	},
	{
		path: '*',
		name: '404',
		component: () => import('@/views/404.vue'),
	},
];
