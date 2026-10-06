import React from 'react'
import './Domains.css'

const Domains = () => {
  return (
    <div className="domains-page">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">TINYURL</div>
        <ul>
          <li>Plans</li>
          <li>Features</li>
          <li className="active">Domains</li>
          <li>Resources</li>
        </ul>
        <div className="nav-right">
          <span>Log In</span>
          <button>Sign Up</button>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-text">
          <h1>Custom Domains:<br/>Your Links, Your<br/>Branding</h1>
          <p>
            Branded domains are used exclusively to create short,<br/>
            appealing, and informative links that put your branding or core<br/>
            message front-and-center.
          </p>
          <p className="p2">
            TinyURL subscribers can purchase domains directly through our<br/>
            platform. Try it now!
          </p>
          <button className="get-started">Get Started</button>
        </div>

        <div className="hero-img">
          <img 
            src="https://i.ibb.co/2kR5p0g/girl-laptop.png" 
            alt="girl"
            // If you want local, put any girl with laptop image in src/assets and import
          />
          {/* Fake UI for demo */}
          <div className="search-box">
            <span>🔍 Search for a domain</span>
            <button>Search</button>
          </div>
          <div className="domain-list">
            <div className="d-item green"><span>✓</span> .com</div>
            <div className="d-item yellow"><span></span> .net</div>
            <div className="d-item blue"><span></span> .org</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Domains