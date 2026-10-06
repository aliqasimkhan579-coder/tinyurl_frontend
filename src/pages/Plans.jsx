import React, { useState } from 'react'

const Plans = () => {
  const [annual, setAnnual] = useState(false)
  
  return (
    <div className="pricing-section">
      <div className="pricing-header">
        <h1>Find a plan that meets your needs</h1>
        <div className="toggle">
          <button className={!annual ? 'active' : ''} onClick={() => setAnnual(false)}>Monthly</button>
          <button className={annual ? 'active' : ''} onClick={() => setAnnual(true)}>Annually</button>
        </div>
      </div>

      <div className="pricing-grid">
        <div className="intro-card">
          <h2>Get personal with <br/>branded links</h2>
          <p>TinyURL's paid tiers offer powerful link branding and customization features.</p>
          <p className="bold">Because why settle for being noticed when you can be remembered?</p>
          <span className="tax">* Listed prices exclude any applicable taxes.</span>
        </div>

        <div className="plan-card">
          <h3>Pro</h3>
          <h2>$9 <span>/ mo *</span></h2>
          <p className="yr">($108 / yr )</p>
          <p className="desc">Get full access to advanced link analytics, editing and management.</p>
          <div className="slider-label"><span>125</span><span>4K</span></div>
          <input type="range" />
          <ul>
            <li>✓ 125 Links / mo <small>+$1.50 per 10 additional links*</small></li>
            <li>✓ Unlimited Tracked Clicks</li>
            <li>✓ 3 Branded Domains</li>
          </ul>
        </div>

        <div className="plan-card">
          <h3>Bulk 50K</h3>
          <h2>$69 <span>/ mo *</span></h2>
          <p className="yr">($828 / yr )</p>
          <p className="desc">Generate, edit and manage your links in bulk.</p>
          <div className="slider-label"><span>50K</span><span>5M</span></div>
          <input type="range" />
          <ul>
            <li>✓ 50,000 Links / mo <small>+$2.00 per 1000 additional links*</small></li>
            <li>✓ 50,000 Tracked Clicks / mo <small>+$0.60 per 1000 additional clicks*</small></li>
            <li>✓ 3 Branded Domains</li>
          </ul>
        </div>

        <div className="plan-card">
          <h3>Enterprise</h3>
          <h2>Custom</h2>
          <p className="yr">( Starts at $3,999 / yr )</p>
          <p className="desc">A tailor-made plan for enterprises that need more than what our regular plans offer.</p>
          <ul>
            <li>✓ Custom Number of Links</li>
            <li>✓ Custom Number of Tracked Clicks</li>
            <li>✓ Custom Number of Branded Domains</li>
            <li>✓ 99.9% SLA-backed uptime guarantees</li>
            <li>✓ Custom Solutions for Compliance Needs</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Plans;