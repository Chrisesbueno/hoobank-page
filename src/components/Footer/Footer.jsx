import React from 'react'
import './footer.css'
import { footerLinks } from '../../constants'
import { socialMedia } from '../../constants'

import { logo } from '../../assets'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__up">
        <div className="footer__up-main">
          <img src={logo} alt="logo" />
          <p>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className='footer__up-content'>
          {footerLinks.map((element) => (
            <div className={`footer__up-${element.id}`} key={element.id}>
              <h1>{element.title}</h1>
              <div>
                {element.links.map((e) => (
                  <a href={e.link} key={e.id}>{e.name}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer__down">
        <p>Copyright © - 2021 HooBank. All Rights Reserved.</p>
        <div className="footer__down-socialMedias">
          {socialMedia.map((social) => (
            <a href={social.link} key={social.id}>
              <img src={social.icon} alt="icon" /></a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer