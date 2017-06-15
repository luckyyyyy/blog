import Vue from 'vue';
import Router from 'vue-router';

import topRoute from '@/router/top';
import articleRoute from '@/router/article';
import listRoute from '@/router/list';

import 'normalize.css';
import '@/scss/index.scss';

Vue.use(Router);

const routes = [].concat(
	articleRoute, listRoute,
	topRoute,
);
const router = new Router({
	base: __dirname,
	routes,
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
});

export default router;
