import './styles/About.css'
import { getRepoStars } from './api'

const PROJECTS = [
  {
    name: 'miu2d',
    repo: 'luckyyyyy/miu2d',
    href: 'https://github.com/luckyyyyy/miu2d',
    since: 'Jan 2026',
    live: 'miu2d.com',
    desc: 'A 2D ARPG game engine built from scratch with 176k lines of code — native WebGL, zero game framework dependencies. Built with TypeScript + Rust + React, faithfully recreating three classic Xishanju wuxia RPGs in the browser. Entirely AI Native development, a Vibe Coding practice project.',
    tags: ['TypeScript', 'Rust', 'WebGL', 'WebAssembly', 'React'],
    featured: true,
  },
  {
    name: 'tokimo-package-sandbox',
    repo: 'tokimo-lab/tokimo-package-sandbox',
    href: 'https://github.com/tokimo-lab/tokimo-package-sandbox',
    since: 'May 2026',
    desc: 'Cross-platform native sandbox for running arbitrary commands safely. Linux (bwrap + seccomp), macOS (Virtualization.framework), Windows (Hyper-V HCS). Built with Rust.',
    tags: ['Rust', 'Sandbox', 'Linux', 'macOS', 'Windows'],
  },
  {
    name: 'JH',
    repo: 'luckyyyyy/JH',
    href: 'https://github.com/luckyyyyy/JH',
    since: 'Dec 2014',
    desc: 'Open-source plugin framework for JX3 (Jianxia Qingyuan Online III), focused on PVE gameplay. Built with Lua, covering cooldown tracking, dungeon helpers, damage meters, raid tools, and 10+ feature modules. 50+ Forks.',
    tags: ['Lua', 'C++', 'Game Plugin'],
  },
  {
    name: 'node-opencv',
    repo: 'luckyyyyy/node-opencv',
    href: 'https://github.com/luckyyyyy/node-opencv',
    since: 'Nov 2024',
    desc: 'Node.js OpenCV native extension built with Rust + NAPI-RS. Provides template matching, image recognition, and other computer vision capabilities for Node.js / Electron applications.',
    tags: ['Rust', 'Node.js', 'OpenCV', 'NAPI'],
  },
  {
    name: 'node-system-proxy',
    repo: 'luckyyyyy/node-system-proxy',
    href: 'https://github.com/luckyyyyy/node-system-proxy',
    since: 'Apr 2022',
    desc: 'Node.js extension for controlling system proxy settings via macOS / Windows native APIs. Built with Objective-C + C. Commonly used in Electron apps for one-click proxy switching.',
    tags: ['Objective-C', 'C', 'Node.js', 'Electron'],
  },
  {
    name: 'Lienol/openwrt',
    repo: 'Lienol/openwrt',
    href: 'https://github.com/Lienol/openwrt',
    since: 'Feb 2020',
    desc: 'Popular OpenWrt firmware fork for embedded router devices. Rich package ecosystem with deep customization support. 1.8k+ developer Forks.',
    tags: ['C', 'OpenWrt', 'Linux', 'Embedded'],
  },
]

function formatStars(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k`
  return String(n)
}

export default async function About() {
  const repos = PROJECTS.map((p) => p.repo)
  const starsMap = await getRepoStars(repos)

  return (
    <div className="about">
      <section className="about-hero">
        <img className="about-avatar" src="/assets/avatar.png" alt="avatar" />
        <div className="about-hero-text">
          <h1 className="about-name">William Chan</h1>
          <p className="about-role">Full Stack Developer / AI Native Engineer / Technical Product Manager</p>
          <div className="about-links">
            <a className="about-link-btn" target="_blank" rel="noopener noreferrer" href="https://github.com/luckyyyyy">
              <svg height="16" viewBox="0 0 16 16" width="16" aria-hidden="true"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>
              GitHub
            </a>
            <a className="about-link-btn" href="/blog">
              <svg height="16" viewBox="0 0 16 16" width="16" aria-hidden="true"><path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path></svg>
              Blog
            </a>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-intro">
          <p>
            I&apos;m a full-stack developer and AI Native engineer, specializing in tool products, developer products, enterprise service products, and testing products.
          </p>
          <p>
            I have extensive development experience — 20 years in the internet industry, coding for 15 years.
          </p>
          <p>
            I have high standards for user experience and a deep appreciation for well-crafted software.
          </p>
          <p>
            My current development focus spans frontend, cloud-native applications, and AI-driven systems — I&apos;m also well-versed in networking, operating systems, and storage.
          </p>
          <p>
            I build AI Native applications from the ground up: Agent systems with Function Calling / Tool Use, RAG pipelines, MCP integration, and full Vibe Coding workflows.
          </p>
          <p>
            I have a passion for technology and hardware, and I&apos;m also a white-hat hacker.
          </p>
          <p>
            I mostly code in JavaScript/TypeScript, Go, Rust, and C — but I&apos;m not limited to any specific language.
          </p>
          <blockquote className="about-open-to">
            I&apos;m currently open to new opportunities. If you&apos;re working on something interesting — especially in AI, developer tools, or infrastructure — feel free to reach out!
          </blockquote>
          <p className="about-kaomoji">(*^▽^*)</p>
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-section-title">Featured Projects</h2>

        {PROJECTS.map((project) => (
          <a
            key={project.repo}
            className={`project-card ${project.featured ? 'project-card-featured' : ''}`}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-card-header">
              <span className="project-name">{project.name}</span>
              <div className="project-card-right">
                <span className="project-since">since {project.since}</span>
                <span className="project-stars">★ {formatStars(starsMap[project.repo] ?? 0)}</span>
                {project.live && <span className="project-live">{project.live} ↗</span>}
              </div>
            </div>
            <p className="project-desc">{project.desc}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </section>

      <section className="about-section about-contact">
        <img className="about-qrcode" src="/assets/qrcode.jpg" alt="WeChat QR Code" />
        <p>Scan to connect on WeChat</p>
      </section>
    </div>
  )
}
