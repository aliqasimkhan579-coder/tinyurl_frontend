import React from 'react'
import './Resources.css'

const Resources = () => {
  return (
    <div className="resources-wrapper">
      <nav className="navbar">
        <div className="logo">TINYURL</div>
        <ul className="nav-links">
          <li>Plans</li>
          <li>Features</li>
          <li>Domains</li>
          <li className="resources-hover">Resources
            {/* DROPDOWN */}
            <div className="mega-menu">
              <div className="menu-left">
                <h2>Resources</h2>
              </div>
              <div className="menu-right">
                <div className="res-item">
                  <h4>📄 Blog</h4>
                  <p>Read the latest tips and tricks from the top experts in link shortening</p>
                </div>
                <div className="res-item">
                  <h4>🅱 For Developers</h4>
                  <p>Power your apps and software with automated, fully custom URL shortening</p>
                </div>
                <div className="res-item">
                  <h4>✔ Our Proven Process</h4>
                  <p>Learn how our customers go from zero to hero with our link management tools</p>
                </div>
                <div className="res-item">
                  <h4>👥 About Us</h4>
                  <p>Learn about TinyURL's journey as the first link shortener</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="auth">
          <span>Log In</span>
          <button>Sign Up</button>
        </div>
      </nav>
    </div>
  )
}

export default Resources;