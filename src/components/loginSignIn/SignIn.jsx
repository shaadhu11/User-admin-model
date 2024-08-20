import React from 'react'
import './SignIn.css'
import SignUp from '../loginSignup/SignUp.js';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>SignIN</div>
      </div>
      <div className='inputs'>

        <div className='input'>  
          <input type='Email Address' placeholder='Email Address'/>
        </div>

        <div className='input'>  
        <input type='PassWord' placeholder='Password'/>
        </div>

        <div className='submit-container'>
        <div className='submit'>Sign In</div>
        </div>
        <div className='footer'>
          <h6>Forget your password ?</h6>
          <h3>OR</h3>
          <h2 >New to E-Waste <button className='btn'>signup</button></h2>
        </div>

      </div>


    </div>
  )
}

export default SignIn