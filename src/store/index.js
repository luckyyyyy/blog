import Vue from 'vue';
import Vuex from 'vuex';
import { getIssues, getLabels } from '@/api/issues';

Vue.use(Vuex);

export const store = new Vuex.Store({
strict: process.env.NODE_ENV !== 'production',
	state: {
		list: [],
		article: [],
		label: [],
	},
	// getters,
	actions: {
		getIssues: ({ commit }) => {
		},
		getLabels: ({ commit }) => {
			return new Promise((resolve, reject) => {
				getLabels().then(res => res.json()).then((data) => {
					commit('labels', data);
					resolve();
				}).catch(() => {
					reject();
				})
			});
		},
	},
	mutations: {
		labels: (state, data) => {
			state.label = data;
		},
	},
});
