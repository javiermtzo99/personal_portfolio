
export default function Header({ currentPath }) {
  function getClassNameFor(path) {
    return currentPath === path ? 'header-section active' : 'header-section';
  }
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
        <a href="/about">
          <div className={getClassNameFor('/about')}>
            <div className="header-icon">
              <i className="fa-solid fa-address-card"></i>
            </div>
            <p>About</p>
          </div>
        </a>
        <a href="/education">
          <div className={getClassNameFor('/education')}>
            <div className="header-icon">
              <i className="fa-solid fa-school"></i>
            </div>
            <p>Education</p>
          </div>
        </a>
        <a href="/work_experience">
          <div className={getClassNameFor('/work_experience')}>
            <div className="header-icon">
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <p>Work Exp</p>
          </div>
        </a>
        <a href="/projects">
          <div className={getClassNameFor('/projects')}>
            <div className="header-icon">
              <i className="fa-solid fa-code"></i>
            </div>
            <p>Projects</p>
          </div>
        </a>
        <a href="/contact">
          <div className={getClassNameFor('/contact')}>
            <div className="header-icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <p>Contact</p>
          </div>
        </a>
      </div>
    </>
  );
}