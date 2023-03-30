import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';


export const Navbar = () => {

   
    return (
     

    <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a><NavLink  to='/Home'>Home</NavLink></a></li>
                <li><a><NavLink  to='about'>About</NavLink></a></li>
                <li><a ><NavLink  to='registration'>Registration</NavLink></a></li>
                <li><a ><NavLink  to='customerLogin'>Login</NavLink></a></li>
                <li><a ><NavLink  to='adminLogin'>Admin Login</NavLink></a></li>
                <li><a ><NavLink  to='customerLogin'>Log Out</NavLink></a></li>
            </ul>
            <h1 class="logo">LensCart</h1>
        </div>
    </nav>



        
        
    )
}

