import React, { useState } from 'react'
import './navbar.css'
import { logo } from '../../assets'
import Links from '../Links/Links'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar__content">
        <div className="navbar__content-menu">
          {toggle ? (
            <i className="fa-solid fa-xmark" onClick={() => {
              setToggle(false)
            }}></i>
          ) : (
            <i className="fa-solid fa-bars" onClick={() => {
              setToggle(true)
            }}></i>
          )}
          {toggle && (
            <div className="menu bg-discount-gradient">
              <Links />
            </div>
          )}
        </div>

        <div className="navbar__content-links">
          <Links />
        </div>
      </div>
      
    </div>
  )
}

export default Navbar