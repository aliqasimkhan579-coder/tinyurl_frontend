import React from 'react'
import './Features.css'

const Features = () => {
  return (
    <div className="features-wrapper">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">TINYURL</div>
        <ul className="nav-links">
          <li>Plans</li>
          <li className="features-hover">Features
            {/* DROPDOWN */}
            <div className="mega-menu">
              <div className="menu-left">
                <h3>Features</h3>
              </div>
              <div className="menu-right">
                <div className="feature-item">
                  <h4>✎ Link Editor</h4>
                  <p>Keep all your links dynamic, and extend their value in the long run</p>
                </div>
                <div className="feature-item">
                  <h4>≡ Link Management</h4>
                  <p>Organize as many links as you need with our powerful, intuitive platform</p>
                </div>
                <div className="feature-item">
                  <h4>🔗 Branded Links</h4>
                  <p>Turn heads and hold attention with fully custom short links</p>
                </div>
                <div className="feature-item">
                  <h4>⊕ Short URL Tracking</h4>
                  <p>Measure the success of your efforts and make smarter, data-driven choices</p>
                </div>
                <div className="feature-item">
                  <h4>▦ QR Code Generator</h4>
                  <p>Elevate your customer's experiences with dynamic, scannable codes</p>
                </div>
                <div className="feature-item">
                  <h4>{"</>"} Short URL API</h4>
                  <p>Build powerful apps and automations with our link shortening API</p>
                </div>
              </div>
            </div>
          </li>
          <li>Domains</li>
          <li>Resources</li>
        </ul>
        <div className="auth">
          <span>Log In</span>
          <button>Sign Up</button>
        </div>
      </nav>
    </div>
  )
}

export default Features;