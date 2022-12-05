import React from "react";
import Navibar from "../Components/Navibar";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export const RegPage = () => {
  return (
    <>
        <Navibar/>
        <div class='formWrapper'>
            <h1 style={{textAlign: 'center'}}>Register</h1>
            <p style={{ textAlign: 'center', marginTop: '25px'}}>Already have an account? <Link to='/login'>Sign in</Link></p>
            <form method="post">
                <input placeholder="Email Address" type='email'/>
                <input placeholder="Username" type='text'/>
                <input placeholder="First name" type='text'/>
                <input placeholder="Last name" type='text'/>
                <input placeholder="Password" type='password'/>
                <input placeholder="Confirm password" type='password'/>
                <div className='buttonDiv'>
                    <Link to='/'>
                        <Button className = 'button'>Register</Button>
                    </Link>
                </div>
            </form>
        </div>
    </>
  )
};
