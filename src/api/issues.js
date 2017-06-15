import { http, owner, repo } from '@/api';

// GET /repos/:owner/:repo/labels
export const getLabels = () => {
	return http.get(`repos/${owner}/${repo}/labels`);
};
export const getIssues = ({ filter, state, labels, sort, direction, since }) => {
	return http.get(`repos/${owner}/${repo}/issues`, { params: { filter, state, labels, sort, direction, since } });
};
export const getIssue = (number) => {
	return http.get(`repos/${owner}/${repo}/issues/${number}`);
};
