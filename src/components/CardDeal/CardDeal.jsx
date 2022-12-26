import React from 'react'
import { card } from '../../assets'
import Button from '../Button/Button'
import './carddeal.css'

const CardDeal = () => {
  return (
    <div className='carddeal'>
      <div className="carddeal__content">
        <h1>Find a better card deal in few easy steps.</h1>
        <p>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button />
      </div>
      <div className="carddeal__img">
        <img src={card} alt="" />
      </div>
    </div>
  )
}

export default CardDeal