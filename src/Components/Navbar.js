import React, { useEffect, useState } from 'react';
import '../nav.css';
import logo from '../assets/Netflix-Logo.png';
import avatar from '../assets/Netflix-avatar.png';
const Navbar= ()=>{
    const [show, handleShow] = useState(false);
        useEffect(()=>{
            window.addEventListener("scroll", ()=>{
                if(window.scrollY>100){
                    handleShow(true);
                } else handleShow(false);
            });
            return ()=>{
                window.removeEventListener("scroll");
            };
        },[])
    return (
        <div className={`nav ${show && "nav-black"}`}>
            <img src={logo} alt="netflix-logo" className="nav-logo" />
            <img src={avatar} alt="netflix-avatar" className="nav-avatar" />
        </div>
    );

}
export default Navbar;