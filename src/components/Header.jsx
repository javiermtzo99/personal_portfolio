
export default function Header() {
  return (
    <>
      {/* Mobile Header */}
      <div className="mobile-header">
        <div className="dropdown-menu">
          <div className="menu-content">
            <div className="menu-icon">
              <i className="fa-solid fa-address-card"></i>
            </div>
            <div className="menu-text">About</div>
          </div>
          <div className="menu-arrow">
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="site-header">
        <div className="header-section active">
          <div className="header-icon">
            <i className="fa-solid fa-address-card"></i>
          </div>
          <p>About</p>
        </div>
        <div className="header-section">
          <div className="header-icon">
            <i className="fa-solid fa-school"></i>
          </div>
          <p>Education</p>
        </div>
        <div className="header-section">
          <div className="header-icon">
            <i className="fa-solid fa-briefcase"></i>
          </div>
          <p>Work Exp</p>
        </div>
        <div className="header-section">
          <div className="header-icon">
            <i className="fa-solid fa-code"></i>
          </div>
          <p>Projects</p>
        </div>
        <div className="header-section">
          <div className="header-icon">
            <i className="fa-solid fa-envelope"></i>
          </div>
          <p>Contact</p>
        </div>
      </div>
    </>
  );
}