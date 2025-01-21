import React, { useState } from "react";
import "./Login.css";
import { logoBig } from "../../assets";

function Login() {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className="login">
      <img className="logo" src={logoBig} alt="" />
      <form className="login-form">
        <h2>{currentState}</h2>
        {currentState === "Sign Up" && (
          <input
            className="form-input"
            type="text"
            placeholder="username"
            required=""
          />
        )}

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
        <button onClick={() => setCurrentState("Sign Up")} type="submit">
          Create account
        </button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use &amp; privacy policy.</p>
        </div>
        <div className="login-forgot">
          {currentState === "Sign Up" ? (
            <p className="login-toggle">
              Already have an account?
              <span onClick={() => setCurrentState("Login")}>Login here</span>
            </p>
          ) : (
            <>
              <p className="login-toggle">
                Create an account
                <span onClick={() => setCurrentState("Sign Up")}>
                  Click here
                </span>
              </p>
              <p className="login-toggle">
                Forgot Password ?
                <span onClick={() => setCurrentState("Login")}>
                  {" "}
                  Click here
                </span>
              </p>
            </>
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;
