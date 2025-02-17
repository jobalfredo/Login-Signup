import React, {useState} from 'react';
import './Loginsignup.css'
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";


const LoginSignup = () => {

    const [action, setAction] = useState('');

    const signupLink = () => {
      setAction(' action');
    };
    const loginLink = () => {
      setAction(' ');
    };

    return (
    <div className={`wrapper${action}`}>

{/* Login Form */}
      <div className="form-box login">
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder="Username" required FaUser />
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" required />
                <FaLock className='icon'/>
            </div>
            <div className="Random">
             <div className="remember-forgot">
              <label> <input type="checkbox"/>Remember me </label>
                <a href="#">Forgot Password</a>
              </div>
                  <button type="submit">Login</button>
                <div className="signup-link">
                  <p>Don't Have an Account? <a href="#" onClick={signupLink}>Sign up</a>
                  </p>
                </div>
            </div>
        </form>
      </div>

{/* Signup Form */}
      <div className="form-box signup">
        <form action=' '>
            <h1>Register</h1>
            <div className="input-box">
                <input type="text" placeholder="Username" required FaUser />
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="email" placeholder="Email" required FaUser />
                <FaEnvelope className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" required />
                <FaLock className='icon'/>
            </div>
            <div className="Random">
             <div className="remember-forgot">
              <label> <input type="checkbox"/> Do you accept the
              <a href="#"> Terms and Condition</a> ?</label>
              </div>
                  <button type="submit">Register</button>
                <div className="signup-link">
                  <p>Already have an Account? <a href="#" onClick={loginLink}>Sign In</a>
                  </p>
                </div>
            </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
