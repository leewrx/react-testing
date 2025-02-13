import React from 'react'
import './Login.css';


function Login() {
  return (
    <div className="form-container">
        <h1>Welcome, We're glad your here.</h1>
    <form className="form">
    <label>Enter Your Email:</label>
      <input  placeholder='Email'></input>
      <label>Enter Your Password:</label>
      <input  placeholder='Password' type='password'></input>
      <button className="button"> Login</button>
      <p>Don't have an account? <a className="sign-up" href='#' >Sign Up here</a></p>
      </form>
    </div>
  );
}

export default Login;
