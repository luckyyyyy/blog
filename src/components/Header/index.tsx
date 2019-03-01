/**
 * This file is part of the Blog.
 * @author William Chan <root@williamchan.me>
 */
import React, { Component } from 'react';
import Avatar from '../Avatar';
import QueueAnim from 'rc-queue-anim';
import './index.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="top">
          <Avatar />
          <QueueAnim type="bottom" delay={900} className="queue-simple">
            <div key="a" className="name">青阳魂</div>
            <div key="b" className="sign">Passionate about technology &amp; Hacker</div>
            <ul className="sns" key="c">
              <li><a className="github" target="_blank" href="https://github.com/luckyyyyy">GitHub</a></li>
              <li><a className="weibo" target="_blank" href="https://weibo.com/techvicky">WeiBo</a></li>
              <li><a className="zhihu" target="_blank" href="https://www.zhihu.com/people/qingyh/activities">知乎</a></li>
            </ul>
            <img key="d" className="qrcode" src={require('../../assets/qrcode.jpg')} alt="qrcode" />
          </QueueAnim>
        </div>
        <QueueAnim type="bottom" delay={1500} className="queue-simple">
          <div key="a" className="bottom">
            <p>Full Stack Developer</p>
            <p>C / Objective-C / JavaScript / PHP7 / MySQL / nodejs / ...</p>
          </div>
        </QueueAnim>
      </header>
    );
  }
}
