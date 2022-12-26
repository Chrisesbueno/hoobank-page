import React from 'react'
import { navLinks } from '../../constants'
import './links.css'

const Links = () => {
  return (
    <ul className="links">
        {navLinks.map((link) => (
            <li 
                key={link.id}
                className="link"
            >
                <a href={link.id}>{link.title}</a>
            </li>
        ))}
    </ul>
  )
}

export default Links