import './App.css'
import SplashCursor from './assets/SplashCursor'

function App() {
  // Thêm state để quản lý ảnh profile
  const [profileImage, setProfileImage] = useState(
    'https://avatars.githubusercontent.com/u/YOUR_GITHUB_ID' // Thay bằng link ảnh của bạn
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
            {/* Thay thế avatar emoji bằng ảnh profile */}
            <div className="avatar-container">
              <img 
                src=data:image/jpeg;base64,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
                alt="Profile" 
                className="avatar-image"
                onError={() => setProfileImage('https://via.placeholder.com/150')} // Fallback nếu ảnh lỗi
              />
              <label htmlFor="profile-upload" className="upload-label">
                <i className="fas fa-camera"></i>
                <input 
                  id="profile-upload" 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                />
              </label>
            </div>
            <h1 className="name">Hoàng Thái</h1>
            <p className="title">Full Stack Developer</p>
            <p className="description">
              Passionate developer with 5+ years of experience creating innovative web applications. 
              I love turning complex problems into simple, beautiful solutions that make a difference.
            </p>
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
