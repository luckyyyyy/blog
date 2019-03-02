import React, { Component } from 'react';
import Link from 'react-dom';
import marked from 'marked';
import 'github-markdown-css/github-markdown.css';
import './index.css';

export interface IssueProps {
  created_at: string,
  user: any, // 懒得写了
  title: string,
  body: string,
  id: string,
  html_url: string,
};

export default class PostLite extends Component<IssueProps> {
  state = {
    selected: false
  }

  constructor(props: IssueProps) {
    super(props);
  }

  render() {
    return (
      <a className="post-link" target="_blank" href={this.props.html_url}>
        <div className="post-item">
          <div className="post-item-title">{ this.props.title }</div>
          {/* <div className="post-item-user">{ this.props.user.login }</div> */}
          {/* <div className="post-item-time">{ this.props.created_at }</div> */}
          <div className="post-item-body markdown-body" dangerouslySetInnerHTML={{ __html: marked(this.props.body) }}></div>
        </div>
      </a>
    );
  }
}
