import React from 'react'
import { quotes } from '../../assets'
import { feedback } from '../../constants'
import './testimonials.css'

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <div className="testimonials__content">
        <h1>What people are saying about us</h1>
        <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className="testimonials__container">
        {feedback.map((testimonial) => (
          <div className="testimonials__container-feedback" key={testimonial.id}>
            <img src={quotes}/>
            <p> {testimonial.content} </p>
            <div className="feedback__user">
              <img src={testimonial.img}/>
              <div className="feedback__user-content">
                <h3> {testimonial.name} </h3>
                <h4> {testimonial.title} </h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonials__blue">
        
      </div>
    </div>
  )
}

export default Testimonials