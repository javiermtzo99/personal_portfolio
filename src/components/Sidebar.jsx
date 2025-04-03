export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* Replace relative images with /person-img-1.png if in public/ folder */}
      <img src="/person-img-1.png" alt="Profile" className="profile-image" />

      <div className="sidebar-content">
        <div className="person-name">
          <h4>Javier Martinez</h4>
        </div>
        <div className="person-profession">
          <p>Data Scientist/Engineer</p>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/javier-martinez-a8a759146/" target="_blank" rel="noopener noreferrer">  
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/javiermtzo99" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="person-contact">
          <div className="person-contact-method">
            <div className="person-contact-method-icon">
              <i className="fa-solid fa-mobile-screen-button"></i>
            </div>
            <div className="person-contact-method-text">
              <span>Phone</span>
              <p>+52 449-904-8658</p>
            </div>
          </div>
          <hr />
          <div className="person-contact-method">
            <div className="person-contact-method-icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="person-contact-method-text">
              <span>Email</span>
              <p>javiermtz99@icloud.com</p>
            </div>
          </div>
          <hr />
          <div className="person-contact-method">
            <div className="person-contact-method-icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="person-contact-method-text">
              <span>Location</span>
              <p>Vancouver, BC, Canada</p>
            </div>
          </div>
        </div>
        <div className="person-cv">
          <p>Download CV</p>
        </div>
      </div>
    </div>
  );
}