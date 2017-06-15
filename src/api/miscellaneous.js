import { http } from '@/api';

export default ({ text, mode, context }) => {
	return http.post('/markdown', { text, mode, context });
};
