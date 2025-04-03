
import { useState } from 'react';

export default function Header({ currentPath }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: '/about', icon: 'fa-address-card', text: 'About' },
    { path: '/education', icon: 'fa-school', text: 'Education' },
    { path: '/work_experience', icon: 'fa-briefcase', text: 'Work Exp' },
    { path: '/projects', icon: 'fa-code', text: 'Projects' },
    { path: '/contact', icon: 'fa-envelope', text: 'Contact' }
  ];

  function getClassNameFor(path) {
    return currentPath === path ? 'header-section active' : 'header-section';
  }

  const getCurrentMenuItem = () => {
    return menuItems.find(item => item.path === currentPath) || menuItems[0];
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    setIsOpen(false); // Close mobile menu after navigation
    // Let Astro handle the navigation
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="mobile-header">
        <div className={`dropdown-menu ${isOpen ? 'active' : ''}`} onClick={toggleDropdown}>
          <div className="menu-content">
            <div className="menu-icon">
              <i className={`fa-solid ${getCurrentMenuItem().icon}`}></i>
            </div>
            <div className="menu-text">{getCurrentMenuItem().text}</div>
          </div>
          <div className="menu-arrow">
            <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
          </div>
        </div>
        {isOpen && (
          <div className="mobile-menu-items">
            {menuItems.map((item) => (
              <a 
                key={item.path} 
                href={item.path}
                className={currentPath === item.path ? 'active' : ''}
                data-astro-reload={false}
                data-astro-prefetch
              >
                <div className="mobile-menu-item">
                  <i className={`fa-solid ${item.icon}`}></i>
                  <span>{item.text}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Header */}
      <div className="site-header">
        <a href="/about" data-astro-reload={false} data-astro-prefetch>
          <div className={getClassNameFor('/about')}>
            <div className="header-icon">
              <i className="fa-solid fa-address-card"></i>
            </div>
            <p>About</p>
          </div>
        </a>
        <a href="/education" data-astro-reload={false} data-astro-prefetch>
          <div className={getClassNameFor('/education')}>
            <div className="header-icon">
              <i className="fa-solid fa-school"></i>
            </div>
            <p>Education</p>
          </div>
        </a>
        <a href="/work_experience" data-astro-reload={false} data-astro-prefetch>
          <div className={getClassNameFor('/work_experience')}>
            <div className="header-icon">
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <p>Work Exp</p>
          </div>
        </a>
        <a href="/projects" data-astro-reload={false} data-astro-prefetch>
          <div className={getClassNameFor('/projects')}>
            <div className="header-icon">
              <i className="fa-solid fa-code"></i>
            </div>
            <p>Projects</p>
          </div>
        </a>
        <a href="/contact" data-astro-reload={false} data-astro-prefetch>
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