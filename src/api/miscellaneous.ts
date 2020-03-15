/**
 * This file is part of the Blog.
 * @author   : William Chan (root@williamchan.me)
 */

import { http } from '.';

interface MarkdownParams {
  text: string;
  context: string;
}

export default ({ text, context }: MarkdownParams) => {
	return http.post('markdown', { text, mode: 'gfm', context });
};
