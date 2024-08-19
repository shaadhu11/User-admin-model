import React from 'react'
import './Signup.css'


import google_icon from '../assets/google_icon.svg'
import facebook_icon from '../assets/facebook_icon.svg'
import apple_icon from '../assets/apple_icon.svg'

 function Signup() {
  return (
    
    <div className='container'>
    <div className="header">
    <div className="text">Sign Up To</div>
    <div className='text'>Trade E-Waste</div>
    </div>
    <div className='inputs'>
      <div className='input'>
       
        <input type='First Name' placeholder='First Name'/>
      </div>
      <div className='input'>
       
        <input type='Last Name' placeholder='Last Name'/>
      </div><div className='input'>
       
        <input type='Phone Number' placeholder='Phone Number'/>
      </div><div className='input'>
        
        <input type='Email Address' placeholder='Email Address'/>
      </div><div className='input'>
        
        <input type='Address' placeholder='Address'/>
      </div><div className='input'>
        
        <input type='PassWord' placeholder='Password'/>
      </div><div className='input'>
        
        <input type='Retype Your Password'placeholder='Retype Your Password'/>
      
      </div>
    </div>
    
       <div className='submit-container'>
        <div className='submit'>Sign Up</div>
        
       </div>
    </div>
  )
}
export default Signup
