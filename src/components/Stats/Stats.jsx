import React from 'react'
import './stats.css'
import { stats } from '../../constants'

const Stats = () => {
  return (
    <div className='stats'>
      {stats.map((stat) => (
          <div key={stat.id} className="stats__content">
            <h1> {stat.value} </h1>
            <p className='text-gradient'> {stat.title} </p>
            <div className={`pale__${stat.id}`}></div>
          </div>
      ))}
    </div>
  )
}

export default Stats