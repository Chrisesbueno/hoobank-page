import React from 'react'
import { features } from '../../constants'
import Button from '../Button/Button'
import './business.css'


const Business = () => {
  return (
    <div className='business'>
      <div className="business__content">
        <h1>You do the business, we’ll handle the money.</h1>
        <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button />
      </div>
      <div className="business__features">
        {features.map((feature) => (
          <div className="business__features-feature" key={feature.id}>
            <div className="business__features-feature__img">
              <img src={feature.icon} />
            </div>
            <div className="business__feature-feature__content">
              <h2> {feature.title} </h2>
              <p> {feature.content} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Business