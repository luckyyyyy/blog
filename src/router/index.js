import Vue from 'vue';
import Router from 'vue-router';

import topRoute from '@/router/top';
import articleRoute from '@/router/article';
import listRoute from '@/router/list';
import ProgressBar from '@/components/progressbar';

import 'normalize.css';
import '@/scss/index.scss';

const bar = new Vue(ProgressBar).$mount();
document.body.appendChild(bar.$el);
Vue.prototype.$bar = bar;

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

router.beforeResolve((to, from, next) => {
	const matched = router.getMatchedComponents(to);
	const prevMatched = router.getMatchedComponents(from);
	let diffed = false;
	const activated = matched.filter((c, i) => {
		return diffed || (diffed = (prevMatched[i] !== c));
	});
	const asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _);
	if (!asyncDataHooks.length) {
		bar.finish();
		next();
	} else {
		Promise.all(asyncDataHooks.map(hook => hook({ route: to }))).then(() => {
			bar.finish();
			next();
		}).catch(() => {
			bar.finish();
			next();
		});
	}
});
router.beforeEach(async (to, from, next) => {
	bar.start();
	return next();
});
export default router;
