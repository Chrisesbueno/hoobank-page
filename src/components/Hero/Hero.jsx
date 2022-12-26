import React from 'react'
import { arrowUp, discount, robot } from '../../assets'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero__content">
        <div className="hero__content-discount bg-discount-gradient">
          <img src={discount} alt="discount" />
          <p><span>20%</span> DISCOUNT FOR <span>1 MONTH</span> ACCOUNT</p>
        </div>
        <div className="hero__content-title">
          <h1>The Next <br /> <span className='text-gradient'>Generation</span> <br /> Payment Method.</h1>
          <div className="button">
            <div className="button__content">
              <p className='text-gradient'>Get Started</p>
              <img src={arrowUp} alt="" />
            </div>
          </div>
        </div>
        <div className="hero__content-text">
          <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
          We examine annual percentage rates, annual fees.</p>
        </div>
      </div>
      <div className="hero-imgMain">
        <img src={robot} alt="robot" />
      </div>

      <div className="hero__white white__gradient"></div>

      <div className="hero__blue blue__gradient">
        <div className="hero__white2 white__gradient2"></div>
      </div>

      
    </div>
  )
}

export default Hero