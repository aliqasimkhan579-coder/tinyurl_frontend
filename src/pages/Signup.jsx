import React, { useState } from 'react'
import './Signup.css'

const Signup = () => {
  const [showPass, setShowPass] = useState(false)
  const [password, setPassword] = useState("")

  return (
    <div className="signup-page">
      <div className="signup-header">
        <h1 className="logo">TINYURL</h1>
      </div>

      <div className="signup-container">
        <h2>Sign Up</h2>
        <p className="sub">Already a user? <span>Log In</span></p>

        <div className="divider"><span>continue with</span></div>

        <form>
          <label>Name</label>
          <input type="text" placeholder="Enter Full Name" />

          <label>Email</label>
          <input type="email" placeholder="Enter Email Address" />

          <label>Password</label>
          <div className="pass-box">
            <input 
              type={showPass ? "text" : "password"} 
              placeholder="Enter Password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
            <span onClick={()=> setShowPass(!showPass)}>👁️</span>
          </div>

          <div className="security">
            <div className="bar">
              <div className="fill" style={{width: password.length > 8 ? '80%' : password.length > 4 ? '40%' : '10%'}}></div>
            </div>
            <span>Security: <b>i</b></span>
          </div>

          <p className="terms">
            By Signing Up, you agree to our <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a>, and <a href="#">Use of Cookies</a>.
          </p>

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup