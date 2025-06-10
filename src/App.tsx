import { useState } from 'react'
import './App.css'
import SplashCursor from './assets/SplashCursor'

function App() {
  const [avatarUrl, setAvatarUrl] = useState<string>('')
  const [inputUrl, setInputUrl] = useState<string>('')

  const handleAvatarSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAvatarUrl(inputUrl)
    setInputUrl('')
  }

  return (
    <>
      <SplashCursor />
      <div className="floating-shapes" style={{ zIndex: 1, pointerEvents: 'none' }}>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div className="container">
        <div className="profile-card">
          <div className="profile-header">
            <div className="avatar">
              {avatarUrl ? (
                <img src={} alt="Profile" className="avatar-img" />
              ) : (
                '👨‍💻'
              )}
            </div>
            <h1 className="name">Hoàng Thái</h1>
            <p className="title">Full Stack Developer</p>
            <p className="description">
              Passionate developer with 5+ years of experience creating innovative web applications.
              I love turning complex problems into simple, beautiful solutions that make a difference.
            </p>

            <form onSubmit={handleAvatarSubmit} className="avatar-form">
              <input
                type="url"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder="Paste image URL here..."
                className="avatar-input"
                required
              />
              <button type="submit" className="avatar-btn">Update Avatar</button>
            </form>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>

          <div className="skills-section">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
              {/* Giữ nguyên các kỹ năng */}
              {[
                { name: 'React & Vue.js', width: '90%', i: 1 },
                { name: 'Node.js & Express', width: '85%', i: 2 },
                { name: 'Python & Django', width: '80%', i: 3 },
                { name: 'MongoDB & PostgreSQL', width: '75%', i: 4 },
                { name: 'AWS & Docker', width: '70%', i: 5 },
                { name: 'UI/UX Design', width: '85%', i: 6 },
              ].map((skill) => (
                <div className="skill-item" key={skill.i} style={{ ['--i' as any]: skill.i }}>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{
                        ['--width' as any]: skill.width,
                        ['--i' as any]: skill.i,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-section">
            <h2 className="section-title">Let's Connect</h2>
            <div className="contact-buttons">
              <a href="mailto:duonghoangthai61@gmail.com" className="contact-btn primary">Contact Me</a>
              <a href="#" className="contact-btn secondary">Download CV</a>
              <a href="https://github.com/hoanGtHaiVip" className="contact-btn secondary">GitHub</a>
              <a href="https://linkedin.com" className="contact-btn secondary">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
