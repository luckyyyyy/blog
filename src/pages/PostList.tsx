import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import PostLite, { IssueProps } from '../components/PostLite';
import { getIssues } from '../api/issues';

export default class PostList extends Component {

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
    if (this.state.list.length === 0) {
      return <div>loading</div>
    }
    const children = this.state.list.map((item: IssueProps) => {
      return (
        <PostLite key={item.id} {...item} />
      );
    });
    return (
      <ul className="post-list">
        <QueueAnim type="top" delay={200} className="queue-simple">
					{ children }
				</QueueAnim>
      </ul>
    );
  }
}
