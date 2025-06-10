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
                src={profileImage} 
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
