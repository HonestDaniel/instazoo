import React from "react";
import Navibar from "../Components/Navibar";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export const LoginPage = () => {
  return (
    <>
        <Navibar/>
        <div class='formWrapper'>
            <h1 style={{textAlign: 'center'}}>Login</h1>
            <form method="post">
                <input placeholder="Email Address" type='email'/>
                <input placeholder="Password" type='password'/>
                <div className='buttonDiv'>
                    <Link to='/'>
                        <Button className = 'button'>Login</Button>
                    </Link>
                    <Link to='/register' style={{ margin: 'auto 0'}}>
                        Register
                    </Link>
                </div>
            </form>
        </div>
    </>
  )
};
