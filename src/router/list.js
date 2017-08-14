export default [
	{
		path: '/label/:label',
		name: 'label',
		components: {
			header: () => import('@/components/header.vue'),
			main: () => import('@/views/index.vue'),
			footer: () => import('@/components/footer.vue'),
		},
	},
];
