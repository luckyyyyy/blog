import { http, owner, repo } from '.';

// GET /repos/:owner/:repo/labels
export const getLabels = () => {
	return http.get(`repos/${owner}/${repo}/labels`);
};
// { filter, state, labels, sort, direction, since }
export const getIssues = (data) => {
	return http.get(`repos/${owner}/${repo}/issues`, data);
};
export const getIssue = (number) => {
	return http.get(`repos/${owner}/${repo}/issues/${number}`);
};
