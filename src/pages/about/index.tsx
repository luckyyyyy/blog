/**
 * This file is part of the Blog.
 * @author   : William Chan (root@williamchan.me)
 */

import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import styles from './index.less';

export default class About extends Component {
  render() {
    return (
      <div className={styles.about}>
        <QueueAnim delay={500} className="queue-simple">
          <img key="1" width="200" src="/assets/avatar.png" />
          <div key="2">Full Stack Developer / Software Engineer</div>
          <div key="2">C / Rust / Objective-C / TypeScript / Lua / Python /  JavaScript / PHP7 / nodejs ...</div>
          <div key="2">OpenWRT / Webpack / Nginx / hadoop / MySQL / Kafka / RabbitMQ / RocketMQ ...</div>
          <div key="2">Linux (Ubuntu) / macOS</div>
          <p key="2"><a target="_blank" href="https://github.com/luckyyyyy">https://github.com/luckyyyyy</a></p>
          <img key="7" width="200" src="/assets/qrcode.jpg" />
        </QueueAnim>
      </div>
    );
  }
}


