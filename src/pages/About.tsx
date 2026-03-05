import './About.css'

export default function About() {
  return (
    <div className="about">
      <img className="about-avatar" width="180" src="/assets/avatar.png" alt="avatar" />
      <h2 className="about-role">Full Stack Developer / Software Engineer</h2>
      <div className="about-info">
        <p>C / Rust / Objective-C / TypeScript / Lua / Python / JavaScript / PHP / Node.js ...</p>
        <p>OpenWRT / Webpack / Nginx / Hadoop / MySQL / Kafka / RabbitMQ / RocketMQ ...</p>
        <p>Linux (Ubuntu) / macOS</p>
      </div>
      <p className="about-link">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/luckyyyyy">
          github.com/luckyyyyy
        </a>
      </p>
      <img className="about-qrcode" width="180" src="/assets/qrcode.jpg" alt="qrcode" />
    </div>
  )
}
