import { http } from '@/api';

export default ({ text, context }) => {
	return http.post('markdown', { text, mode: 'gfm', context });
};
