import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = ({routes}) => {
    console.log(routes)
    return (
        <div className="navbar-container">
            {
                Object.keys(routes).map(route => 
                     <Link to={routes[route].path} key={route}>{routes[route].name}</Link>
                )
            }
        </div>
    )
  }
  
  export default Navbar;