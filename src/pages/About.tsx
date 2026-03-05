import './About.css'

export default function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <img className="about-avatar" src="/assets/avatar.png" alt="avatar" />
        <div className="about-hero-text">
          <h1 className="about-name">William Chan &middot; 青阳魊</h1>
          <p className="about-role">Full Stack Developer · AI Agent Engineer</p>
          <div className="about-links">
            <a className="about-link-btn" target="_blank" rel="noopener noreferrer" href="https://github.com/luckyyyyy">
              <svg height="16" viewBox="0 0 16 16" width="16" aria-hidden="true"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-section-title">AI Native</h2>
        <div className="ai-native-card">
          <div className="ai-native-badge">AI Native Engineer</div>
          <p className="ai-native-desc">
            我的日常工作方式已经完全 AI 化。从设计、编码、调试到架构决策，AI Agent 是我的核心协作者——
            不只是代码补全，而是真正的结对编程伙伴。
          </p>
          <ul className="ai-native-list">
            <li>
              <span className="ai-dot" />
              <span><strong>Vibe Coding</strong> — 以自然语言描述需求，让 AI Agent（GitHub Copilot、Claude）生成、迭代、重构代码，专注于架构与产品思考</span>
            </li>
            <li>
              <span className="ai-dot" />
              <span><strong>Agent 驱动开发</strong> — 使用 AI Agent 自主完成完整功能模块，包括测试、文档、CI 配置，将工程产出效率提升 10x</span>
            </li>
            <li>
              <span className="ai-dot" />
              <span><strong>多模型协作</strong> — 根据任务特性在 Claude Sonnet、GPT-4o、Gemini、DeepSeek 之间灵活切换，构建 AI 工具链工作流</span>
            </li>
            <li>
              <span className="ai-dot" />
              <span><strong>MCP 生态</strong> — 深度使用 Model Context Protocol，将代码库、设计稿、文档接入 AI 上下文，实现真正的全链路智能辅助</span>
            </li>
          </ul>
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
          className="project-card project-card-featured"
          href="https://github.com/luckyyyyy/miu2d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project-card-header">
            <span className="project-name">miu2d</span>
            <span className="project-live">miu2d.com ↗</span>
          </div>
          <p className="project-desc">
            176,000 行代码从零打造的 2D ARPG 游戏引擎——原生 WebGL，零游戏框架依赖。
            使用 TypeScript + Rust + React 构建，已在浏览器中完整还原三款经典西山居武侠 RPG。
            全程 AI Native 开发，Vibe Coding 实践项目。
          </p>
          <div className="project-tags">
            <span>TypeScript</span>
            <span>Rust</span>
            <span>WebGL</span>
            <span>WebAssembly</span>
            <span>React</span>
          </div>
        </a>

        <div className="project-grid">
          <a
            className="project-card"
            href="https://github.com/luckyyyyy/JH"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-card-header">
              <span className="project-name">JH · 菊花插件集</span>
              <span className="project-stars">★ 87</span>
            </div>
            <p className="project-desc">
              《剑侠情缘网络版叁》开源游戏插件框架，专注 PVE 玩法。Lua 实现，覆盖冷却监控、副本助手、伤害统计、团队工具等十余个功能模块，50+ Fork。
            </p>
            <div className="project-tags">
              <span>Lua</span>
              <span>C++</span>
              <span>Game Plugin</span>
            </div>
          </a>

          <a
            className="project-card"
            href="https://github.com/luckyyyyy/node-opencv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-card-header">
              <span className="project-name">node-opencv</span>
            </div>
            <p className="project-desc">
              基于 Rust + NAPI-RS 封装的 Node.js OpenCV 原生扩展。提供模板匹配、图像识别等计算机视觉能力，供 Node.js / Electron 应用直接调用。
            </p>
            <div className="project-tags">
              <span>Rust</span>
              <span>Node.js</span>
              <span>OpenCV</span>
              <span>NAPI</span>
            </div>
          </a>

          <a
            className="project-card"
            href="https://github.com/luckyyyyy/node-system-proxy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-card-header">
              <span className="project-name">node-system-proxy</span>
            </div>
            <p className="project-desc">
              通过 macOS / Windows 系统原生 API 控制系统代理开关的 Node.js 扩展，Objective-C + C 实现。常用于 Electron 应用内一键切换系统代理。
            </p>
            <div className="project-tags">
              <span>Objective-C</span>
              <span>C</span>
              <span>Node.js</span>
              <span>Electron</span>
            </div>
          </a>

          <a
            className="project-card"
            href="https://github.com/Lienol/openwrt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-card-header">
              <span className="project-name">Lienol/openwrt</span>
              <span className="project-stars">★ 3.6k</span>
            </div>
            <p className="project-desc">
              主流 OpenWrt 改版固件，面向嵌入式路由器设备的 Linux 系统。集成丰富软件包生态，支持深度定制，被 1.8k+ 开发者 Fork。
            </p>
            <div className="project-tags">
              <span>C</span>
              <span>OpenWrt</span>
              <span>Linux</span>
              <span>Embedded</span>
            </div>
          </a>
        </div>
      </section>

      <section className="about-section about-contact">
        <img className="about-qrcode" src="/assets/qrcode.jpg" alt="WeChat QR Code" />
        <p>微信扫一扫</p>
      </section>
    </div>
  )
}
