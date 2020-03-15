/**
 * This file is part of the Blog.
 * @author William Chan <root@williamchan.me>
 */

import { history } from 'umi';

// 为了让umi先加载
const isLogin = true
export function render(render: any) {
  if (isLogin === true) {
    render()
  } else {
  history.push('/');
  }
}
