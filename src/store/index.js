import Vue from 'vue';
import Vuex from 'vuex';
import { getIssues, getLabels, getIssue } from '@/api/issues';
import getMarkdown from '@/api/miscellaneous';

Vue.use(Vuex);

export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	state: {
		list: [],
		article: [],
		markdown: [],
		labels: [],
		issues: [],
	},
	// getters,
	actions: {
		getIssues: ({ commit }, labels) => {
			return new Promise((resolve, reject) => {
				getIssues({ labels }).then(res => res.json()).then((data) => {
					commit('issues', data);
					resolve();
				}).catch(() => {
					reject();
				});
			});
		},
		getArticle: ({ commit }, number) => {
			return new Promise((resolve, reject) => {
				getIssue(number).then(res => res.json()).then((data) => {
					commit('article', data);
					getMarkdown({ text: data.body }).then(res => res.text()).then((markdown) => {
						commit('markdown', markdown);
						resolve();
					}).catch(() => {
						reject();
					});
				}).catch(() => {
					reject();
				});
			});
		},
		getLabels: ({ commit, state }) => {
			return new Promise((resolve, reject) => {
				if (state.labels.length > 0) {
					resolve();
				} else {
					getLabels().then(res => res.json()).then((data) => {
						commit('labels', data);
						resolve();
					}).catch(() => {
						reject();
					});
				}
			});
		},
	},
	mutations: {
		labels: (state, data) => {
			state.labels = data;
		},
		issues: (state, data) => {
			state.issues = data;
		},
		article: (state, data) => {
			state.article = data;
		},
		markdown: (state, data) => {
			state.markdown = data;
		},
	},
});
