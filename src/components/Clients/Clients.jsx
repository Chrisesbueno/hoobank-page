import React from 'react'
import { clients } from '../../constants'
import './clients.css'

const Clients = () => {
  return (
    <div className='clients'>
      {clients.map((client) => (
        <div className="clients__img" key={client.id}>
          <img src={client.logo} alt={`${client.logo}`} />
        </div>
      ))}
    </div>
  )
}

export default Clients