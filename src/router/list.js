export default [
	{
		path: '/label/:label',
		name: 'label',
		components: {
			header: () => import('@/components/header.vue'),
			main: () => import('@/views/blog.vue'),
			footer: () => import('@/components/footer.vue'),
		},
	},
	{
		path: '/index',
		name: 'blog_index',
		components: {
			header: () => import('@/components/header.vue'),
			main: () => import('@/views/blog.vue'),
			footer: () => import('@/components/footer.vue'),
		},
	},
];
