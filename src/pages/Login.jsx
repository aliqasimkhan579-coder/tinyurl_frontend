import React, { useState } from 'react'
import './Login.css'

const Login = () => {
  const [showPass, setShowPass] = useState(false)

  return (
    <div className="login-page">
      <div className="login-header">
        <h1 className="logo">TINYURL</h1>
      </div>

      <div className="login-container">
        <h2>Log In</h2>
        <p className="sub">Don't have an account? <span>Sign Up</span></p>

        <div className="divider">
          <span>continue with</span>
        </div>

        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter Email Address" />

          <label>Password</label>
          <div className="pass-box">
            <input type={showPass ? "text" : "password"} placeholder="Enter Password" />
            <span onClick={() => setShowPass(!showPass)}>👁️</span>
          </div>

          <div className="options">
            <label className="keep"><input type="checkbox" /> Keep me logged in</label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn">Log In</button>

          <div className="or">or</div>
        </form>
      </div>
    </div>
  )
}

export default Login