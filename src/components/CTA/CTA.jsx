import React from 'react'
import Button from '../Button/Button'
import './cta.css'

const CTA = () => {
  return (
    <div className='cta'>
      <div className="cta__container">
        <div className="cta__container-content">
          <h1>Let’s try our service now!</h1>
          <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <Button />
      </div>
    </div>
  )
}

export default CTA