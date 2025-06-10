import { useState } from 'react';
import './App.css'
import SplashCursor from './assets/SplashCursor'

function App() {
  // Thêm state để quản lý ảnh profile
  const [profileImage, setProfileImage] = useState(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4rdu6ODMPalfTqaVvQGkw1X4vJD47u0XMxQ&s' // Thay bằng link ảnh của bạn
  )
  
  // Hàm xử lý khi người dùng upload ảnh mới
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfileImage(event.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
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
            {/* Avatar container chỉ hiển thị ảnh và input upload ẩn */}
            <div className="avatar-container">
              <label htmlFor="profile-upload" style={{ cursor: 'pointer' }}>
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="avatar-image"
                  onError={() => setProfileImage('https://via.placeholder.com/150')} // Fallback nếu ảnh lỗi
                />
              </label>
              <input 
                id="profile-upload" 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </div>
            <h1 className="name">N.Thanh</h1>
            <p className="title">I design websites and capture life through my lensr</p>
            <p className="description">
             I'm a creative person - a dreamer with a passion for minimalistic yet stylish web interfaces. When I am not immersed in lines of code, I often wander with my camera to capture everyday moments, or immerse myself in familiar melodies in my free time.
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">80+</div>
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
              <div className="skill-item" style={{ ['--i' as any]: 1 }}>
                <div className="skill-name">React & Vue.js</div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ ['--width' as any]: '90%', ['--i' as any]: 1 }}></div>
                </div>
              </div>
              <div className="skill-item" style={{ ['--i' as any]: 2 }}>
                <div className="skill-name">Node.js & Express</div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ ['--width' as any]: '85%', ['--i' as any]: 2 }}></div>
                </div>
              </div>
              <div className="skill-item" style={{ ['--i' as any]: 3 }}>
                <div className="skill-name">Python & Django</div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ ['--width' as any]: '80%', ['--i' as any]: 3 }}></div>
                </div>
              </div>
              <div className="skill-item" style={{ ['--i' as any]: 4 }}>
                <div className="skill-name">MongoDB & PostgreSQL</div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ ['--width' as any]: '75%', ['--i' as any]: 4 }}></div>
                </div>
              </div>
              <div className="skill-item" style={{ ['--i' as any]: 5 }}>
                <div className="skill-name">AWS & Docker</div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ ['--width' as any]: '70%', ['--i' as any]: 5 }}></div>
                </div>
              </div>
              <div className="skill-item" style={{ ['--i' as any]: 6 }}>
                <div className="skill-name">UI/UX Design</div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ ['--width' as any]: '85%', ['--i' as any]: 6 }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-section">
            <h2 className="section-title">Let's Connect</h2>
            <div className="contact-buttons">
              <a href="mailto:lunhatthanh259@gmail.com" className="contact-btn primary">Contact Me</a>
              <a href="#" className="contact-btn secondary">Download CV</a>
              <a href="https://github.com/thanhkobietcode" className="contact-btn secondary">GitHub</a>
              <a href="https://www.facebook.com/s.DesignxPts" className="contact-btn secondary">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
