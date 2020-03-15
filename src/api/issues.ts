/**
 * This file is part of the Blog.
 * @author   : William Chan (root@williamchan.me)
 */

import { http, owner, repo } from '.';

// GET /repos/:owner/:repo/labels
export const getLabels = () => {
	return http.get(`repos/${owner}/${repo}/labels`);
};
// { filter, state, labels, sort, direction, since }
export const getIssues = (data: any = {}) => {
	return http.get(`repos/${owner}/${repo}/issues`, data);
};
export const getIssue = (number: string) => {
	return http.get(`repos/${owner}/${repo}/issues/${number}`);
};
