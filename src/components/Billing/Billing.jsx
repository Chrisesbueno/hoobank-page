import React from 'react'
import { apple, bill, google } from '../../assets'
import './billing.css'

const Billing = () => {
  return (
    <div className='billing'>
      <div className="billing__img">
        <img src={bill} alt="" />
      </div>
      <div className="billing__content">
        <h1>Easily control your billing & invoicing.</h1>
        <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className="billing__content-img">
          <img src={apple} alt="" />
          <img src={google} alt="" />
        </div>
      </div>

      <div className="billing__white white__gradient"></div>
    </div>
  )
}

export default Billing