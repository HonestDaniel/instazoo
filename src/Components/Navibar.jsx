import React from "react";
import { Navbar } from "react-bootstrap";
import { NavbarBrand } from "react-bootstrap";
import LogoutIcon from '@mui/icons-material/Logout';

function Navibar() {
    return (
    <>
        <Navbar collapseOnSelect expand='lg' variant='dark' className='navbar'>
            <NavbarBrand className='navbrand'>Instazoo</NavbarBrand>
            <LogoutIcon className='logoutIcon'/>
        </Navbar>
    </>
    )
}

export default Navibar;
