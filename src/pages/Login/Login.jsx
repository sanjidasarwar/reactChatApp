import React from "react";
import "./Login.css";
import { logoBig } from "../../assets";

function Login() {
  return (
    <div className="login">
      <img className="logo" src={logoBig} alt="" />
      <form className="login-form">
        <h2>Sign up</h2>
        <input
          className="form-input"
          type="text"
          placeholder="username"
          required=""
        />
        <input
          className="form-input"
          type="email"
          placeholder="Email address"
          required=""
        />
        <input
          className="form-input"
          type="password"
          placeholder="password"
          required=""
        />
        <button type="submit">Create account</button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use &amp; privacy policy.</p>
        </div>
        <div className="login-forgot">
          <p className="login-toggle">
            Already have an account? <span>Login here</span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
