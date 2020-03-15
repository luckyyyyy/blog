/**
 * This file is part of the Blog.
 * @author   : William Chan (root@williamchan.me)
 */

import React, { Component } from 'react';
import Post, { IssueProps } from '@/components/post';
import QueueAnim from 'rc-queue-anim';
import { getIssues } from '@/api/issues';
import './index.less';

export default class Index extends Component {
  state = {
    list: []
  }

  async componentWillMount() {
    try {
      let res = await getIssues();
      res = await res.json();
      this.setState({
        list: res,
      });
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    let children
    if (this.state.list.length === 0) {
      children = <div>Loading</div>
    } else {
      children = this.state.list.map((item: IssueProps) => {
        return (
          <Post key={item.id} {...item}  />
        );
      });
    }

    return (
      <div className="index">
        <h1>青阳魂的博客</h1>
        <ul className="post-list">
          <QueueAnim type="top" delay={200}>
            { children }
          </QueueAnim>
        </ul>
      </div>
    );
  }

}
