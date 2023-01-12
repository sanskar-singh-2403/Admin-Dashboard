import React from 'react'
import './Login.css'
import imax5 from './Group.png'
import { Button } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Login() {
  return (
    <div className='login-page'>
      <div className='login-comp-1'>
        <div className='login-comp-1-text-1'>Welcome to App Name</div>
        <div className='login-comp-1-text-2'>Get ahead of the curve. Join the next generation of health heroes.</div>
        <div className='login-comp-1-img'>
          <img src={imax5} />
        </div>
      </div>

      <div className='login-comp-2'>
        <div className='login-comp-2-sign-in-comp'>
          Sign-in to your account
        </div>
        <div className='login-comp-2-inp'>
          <input type='text' className='login-comp-2-inp-1' placeholder='Username' ></input>
          <input type='text' className='login-comp-2-inp-2' placeholder='Password' ></input>
          <input type='text' className='login-comp-2-inp-3' placeholder='Select Unit Name' ></input>
          <KeyboardArrowDownIcon className='login-comp-2-inp-4' />
          <Button className='login-comp-2-inp-5' variant="contained" sx={{
            width: '319px',
            // background: '#FC6964'
            // color:'#FC6964'
          }} >Sign in</Button>
        </div>
      </div>
    </div>
  )
}

export default Login