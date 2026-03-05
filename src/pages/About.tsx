import './About.css'

export default function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <img className="about-avatar" src="/assets/avatar.png" alt="avatar" />
        <div className="about-hero-text">
          <h1 className="about-name">William Chan &middot; 青阳魊</h1>
          <p className="about-role">Full Stack Developer / Software Engineer</p>
          <div className="about-links">
            <a className="about-link-btn" target="_blank" rel="noopener noreferrer" href="https://github.com/luckyyyyy">
              <svg height="16" viewBox="0 0 16 16" width="16" aria-hidden="true"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-section-title">Tech Stack</h2>
        <div className="about-stack">
          <p>C &middot; Rust &middot; Objective-C &middot; TypeScript &middot; Lua &middot; Python &middot; JavaScript &middot; PHP &middot; Node.js</p>
          <p>OpenWRT &middot; Webpack &middot; Nginx &middot; Hadoop &middot; MySQL &middot; Kafka &middot; RabbitMQ &middot; RocketMQ</p>
          <p>Linux (Ubuntu) &middot; macOS</p>
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-section-title">Projects</h2>
        <a
          className="project-card"
          href="https://github.com/luckyyyyy/miu2d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project-card-header">
            <span className="project-name">miu2d</span>
            <span className="project-live">Live Demo ↗</span>
          </div>
          <p className="project-desc">
            176,000 行代码邠锐打造的 2D ARPG 游戏引擎——原生 WebGL，零游戏框架依赖。
            使用 TypeScript + Rust + React 构建，已在浏览器中完整还原三款经典西山居武侠 RPG。
          </p>
          <div className="project-tags">
            <span>TypeScript</span>
            <span>Rust</span>
            <span>WebGL</span>
            <span>WebAssembly</span>
            <span>React</span>
          </div>
        </a>
      </section>

      <section className="about-section about-contact">
        <img className="about-qrcode" src="/assets/qrcode.jpg" alt="WeChat QR Code" />
        <p>微信扫一扫</p>
      </section>
    </div>
  )
}
