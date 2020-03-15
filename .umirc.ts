/**
 * This file is part of the Blog.
 * @author   : William Chan (root@williamchan.me)
 */

import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { exact: false, path: '/', component: '@/layouts/index',
    routes: [
      { title: '青阳魂 - 写代码不赚钱 就交个朋友', exact: true, path: '/', component: '@/pages/index' },
      { title: '青阳魂 - 写代码不赚钱 就交个朋友', exact: true, path: '/about', component: '@/pages/about' },
      // { exact: true, path: '/users', component: '@/pages/users' },
    ],
  },
    {
      title: '404 Not Found',
      component: '@/pages/404'
    },
  ],
  copy: ['public'],
  favicon: '/assets/favicon.ico',
  // dynamicImport: {}
});
