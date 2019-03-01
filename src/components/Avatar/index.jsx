import React, { Component } from 'react';
import TweenOne from 'rc-tween-one';
import ticker from 'rc-tween-one/lib/ticker';
import './index.css';

export default class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: require('../../assets/avatar.png'),
      w: 300,
      h: 300,
      pixSize: 20,
      pointSizeMin: 6,
    };
    this.interval = null;
    this.gather = true;
    this.dom = React.createRef();
    this.sideBoxComp = React.createRef()
  }

  componentDidMount() {
    setTimeout(async () => {
      await this.onResize();
      await this.createPointData();
      this.interval = ticker.timeout(this.updateTweenData, 1000);
      // window.addEventListener('resize', this.onResize, false);
    }, 0)
  }

  componentWillUnmount() {
    ticker.clear(this.interval);
    this.interval = null;
    // window.removeEventListener('resize', this.onResize, false);
  }

  onResize = () => {
    return new Promise((resolve, reject) => {
      const $header = document.querySelector('header')
      this.setState({
        w: Math.floor($header.offsetWidth * 0.7),
        h: Math.floor($header.offsetWidth * 0.7),
      }, () => {
        resolve();
      });
    });
  }

  onMouseEnter = () => {
    // !this.gather && this.updateTweenData();
    if (!this.gather) {
      this.updateTweenData();
    }
    this.componentWillUnmount();
  };

  onMouseLeave = () => {
    // this.gather && this.updateTweenData();
    if (this.gather) {
      this.updateTweenData();
    }
  };

  setDataToDom(data, w, h) {
    this.pointArray = [];
    const number = this.state.pixSize;
    for (let i = 0; i < w; i += number) {
      for (let j = 0; j < h; j += number) {
        if (data[((i + j * w) * 4) + 3] > 150) {
          this.pointArray.push({ x: i, y: j });
        }
      }
    }
    const children = [];
    this.pointArray.forEach((item, i) => {
      const r = Math.random() * this.state.pointSizeMin + this.state.pointSizeMin;
      const b = Math.random() * 0.4 + 0.1;
      const rgbs = [
        [229, 102, 95],
        [243, 173, 192],
        [201, 228, 172],
        [254, 210, 111],
        [197, 188, 242],
        [147, 201, 218],
      ];
      const col = rgbs[Math.round(Math.random() * 5)].join(',');
      children.push((
        <TweenOne className="point-wrapper" key={i} style={{ left: item.x, top: item.y }}>
          <TweenOne
            className="point"
            style={{
              width: r,
              height: r,
              opacity: b,
              backgroundColor: `rgb(${col})`,
            }}
            animation={{
              y: (Math.random() * 2 - 1) * 10 || 5,
              x: (Math.random() * 2 - 1) * 5 || 2.5,
              delay: Math.random() * 1000,
              repeat: -1,
              duration: 3000,
              yoyo: true,
              ease: 'easeInOutQuad',
              }}
          />
        </TweenOne>
      ));
    });
    this.setState({
      children,
      boxAnim: { opacity: 0, type: 'from', duration: 800 },
    });
  }

  createPointData = () => {
    return new Promise((resolve, reject) => {
      const { w, h } = this.state;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, w, h);
      canvas.width = this.state.w;
      canvas.height = h;
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, w, h);
        ctx.fillStyle = 'rgba(255, 255, 255, 0)';
        const data = ctx.getImageData(0, 0, w, h).data;
        this.setDataToDom(data, w, h);
        // this.dom.current.removeChild(canvas);
        resolve();
      };
      img.crossOrigin = 'anonymous';
      img.src = this.state.image;
    });
  };

  gatherData = () => {
    const children = this.state.children.map(item =>
    React.cloneElement(item, {
      animation: {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        delay: Math.random() * 500,
        duration: 800,
        ease: 'easeInOutQuint',
      },
    }));
    this.setState({ children });
  };

  disperseData = () => {
    const rect = this.dom.current.getBoundingClientRect();
    const sideRect = this.sideBoxComp.dom.getBoundingClientRect();
    const sideTop = sideRect.top - rect.top;
    const sideLeft = sideRect.left - rect.left;
    const children = this.state.children.map(item =>
    React.cloneElement(item, {
      animation: {
        x: Math.random() * rect.width - sideLeft - item.props.style.left,
        y: Math.random() * rect.height - sideTop - item.props.style.top,
        opacity: Math.random() * 0.4 + 0.1,
        scale: Math.random() * 2.4 + 0.1,
        duration: Math.random() * 500 + 500,
        ease: 'easeInOutQuint',
      },
    }));
    this.setState({
      children,
    });
  };

  updateTweenData = () => {
    ((this.gather && this.disperseData) || this.gatherData)();
    this.gather = !this.gather;
  };

  render() {
  return (
    <div ref={this.dom} className="avatar">
      <TweenOne
        animation={this.state.boxAnim}
        className="right-side blur"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        ref={(c) => {
        this.sideBoxComp = c;
        }}
      >
      {this.state.children}
      </TweenOne>
      <img alt="avatar" className="avatar-img" src={this.state.image} />
    </div>
  );
  }
}
