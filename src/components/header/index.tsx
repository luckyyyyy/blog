/**
 * This file is part of the Blog.
 * @author   : William Chan (root@williamchan.me)
 */

import React from 'react';
import { Link } from 'umi';
import style from './index.less';

export default (props: any) => {
  return (
    <header className={style.header}>
      <div className={style['header-left']}>
        <img className={style['header-avatar']} src="/assets/avatar.png" alt="avatar"/>
        <div className={style['header-terminal']}>
          <span>[</span>
          <span className={style['header-terminal-ansi_pink']}>root</span>
          <span>@</span>
          <span className={style['header-terminal-ansi_red']}>williamchan.me</span>
          <span>:</span>
          <span className={style['header-terminal-ansi_green']}>~/blog</span>
          <span>]</span>
          <span> $</span>
          <span className={style['header-terminal-cursor']}></span>
          <span className={style['header-terminal-placeholder']}>echo "Passionate about technology &amp; Hacker"</span>
        </div>
      </div>
      <nav className={style['header-right']}>
        <div className={style['header-links']}>
          <Link to="/">Home</Link>
          <a className={style['header-links-weibo']} target="_blank" href="https://weibo.com/techvicky">微博</a>
          <a className={style['header-links-zhihu']} target="_blank" href="https://www.zhihu.com/people/qingyh/activities">知乎</a>
          <a className={style['header-links-github']} target="_blank" href="https://github.com/luckyyyyy">GitHub</a>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </header>
  )
}
